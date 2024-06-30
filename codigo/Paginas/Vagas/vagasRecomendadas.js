// Variáveis globais
let filteredItems = [];
let currentPage = 1;
const itensPorPagina = 4;

// Função para renderizar a página atual
function renderPage(page) {
    const vagasContainer = document.getElementById('container-vagas-recomendadas');
    if (!vagasContainer) {
        console.error('Container para vagas não encontrado.');
        return;
    }

    vagasContainer.innerHTML = '';

    const start = (page - 1) * itensPorPagina;
    const end = start + itensPorPagina;
    const pageItems = filteredItems.slice(start, end);

    console.log('Itens da página:', pageItems); // Log para verificar itens da página

    pageItems.forEach(vagaItem => {
        if (vagaItem.publicado) {
            const vagaCard = document.createElement('div');
            vagaCard.classList.add('Container', 'border', 'p-3', 'rounded-4', 'shadow-lg', 'mb-5', 'bg-body-tertiary', 'col-md-6', 'col-lg-4', 'col-xl-4', 'd-flex', 'flex-column', 'align-items-center');

            const title = document.createElement('div');
            title.classList.add('Cards-vagas-title', 'text-center', 'pb-2');
            const h2 = document.createElement('h2');
            h2.textContent = vagaItem.nome;
            title.appendChild(h2);

            const imagem = document.createElement('div');
            imagem.classList.add('Cards-vagas-imagem');
            const img = document.createElement('img');
            img.classList.add('rounded-3', 'img-fluid');
            img.src = vagaItem.imagem;
            img.alt = 'Imagem da vaga';
            img.onerror = function () {
                console.error('Erro ao carregar a imagem:', vagaItem.imagem);
                img.src = 'fallback_image_url.jpg'; // Imagem de fallback
            };
            imagem.appendChild(img);

            const descricao = document.createElement('div');
            descricao.classList.add('Cards-vagas-descrição', 'text-center');
            const p = document.createElement('p');
            const maxLength = 500;
            if (vagaItem.descricao) {
                p.textContent = vagaItem.descricao.substring(0, maxLength) + '...';
            } else {
                p.textContent = 'Descrição não disponível.';
            }
            descricao.appendChild(p);

            const bttn = document.createElement('div');
            bttn.classList.add('Cards-vagas-bttn', 'd-grid', 'gap-2', 'col-6', 'mx-auto');
            const button = document.createElement('button');
            button.classList.add('btn');
            button.textContent = 'Ver detalhes';
            button.onclick = function () {
                mostrarDetalhesVaga(vagaItem);
            };
            bttn.appendChild(button);

            vagaCard.appendChild(title);
            vagaCard.appendChild(imagem);
            vagaCard.appendChild(descricao);
            vagaCard.appendChild(bttn);

            vagasContainer.appendChild(vagaCard);
        }
    });

    updatePagination();
}

// Função para atualizar a paginação
function updatePagination() {
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(filteredItems.length / itensPorPagina);

    pagination.innerHTML += `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="selectPage(${currentPage - 1})">Anterior</a>
        </li>
    `;

    for (let i = 1; i <= totalPages; i++) {
        pagination.innerHTML += `
            <li class="page-item ${currentPage === i ? 'active' : ''}">
                <a class="page-link" href="#" onclick="selectPage(${i})">${i}</a>
            </li>
        `;
    }

    pagination.innerHTML += `
        <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="selectPage(${currentPage + 1})">Próximo</a>
        </li>
    `;
}

// Função para selecionar uma página
function selectPage(page) {
    if (page < 1 || page > Math.ceil(filteredItems.length / itensPorPagina)) return;
    currentPage = page;
    renderPage(page);
}

document.addEventListener("DOMContentLoaded", function () {
    let usuarioCorrente = lerUsuarioCorrenteLS();
    const vagasContainer = document.getElementById('container-vagas-recomendadas');
    const JSON_SERVER_URL_VAGAS = 'http://localhost:3000/vagas';

    // Verifique se axios está disponível
    if (typeof axios === 'undefined') {
        console.error('Axios não está definido. Verifique se o script axios está incluído no HTML.');
        return;
    }

    // Criação dos cards
    axios.get(JSON_SERVER_URL_VAGAS)
        .then(response => {
            const vagas = response.data;
            filteredItems = vagas.filter(vagaItem => {
                return usuarioCorrente.interesses.includes(vagaItem.categoria) && vagaItem.publicado;
            });

            if (!vagasContainer) {
                console.error('Container para vagas não encontrado.');
                return;
            }

            // Se não encontrou vagas, exibe a mensagem
            if (filteredItems.length === 0) {
                const mensagem = document.createElement('p');
                mensagem.textContent = 'Não foi encontrada nenhuma vaga baseada nos seus interesses.';
                mensagem.classList.add('text-center', 'mt-4');
                vagasContainer.appendChild(mensagem);
            } else {
                renderPage(currentPage);
            }
        })
        .catch(error => {
            console.error('Erro ao buscar dados do servidor:', error);
        });
});

function lerUsuarioCorrenteLS() {
    let strUsuario = localStorage.getItem('UsuarioCorrente');
    return strUsuario ? JSON.parse(strUsuario) : null;
}
