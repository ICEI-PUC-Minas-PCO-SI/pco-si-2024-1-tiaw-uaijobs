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

            if (!vagasContainer) {
                console.error('Container para vagas não encontrado.');
                return;
            }

            let encontrouVagas = false;

            vagas.forEach(vagaItem => {
                usuarioCorrente.interesses.forEach(interesse => {
                    if (interesse === vagaItem.categoria && vagaItem.publicado) {
                        encontrouVagas = true;
                        const vagaCard = document.createElement('div');
                        vagaCard.classList.add('Container', 'border', 'p-3', 'rounded-4', 'shadow-lg', 'p-3', 'mb-5', 'bg-body-tertiary', 'mx-5', 'col-xxl-4');

                        const title = document.createElement('div');
                        title.classList.add('Cards-vagas-title', 'text-center', 'pb-2');
                        const h2 = document.createElement('h2');
                        h2.textContent = vagaItem.nome;
                        title.appendChild(h2);

                        const imagem = document.createElement('div');
                        imagem.classList.add('Cards-vagas-imagem', 'pb-2', 'ps-5');
                        const img = document.createElement('img');
                        img.classList.add('rounded-3');
                        img.src = vagaItem.imagem;
                        img.alt = 'Imagem da vaga';
                        img.onerror = function () {
                            console.error('Erro ao carregar a imagem:', vagaItem.imagem);
                            img.src = 'fallback_image_url.jpg'; // Imagem de fallback
                        };
                        imagem.appendChild(img);

                        const descricao = document.createElement('div');
                        descricao.classList.add('Cards-vagas-descrição');
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
                        button.classList.add('btn', 'btn-outline-danger');
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
            });

            // Se não encontrou vagas, exibe a mensagem
            if (!encontrouVagas) {
                const mensagem = document.createElement('p');
                mensagem.textContent = 'Não foi encontrada nenhuma vaga baseada nos seus interesses.';
                mensagem.classList.add('text-center', 'mt-4');
                vagasContainer.appendChild(mensagem);
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