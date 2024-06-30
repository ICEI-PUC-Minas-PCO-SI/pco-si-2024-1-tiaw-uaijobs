JSON_SERVER_URL_FREELANCERS =  'http://localhost:3000/freelancers'
let freelancers = [];
let filteredItems = [];
let currentPage = 1;
const itensPorPagina = 4;
let filters = {
    categoria: '',
    distance: null
};

// Carrega os dados dos freelancers ao carregar a página
document.addEventListener("DOMContentLoaded", async function () {
    const response = await axios.get(`${JSON_SERVER_URL_FREELANCERS}`);
    freelancers = response.data;
    console.log(freelancers);
    populateCategoryDropdown();
    renderPage(currentPage); // Renderiza todos os freelancers inicialmente
});

// Função para aplicar os filtros
async function applyFilters() {
    console.log('Aplicando filtros:', filters);
    const usuarioCorrente = JSON.parse(localStorage.getItem('UsuarioCorrente'));

    let userCoordinates = null;
    if (usuarioCorrente && usuarioCorrente.cep) {
        try {
            userCoordinates = await buscarCoordenadasPorCEP(usuarioCorrente.cep);
        } catch (error) {
            console.error('Erro ao buscar coordenadas do usuário:', error);
        }
    }

    filteredItems = [];
    for (let item of freelancers) {
        let distanciaValida = true;
        if (filters.distance && userCoordinates && item.cep) {
            try {
                const freelancerCoordinates = await buscarCoordenadasPorCEP(item.cep);
                const distancia = calcularDistancia(userCoordinates.lat, userCoordinates.lng, freelancerCoordinates.lat, freelancerCoordinates.lng);
                distanciaValida = distancia <= filters.distance;
            } catch (error) {
                console.error('Erro ao calcular distância:', error);
                distanciaValida = false;
            }
        }

        if (
            (!filters.categoria || item.interesses.includes(filters.categoria)) &&
            distanciaValida
        ) {
            filteredItems.push(item);
        }
    }

    currentPage = 1;
    renderPage(currentPage);
}

// Função para renderizar a página
function renderPage(page) {
    const freelancerContainer = document.getElementById('container-freelancers-disponiveis');
    if (!freelancerContainer) {
        console.error('Container para freelancers não encontrado.');
        return;
    }

    freelancerContainer.innerHTML = '';

    const start = (page - 1) * itensPorPagina;
    const end = start + itensPorPagina;
    const pageItems = filters.categoria || filters.distance ? filteredItems.slice(start, end) : freelancers.slice(start, end);

    console.log('Itens da página:', pageItems);

    pageItems.forEach((freelancer, index) => {
        const freelancerCard = document.createElement('div');
        freelancerCard.classList.add('Container', 'border', 'p-3', 'rounded-4', 'shadow-lg', 'p-3', 'mb-5', 'bg-body-tertiary');

        if (pageItems.length === 1) {
            freelancerCard.classList.add('single-card');
        }

        const title = document.createElement('div');
        title.classList.add('Cards-freelancer-title', 'text-center', 'pb-2');
        const h2 = document.createElement('h2');
        h2.textContent = freelancer.nome;
        title.appendChild(h2);

        const imagem = document.createElement('div');
        imagem.classList.add('Cards-freelancer-imagem', 'pb-2', 'ps-5');
        const img = document.createElement('img');
        img.classList.add('rounded-3');
        img.src = freelancer.imagem;
        img.alt = 'Imagem do freelancer';
        img.onerror = function () {
            console.error('Erro ao carregar a imagem:', freelancer.imagem);
            img.src = 'fallback_image_url.jpg';
        };
        imagem.appendChild(img);

        const descricao = document.createElement('div');
        descricao.classList.add('Cards-freelancer-descrição');
        const p = document.createElement('p');
        const maxLength = 500;
        if (freelancer.bio) {
            p.textContent = freelancer.bio.substring(0, maxLength) + '...';
        } else {
            p.textContent = 'Biografia não disponível.';
        }
        descricao.appendChild(p);

        const bttn = document.createElement('div');
        bttn.classList.add('Cards-freelancer-bttn', 'd-grid', 'gap-2', 'col-6', 'mx-auto');
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-outline-danger');
        button.setAttribute('data-bs-toggle', 'modal');
        button.setAttribute('data-bs-target', '#userModal');
        button.textContent = 'Ver detalhes';
        button.onclick = function () {
            preencherModal(freelancer);
        };
        bttn.appendChild(button);

        freelancerCard.appendChild(title);
        freelancerCard.appendChild(imagem);
        freelancerCard.appendChild(descricao);
        freelancerCard.appendChild(bttn);

        freelancerContainer.appendChild(freelancerCard);
    });

    updatePagination();
}
// Função para atualizar a paginação
function updatePagination() {
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil((filters.categoria || filters.distance ? filteredItems : freelancers).length / itensPorPagina);

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
    if (page < 1 || page > Math.ceil((filters.categoria || filters.distance ? filteredItems : freelancers).length / itensPorPagina)) return;
    currentPage = page;
    renderPage(page);
}

// Função para definir os filtros
function setFilter(filterType, value, dropdownId) {
    filters[filterType] = value;
    document.getElementById(dropdownId).innerText = value;
    applyFilters();
}

// Função para resetar os filtros
function resetFilters() {
    filters = {
        categoria: '',
        distance: null
    };
    document.getElementById('dropdownCategory').innerText = 'Categoria';
    document.getElementById('dropdownDistance').innerText = 'Distância';
    applyFilters();
}

// Função para popular o dropdown de categorias
function populateCategoryDropdown() {
    const dropdownMenu = document.getElementById('dropdownCategoryMenu');
    const uniqueCategories = [...new Set(freelancers.flatMap(freelancer => freelancer.interesses))];

    uniqueCategories.forEach(category => {
        const listItem = document.createElement('li');
        const linkItem = document.createElement('a');
        linkItem.classList.add('dropdown-item');
        linkItem.href = '#';
        linkItem.textContent = category;
        linkItem.onclick = () => setFilter('categoria', category, 'dropdownCategory');
        listItem.appendChild(linkItem);
        dropdownMenu.appendChild(listItem);
    });
}

// Função para buscar as coordenadas por CEP usando a API do Google Maps
async function buscarCoordenadasPorCEP(cep) {
    const apiKey = 'AIzaSyDpyahm2yA-CCerVqOXj-xufJzQXbwA8D4';
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=${apiKey}`);
    const data = await response.json();
    if (data.status !== 'OK') {
        throw new Error('CEP não encontrado');
    }
    const location = data.results[0].geometry.location;
    return {
        lat: location.lat,
        lng: location.lng
    };
}

// Função para calcular a distância entre duas coordenadas
function calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371; // Raio da Terra em km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        0.5 - Math.cos(dLat) / 2 + 
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        (1 - Math.cos(dLon)) / 2;

    return R * 2 * Math.asin(Math.sqrt(a));
}

// Função para preencher o modal com os detalhes do freelancer
async function preencherModal(freelancer) {
    // Limpar informações de contato anteriores
    document.getElementById('contatoInformacoes').classList.add('d-none');
    document.getElementById('telefoneContato').textContent = '';
    document.getElementById('emailContato').textContent = '';
    document.getElementById('linkedinContato').textContent = '';

    document.getElementById('nomeUsuario').querySelector('h2').textContent = freelancer.nome;
    document.querySelector('.img_usuario img').src = freelancer.imagem;
    document.getElementById('DataNascUsuario').textContent = freelancer.dataNascimento || 'Data de nascimento não disponível';

    // Fetch location based on CEP
    const location = await buscarLocalizacao(freelancer.cep);
    document.getElementById('localizacaoUsuario').textContent = location || 'Localização não disponível';
    
    document.getElementById('descricaoUsuario').textContent = freelancer.bio || 'Biografia não disponível';
    
    const listaInteresses = document.getElementById('listaInteresses');
    listaInteresses.innerHTML = '';
    if (freelancer.interesses && freelancer.interesses.length > 0) {
        freelancer.interesses.forEach(interesse => {
            const li = document.createElement('li');
            li.textContent = interesse;
            listaInteresses.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'Nenhum interesse disponível';
        listaInteresses.appendChild(li);
    }

    // Add event listener for the contact button
    document.getElementById('botaoContato').onclick = function() {
        exibeInformacoesContato(freelancer);
    };
}

// Função para exibir as informações de contato do freelancer
function exibeInformacoesContato(freelancer) {
    document.getElementById('telefoneContato').textContent = `Telefone: ${freelancer.telefone}`;
    document.getElementById('emailContato').textContent = `Email: ${freelancer.email}`;
    if (freelancer.linkedin) {
        document.getElementById('linkedinContato').innerHTML = `LinkedIn: <a href="${freelancer.linkedin}" target="_blank">${freelancer.linkedin}</a>`;
    } else {
        document.getElementById('linkedinContato').textContent = 'LinkedIn: Não disponível';
    }
    document.getElementById('contatoInformacoes').classList.remove('d-none');
}

// Função para buscar a localização baseada no CEP
async function buscarLocalizacao(cep) {
    if (!cep) return 'CEP não disponível';
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        if (response.data.erro) {
            return 'Localização não encontrada';
        }
        const { localidade, uf } = response.data;
        return `${localidade} - ${uf}`;
    } catch (error) {
        console.error('Erro ao buscar localização:', error);
        return 'Erro ao buscar localização';
    }
}
