// Variáveis globais
let jobData = [];
let filteredItems = [];
let currentPage = 1;
const itensPorPagina = 4;
let filters = {
    categoria: '',
    periodo: '',
    dataIni: '',
    dataFim: '',
    valorHora: 1000,
    lat: null,
    lng: null,
    distance: null
};

// Função que carrega as vagas do JSON-Server na página
document.addEventListener("DOMContentLoaded", function () {
    const vagasContainer = document.getElementById('container-vagas-abertas');
    const JSON_SERVER_URL_VAGAS = 'http://localhost:3000/vagas';

    // Verifique se axios está disponível
    if (typeof axios === 'undefined') {
        console.error('Axios não está definido. Verifique se o script axios está incluído no HTML.');
        return;
    }

    // Criação dos cards
    axios.get(JSON_SERVER_URL_VAGAS)
        .then(response => {
            jobData = response.data;
            console.log('Dados recebidos:', jobData); // Log para verificar dados recebidos
            filteredItems = jobData; // Inicialmente todas as vagas são exibidas

            if (!vagasContainer) {
                console.error('Container para vagas não encontrado.');
                return;
            }

            populateCategoryDropdown(); // Preencher dropdown de categorias
            applyFilters(); // Aplicar filtros (mesmo que inicialmente não haja filtros)
        })
        .catch(error => {
            console.error('Erro ao buscar dados do servidor:', error);
        });
});

// Função para preencher o dropdown de categorias
function populateCategoryDropdown() {
    const dropdownCategory = document.getElementById('dropdownCategory');
    const uniqueCategories = [...new Set(jobData.map(item => item.categoria))];

    const dropdownMenu = document.createElement('ul');
    dropdownMenu.classList.add('dropdown-menu');
    dropdownMenu.setAttribute('aria-labelledby', 'dropdownCategory');

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

    // Remove any existing dropdown-menu and append the new one
    const existingDropdownMenu = dropdownCategory.nextElementSibling;
    if (existingDropdownMenu) {
        dropdownCategory.parentNode.removeChild(existingDropdownMenu);
    }
    dropdownCategory.parentNode.appendChild(dropdownMenu);
}

// Função para calcular a distância entre dois pontos (usando a fórmula de Haversine)
function calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371; // Raio da Terra em km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        0.5 - Math.cos(dLat)/2 + 
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        (1 - Math.cos(dLon)) / 2;

    return R * 2 * Math.asin(Math.sqrt(a));
}

// Função para buscar coordenadas por CEP
async function buscarCoordenadasPorCEP(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    if (data.erro) {
        throw new Error('CEP não encontrado');
    }
    const coordenadas = await fetch(`https://nominatim.openstreetmap.org/search?postalcode=${cep}&country=Brazil&format=json&addressdetails=1`);
    const geoData = await coordenadas.json();
    if (geoData.length === 0) {
        throw new Error('Coordenadas não encontradas para o CEP fornecido');
    }
    return {
        lat: parseFloat(geoData[0].lat),
        lon: parseFloat(geoData[0].lon)
    };
}

// Função para aplicar filtros e exibir os resultados
async function applyFilters() {
    console.log('Aplicando filtros:', filters); // Log para verificar filtros
    const usuarioCorrente = JSON.parse(localStorage.getItem('UsuarioCorrente'));

    let userCoordinates = null;
    if (usuarioCorrente && usuarioCorrente.cep) {
        try {
            userCoordinates = await buscarCoordenadasPorCEP(usuarioCorrente.cep);
        } catch (error) {
            console.error('Erro ao buscar coordenadas do usuário:', error);
        }
    }

    // Filtrar itens
    filteredItems = [];
    for (let item of jobData) {
        const itemDate = new Date(item.data.split('/').reverse().join('-'));
        const dataIni = filters.dataIni ? new Date(filters.dataIni.split('/').reverse().join('-')) : null;
        const dataFim = filters.dataFim ? new Date(filters.dataFim.split('/').reverse().join('-')) : null;

        let distanciaValida = true;
        if (filters.distance && userCoordinates && item.CEP) {
            try {
                const jobCoordinates = await buscarCoordenadasPorCEP(item.CEP);
                const distancia = calcularDistancia(userCoordinates.lat, userCoordinates.lon, jobCoordinates.lat, jobCoordinates.lon);
                distanciaValida = distancia <= filters.distance;
            } catch (error) {
                console.error('Erro ao calcular distância:', error);
                distanciaValida = false;
            }
        }

        if (
            (!filters.categoria || item.categoria === filters.categoria) &&
            (!filters.periodo || item.turno === filters.periodo) &&
            (item.valor <= filters.valorHora) && // Comparação correta do valor
            (!dataIni || itemDate >= dataIni) &&
            (!dataFim || itemDate <= dataFim) &&
            distanciaValida
        ) {
            filteredItems.push(item);
        }
    }

    currentPage = 1; // Resetar para a primeira página após aplicar filtros
    renderPage(currentPage);
}
// Função para renderizar a página atual
function renderPage(page) {
    const vagasContainer = document.getElementById('container-vagas-abertas');
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
        if (vagaItem.publicado && vagaItem.online) {
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

// Funções para aplicar filtros específicos
function setFilter(filterType, value, dropdownId) {
    filters[filterType] = value;
    document.getElementById(dropdownId).innerText = value;
    applyFilters();
}

function resetFilters() {
    filters = {
        categoria: '',
        periodo: '',
        dataIni: '',
        dataFim: '',
        valorHora: 1000,
        lat: null,
        lng: null,
        distance: null
    };
    document.getElementById('dropdownCategory').innerText = 'Categoria';
    document.getElementById('dropdownPeriod').innerText = 'Período';
    document.getElementById('dropdownDistance').innerText = 'Distância';
    document.getElementById('valorHora').value = 1000; // Ajuste aqui para garantir que o valor é resetado
    document.getElementById('valorHoraMinLabel').innerText = 0;
    document.getElementById('valorHoraMaxLabel').innerText = 1000;
    document.getElementById('dateRange').value = '';  // Reset date range input
    applyFilters();
}

// Inicializa os filtros e flatpickr
document.addEventListener('DOMContentLoaded', () => {
    applyFilters();

    flatpickr("#dateRange", {
        mode: "range",
        dateFormat: "d/m/Y",
        locale: "pt",
        onChange: function (selectedDates) {
            if (selectedDates.length === 2) {
                filters.dataIni = selectedDates[0].toLocaleDateString("pt-BR");
                filters.dataFim = selectedDates[1].toLocaleDateString("pt-BR");
                applyFilters();
            }
        }
    });
});
// Função para atualizar o rótulo do valor e aplicar os filtros
function updatavalorHoraLabel(value) {
    document.getElementById('valorHoraMaxLabel').innerText = value;
    filters.valorHora = parseInt(value, 10);
    applyFilters();
}


// Função que abre modal com os detalhes da vaga desejada
async function mostrarDetalhesVaga(vaga) {
    const vagaDetalhes = document.getElementById('vagaDetalhes');
    
    const endereco = await buscarEnderecoPorCEP(vaga.local);
    const enderecoTexto = endereco ? `${endereco.logradouro}, ${endereco.bairro}, ${endereco.localidade} - ${endereco.uf}` : 'Endereço não encontrado.';

    vagaDetalhes.innerHTML = `
        <h5>${vaga.nome}</h5>
        <p><strong>Categoria:</strong> ${vaga.categoria}</p>
        <p><strong>Descrição:</strong> ${vaga.descricao || 'Descrição não disponível.'}</p>
        <p><strong>Publicação:</strong> ${vaga.publicacao}</p>
        <p><strong>Valor:</strong> R$ ${vaga.valor}</p>
        <p><strong>Turno:</strong> ${vaga.turno}</p>
        <p><strong>Data:</strong> ${vaga.data}</p>
        <p><strong>Local:</strong> ${enderecoTexto}</p>
        <p><strong>Empresa:</strong> ${vaga.empregador}</p>
        <p><strong>Telefone:</strong> ${vaga.telefone}</p>
        <p><strong>Habilidades:</strong> ${vaga.habilidades.join(', ')}</p>
    `;

    const usuarioCorrente = JSON.parse(localStorage.getItem('UsuarioCorrente'));
    const candidatarButton = document.getElementById('candidatarButton');
    
    // Verifica se o usuário já se candidatou//pode se candidatar na vaga e altera o conteúdo do botão
    if (usuarioCorrente && usuarioCorrente.tipo === 'freelancer') {
        if (usuarioCorrente.vagasCandidatadas && usuarioCorrente.vagasCandidatadas.includes(vaga.id)) {
            candidatarButton.textContent = 'Candidatado';
            candidatarButton.classList.add('btn-success');
            candidatarButton.disabled = true;
        } else {
            candidatarButton.textContent = 'Candidatar';
            candidatarButton.classList.remove('btn-success');
            candidatarButton.disabled = false;
            candidatarButton.onclick = function() {
                candidatarVaga(vaga.id, usuarioCorrente.id);
            };
        }
        candidatarButton.style.display = 'block';
    } else {
        candidatarButton.style.display = 'none';
    }

    const vagaModal = new bootstrap.Modal(document.getElementById('vagaModal'));
    vagaModal.show();
}

// Função para candidatar-se à vaga
async function candidatarVaga(vagaId) {
    const usuarioCorrente = JSON.parse(localStorage.getItem('UsuarioCorrente'));
    if (!usuarioCorrente || usuarioCorrente.tipo !== 'freelancer') {
        window.alert("Apenas freelancers podem se candidatar a vagas.");
        return;
    }

    try {
        // Obter os dados do freelancer
        const freelancerResponse = await fetch(`${JSON_SERVER_URL_FREELANCERS}/${usuarioCorrente.id}`);
        if (!freelancerResponse.ok) {
            throw new Error('Erro ao obter dados do freelancer');
        }

        const freelancer = await freelancerResponse.json();
        if (!freelancer.vagasCandidatadas) {
            freelancer.vagasCandidatadas = [];
        }

        // Verificar o limite de vagas candidatas
        //6 para userPremium = true  3 Para userPremium = false
        const limiteVagas = usuarioCorrente.userPremium ? 6 : 3;
        if (freelancer.vagasCandidatadas.length >= limiteVagas) {
            window.alert(`Você atingiu o limite de ${limiteVagas} candidaturas.`);
            return;
        }

        // Adicionar o ID da vaga ao array de vagasCandidatadas, se ainda não estiver presente
        if (!freelancer.vagasCandidatadas.includes(vagaId)) {
            freelancer.vagasCandidatadas.push(vagaId);
        } else {
            window.alert('Você já se candidatou a esta vaga.');
            return;
        }

        // Atualizar o freelancer no JSON Server
        const updateFreelancerResponse = await fetch(`${JSON_SERVER_URL_FREELANCERS}/${usuarioCorrente.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ vagasCandidatadas: freelancer.vagasCandidatadas })
        });

        if (!updateFreelancerResponse.ok) {
            throw new Error('Erro ao atualizar vagas candidatas do freelancer');
        }

        // Atualizar o Local Storage
        usuarioCorrente.vagasCandidatadas = freelancer.vagasCandidatadas;
        localStorage.setItem('UsuarioCorrente', JSON.stringify(usuarioCorrente));

        // Obter os dados da vaga
        const vagaResponse = await fetch(`${JSON_SERVER_URL_VAGAS}/${vagaId}`);
        if (!vagaResponse.ok) {
            throw new Error('Erro ao obter dados da vaga');
        }

        const vaga = await vagaResponse.json();
        if (!vaga.candidatos) {
            vaga.candidatos = [];
        }

        // Adicionar o ID do freelancer ao array de candidatos, se ainda não estiver presente
        if (!vaga.candidatos.includes(usuarioCorrente.id)) {
            vaga.candidatos.push(usuarioCorrente.id);
        }

        // Atualizar a vaga no JSON Server
        const updateVagaResponse = await fetch(`${JSON_SERVER_URL_VAGAS}/${vagaId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ candidatos: vaga.candidatos })
        });

        if (!updateVagaResponse.ok) {
            throw new Error('Erro ao atualizar candidatos da vaga');
        }

        window.alert('Você se candidatou com sucesso!');
    } catch (error) {
        console.error("Erro ao candidatar-se à vaga:", error);
        window.alert('Erro ao candidatar-se à vaga. Por favor, tente novamente.');
    }
}
// Função para calcular a distância entre dois pontos (usando a fórmula de Haversine)
function calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371; // Raio da Terra em km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
        0.5 - Math.cos(dLat)/2 + 
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
        (1 - Math.cos(dLon)) / 2;

    return R * 2 * Math.asin(Math.sqrt(a));
}

// Função para buscar coordenadas por CEP
async function buscarCoordenadasPorCEP(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    if (data.erro) {
        throw new Error('CEP não encontrado');
    }
    const coordenadas = await fetch(`https://nominatim.openstreetmap.org/search?postalcode=${cep}&country=Brazil&format=json&addressdetails=1`);
    const geoData = await coordenadas.json();
    if (geoData.length === 0) {
        throw new Error('Coordenadas não encontradas para o CEP fornecido');
    }
    return {
        lat: parseFloat(geoData[0].lat),
        lon: parseFloat(geoData[0].lon)
    };
}

// Página de publicar vagas
const JSON_SERVER_URL_VAGAS = 'http://localhost:3000/vagas';
const JSON_SERVER_URL_EMPREGADORES = 'http://localhost:3000/empregadores';
const JSON_SERVER_URL_FREELANCERS = 'http://localhost:3000/freelancers';

// Função para buscar o endereço pelo CEP
async function buscarEnderecoPorCEP(cep) {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar endereço:', error);
        return null;
    }
}

// Função para salvar a vaga no JSON Server
async function salvarVagaNoJSONServer(vaga, empregadorId) {
    try {
        console.log("Salvando vaga no servidor:", vaga);
        let response = await fetch(JSON_SERVER_URL_VAGAS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vaga)
        });

        if (response.ok) {
            let novaVaga = await response.json();
            await atualizarEmpregadorComVaga(empregadorId, novaVaga.id);
            window.alert('A vaga foi publicada! Para acessá-la, visite a aba de "Vagas em Aberto"');
            return novaVaga;
        } else {
            throw new Error('Erro ao salvar vaga no JSON Server');
        }
    } catch (error) {
        console.error(error);
        window.alert('Falha ao salvar vaga no servidor. Por favor, tente novamente.');
    }
}

// Função para atualizar o empregador com a nova vaga publicada
async function atualizarEmpregadorComVaga(empregadorId, vagaId) {
    try {
        const response = await fetch(`${JSON_SERVER_URL_EMPREGADORES}/${empregadorId}`);
        if (!response.ok) {
            throw new Error('Erro ao obter dados do empregador');
        }

        const empregador = await response.json();
        if (!empregador.vagasPublicadas) {
            empregador.vagasPublicadas = [];
        }

        empregador.vagasPublicadas.push(vagaId);

        const updateResponse = await fetch(`${JSON_SERVER_URL_EMPREGADORES}/${empregadorId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ vagasPublicadas: empregador.vagasPublicadas })
        });

        if (!updateResponse.ok) {
            throw new Error('Erro ao atualizar dados do empregador');
        }

        console.log(`Empregador ${empregadorId} atualizado com a nova vaga ${vagaId}`);
    } catch (error) {
        console.error('Erro ao atualizar empregador com a nova vaga:', error);
    }
}

// Função para obter a data atual no formato DD/MM/AAAA
function obterDataAtual() {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const ano = hoje.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

// Função para fazer upload da imagem para Cloudinary
async function uploadImagem(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'Imagens_UAIJobs'); // Use o nome exato do seu upload preset

    try {
        console.log("Iniciando upload da imagem para Cloudinary");
        const response = await fetch('https://api.cloudinary.com/v1_1/df7rlfmhg/image/upload', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Imagem enviada com sucesso:", data.secure_url);
            return data.secure_url; // URL da imagem
        } else {
            const errorText = await response.text();
            console.error("Erro ao fazer upload da imagem. Status:", response.status, "Mensagem:", errorText);
            throw new Error('Erro ao fazer upload da imagem');
        }
    } catch (error) {
        console.error("Erro ao fazer upload da imagem:", error);
        return null;
    }
}

// Função para verificar o limite de vagas
async function verificarLimiteVagas(empregadorId) {
    try {
        const response = await fetch(`${JSON_SERVER_URL_EMPREGADORES}/${empregadorId}`);
        if (!response.ok) {
            throw new Error('Erro ao obter dados do empregador');
        }

        const empregador = await response.json();
        if (!empregador.vagasPublicadas) {
            empregador.vagasPublicadas = [];
        }
        //10 para userPremium = true  5 Para userPremium = false
        const limiteVagas = empregador.UserPremium ? 10 : 5;
        if (empregador.vagasPublicadas.length >= limiteVagas) {
            return false;
        }

        return true;
    } catch (error) {
        console.error('Erro ao verificar limite de vagas:', error);
        return false;
    }
}

// Função para incluir uma vaga no Json Server
async function IncluirVagaLS() {
    console.log("Iniciando inclusão de vaga...");
    const usuarioCorrente = JSON.parse(localStorage.getItem('UsuarioCorrente'));
    if (!usuarioCorrente || usuarioCorrente.tipo !== 'empregador') {
        window.alert('Apenas empregadores podem publicar vagas.');
        return;
    }

    // Verificar o limite de vagas
    const podePublicar = await verificarLimiteVagas(usuarioCorrente.id);
    if (!podePublicar) {
        window.alert(`Você atingiu o limite de vagas publicadas.`);
        return;
    }

    let nomeVaga = document.getElementById('nomeVaga').value;
    let categoriaVaga = document.getElementById('categoriaVaga').value;
    let descricaoVaga = document.getElementById('descricaoVaga').value;
    let valorVaga = document.getElementById('valorVaga').value;
    let turnoVaga = document.getElementById('turnoVaga').value;
    let CEP = parseInt(document.getElementById('localVaga').value, 10);
    let dataVaga = document.getElementById('dataVaga').value;
    let habilidadesVaga = document.getElementById('habilidadesVaga').value.split(',');
    let imagemInput = document.getElementById('imagemVaga').files[0];

    if (nomeVaga === '' || categoriaVaga === '' || valorVaga === '' || descricaoVaga === '') {
        window.alert("Por favor, tenha certeza que todos os campos abaixos estão preenchidos: \n\nVaga: Nome, Categoria, Valor e Descrição \nContratante: Nome, E-mail e CPF/CNPJ");
        return;
    }

    let imagemVagaUrl = await uploadImagem(imagemInput);
    if (!imagemVagaUrl) {
        window.alert('Erro ao fazer upload da imagem. Por favor, tente novamente.');
        return;
    }

    let novaVaga = {
        nome: nomeVaga,
        categoria: categoriaVaga,
        descricao: descricaoVaga,
        imagem: imagemVagaUrl,
        valor: valorVaga,
        turno: turnoVaga,
        local: CEP,
        data: dataVaga,
        habilidades: habilidadesVaga,
        empregador: usuarioCorrente.nome,
        email: usuarioCorrente.email,
        telefone: usuarioCorrente.telefone,
        cnpj: usuarioCorrente.cpf,
        publicado: true,
        publicacao: obterDataAtual(),
        candidatos: [], // Inicializa com um array vazio para os candidatos
        online: true,
        IDfreelancerEscolhido: null
    };

    console.log("Nova vaga:", novaVaga);
    salvarVagaNoJSONServer(novaVaga, usuarioCorrente.id);
}

// Adicionar event listener ao botão de publicação de vaga
document.addEventListener('DOMContentLoaded', function() {
    const btnPublicarVaga = document.getElementById('btnPublicarVaga');
    if (btnPublicarVaga) {
        btnPublicarVaga.addEventListener('click', IncluirVagaLS);
    }
});


//Vagas candidatadas / vagas postadas

//Função que modifica o botão de página dinâmica dependendo do tipo de usuário (Se freelancer = vagas candidatadas // se empregador = vagas publicadas)
//Botão para acessar a página
document.addEventListener("DOMContentLoaded", function() {
    const usuarioCorrente = JSON.parse(localStorage.getItem('UsuarioCorrente'));
    const dynamicButton = document.getElementById('dynamicButton');
    if (usuarioCorrente) {
        if (usuarioCorrente.tipo === 'freelancer') {
            dynamicButton.textContent = 'Vagas candidatadas';
            dynamicButton.onclick = function() {
                location.href = 'PagDinamicaPostCand.html';
            };
        } else if (usuarioCorrente.tipo === 'empregador') {
            dynamicButton.textContent = 'Vagas publicadas';
            dynamicButton.onclick = function() {
                location.href = 'PagDinamicaPostCand.html';
            };
        }
        dynamicButton.style.display = 'block';
    }
});

//Botão para redirecionamento

document.addEventListener("DOMContentLoaded", function () {
    const botaoAcao = document.getElementById('botaoAcao');
    const usuarioCorrente = JSON.parse(localStorage.getItem('UsuarioCorrente'));

    if (usuarioCorrente) {
        if (usuarioCorrente.tipo === 'freelancer') {
            botaoAcao.textContent = 'Vagas Abertas';
            botaoAcao.onclick = function() {
                location.href = 'VagaAberto.html';
            };
        } else if (usuarioCorrente.tipo === 'empregador') {
            botaoAcao.textContent = 'Publicar Vaga';
            botaoAcao.onclick = function() {
                location.href = 'PublicarVaga.html';
            };
        }
    } else {
        botaoAcao.style.display = 'none'; // Esconde o botão se não houver usuário logado
    }
});
//Tipo de vaga que vai ser exibida
document.addEventListener("DOMContentLoaded", async function () {
    const vagasContainer = document.getElementById('Vagas-candidatada-postada');
    const JSON_SERVER_URL_VAGAS = 'http://localhost:3000/vagas';
    const JSON_SERVER_URL_EMPREGADORES = 'http://localhost:3000/empregadores';
    const JSON_SERVER_URL_FREELANCERS = 'http://localhost:3000/freelancers';

    const usuarioCorrente = JSON.parse(localStorage.getItem('UsuarioCorrente'));

    if (!usuarioCorrente) {
        console.error('Nenhum usuário corrente encontrado.');
        return;
    }

    let vagas = [];

    if (usuarioCorrente.tipo === 'empregador') {
        const response = await axios.get(`${JSON_SERVER_URL_EMPREGADORES}/${usuarioCorrente.id}`);
        const empregador = response.data;
        if (empregador.vagasPublicadas) {
            for (let vagaId of empregador.vagasPublicadas) {
                const vagaResponse = await axios.get(`${JSON_SERVER_URL_VAGAS}/${vagaId}`);
                if (vagaResponse.data) {
                    vagas.push(vagaResponse.data);
                }
            }
        }
    } else if (usuarioCorrente.tipo === 'freelancer') {
        const response = await axios.get(`${JSON_SERVER_URL_FREELANCERS}/${usuarioCorrente.id}`);
        const freelancer = response.data;
        if (freelancer.vagasCandidatadas) {
            for (let vagaId of freelancer.vagasCandidatadas) {
                console.log(`Fetching vaga with ID: ${vagaId}`);
                try {
                    const vagaResponse = await axios.get(`${JSON_SERVER_URL_VAGAS}/${vagaId}`);
                    if (vagaResponse.data) {
                        vagas.push(vagaResponse.data);
                    }
                } catch (error) {
                    console.error(`Erro ao buscar vaga com ID ${vagaId}:`, error);
                }
            }
        }
    }

    if (!vagasContainer) {
        console.error('Container para vagas não encontrado.');
        return;
    }
    
//Carrega vagas
    vagas.forEach(vagaItem => {
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
        button.onclick = function() {
            mostrarDetalhesVaga(vagaItem);
        };
        bttn.appendChild(button);
        
        vagaCard.appendChild(title);
        vagaCard.appendChild(imagem);
        vagaCard.appendChild(descricao);
        vagaCard.appendChild(bttn);

        vagasContainer.appendChild(vagaCard);
    });

    async function mostrarDetalhesVaga(vaga) {
        const vagaDetalhes = document.getElementById('vagaDetalhes');
        
        const endereco = await buscarEnderecoPorCEP(vaga.local);
        const enderecoTexto = endereco ? `${endereco.logradouro}, ${endereco.bairro}, ${endereco.localidade} - ${endereco.uf}` : 'Endereço não encontrado.';
    
        vagaDetalhes.innerHTML = `
            <h5>${vaga.nome}</h5>
            <p><strong>Categoria:</strong> ${vaga.categoria}</p>
            <p><strong>Descrição:</strong> ${vaga.descricao || 'Descrição não disponível.'}</p>
            <p><strong>Publicação:</strong> ${vaga.publicacao}</p>
            <p><strong>Valor:</strong> R$ ${vaga.valor}</p>
            <p><strong>Turno:</strong> ${vaga.turno}</p>
            <p><strong>Data:</strong> ${vaga.data}</p>
            <p><strong>Local:</strong> ${enderecoTexto}</p>
            <p><strong>Empresa:</strong> ${vaga.empregador}</p>
            <p><strong>Telefone:</strong> ${vaga.telefone}</p>
            <p><strong>Habilidades:</strong> ${vaga.habilidades ? vaga.habilidades.join(', ') : 'Não especificado'}</p>
        `;
    
        const candidatarButton = document.getElementById('candidatarButton');
        const excluirButton = document.getElementById('excluirButton');
        const editarButton = document.getElementById('editarButton');
        const verCandidatosButton = document.getElementById('verCandidatosButton');
    
        if (usuarioCorrente && usuarioCorrente.tipo === 'freelancer') {
            if (usuarioCorrente.vagasCandidatadas && usuarioCorrente.vagasCandidatadas.includes(vaga.id)) {
                candidatarButton.textContent = 'Candidatado';
                candidatarButton.classList.add('btn-success');
                candidatarButton.disabled = true;
            } else {
                candidatarButton.textContent = 'Candidatar';
                candidatarButton.classList.remove('btn-success');
                candidatarButton.disabled = false;
                candidatarButton.onclick = function() {
                    candidatarVaga(vaga.id);
                };
            }
            candidatarButton.style.display = 'block';
        } else {
            candidatarButton.style.display = 'none';
        }
    
        if (usuarioCorrente && usuarioCorrente.tipo === 'empregador' && usuarioCorrente.nome === vaga.empregador) {
            excluirButton.style.display = 'block';
            excluirButton.onclick = function() {
                excluirVaga(vaga.id);
            };
    
            editarButton.style.display = 'block';
            editarButton.onclick = function() {
                editarVaga(vaga);
            };
    
            verCandidatosButton.style.display = 'block';
            verCandidatosButton.onclick = function() {
                mostrarCandidatos(vaga.id);
            };
        } else {
            excluirButton.style.display = 'none';
            editarButton.style.display = 'none';
            verCandidatosButton.style.display = 'none';
        }
    
        const vagaModal = new bootstrap.Modal(document.getElementById('vagaModal'));
        vagaModal.show();
    }
    
    // Função para editar a vaga
    function editarVaga(vaga) {
        const nomeVaga = prompt("Nome da Vaga:", vaga.nome);
        const categoriaVaga = prompt("Categoria da Vaga:", vaga.categoria);
        const descricaoVaga = prompt("Descrição da Vaga:", vaga.descricao);
        const valorVaga = prompt("Valor da Vaga:", vaga.valor);
        const turnoVaga = prompt("Turno da Vaga:", vaga.turno);
        const habilidadesVaga = prompt("Habilidades da Vaga:", vaga.habilidades ? vaga.habilidades.join(', ') : '');
    
        const vagaAtualizada = {
            nome: nomeVaga,
            categoria: categoriaVaga,
            descricao: descricaoVaga,
            valor: valorVaga,
            turno: turnoVaga,
            habilidades: habilidadesVaga.split(',').map(h => h.trim())
        };
    
        atualizarVagaNoServidor(vaga.id, vagaAtualizada);
    }
    
    // Função para atualizar a vaga no servidor
    async function atualizarVagaNoServidor(vagaId, vagaAtualizada) {
        try {
            const response = await fetch(`${JSON_SERVER_URL_VAGAS}/${vagaId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(vagaAtualizada)
            });
    
            if (response.ok) {
                alert("Vaga atualizada com sucesso.");
                window.location.reload(); // Recarrega a página para atualizar a lista de vagas
            } else {
                throw new Error('Erro ao atualizar a vaga');
            }
        } catch (error) {
            console.error("Erro ao atualizar a vaga:", error);
            alert('Erro ao atualizar a vaga. Por favor, tente novamente.');
        }
    }
    
    // Função para excluir a vaga
    async function excluirVaga(vagaId) {
        const confirmar = confirm("Tem certeza de que deseja excluir esta vaga?");
        if (!confirmar) return;
    
        try {
            // Excluir a vaga do JSON Server
            const response = await fetch(`${JSON_SERVER_URL_VAGAS}/${vagaId}`, {
                method: 'DELETE'
            });
    
            if (response.ok) {
                // Atualizar vagasPublicadas no JSON Server
                const empregadorResponse = await axios.get(`${JSON_SERVER_URL_EMPREGADORES}/${usuarioCorrente.id}`);
                const empregador = empregadorResponse.data;
                empregador.vagasPublicadas = empregador.vagasPublicadas.filter(id => id !== vagaId);
                
                await fetch(`${JSON_SERVER_URL_EMPREGADORES}/${usuarioCorrente.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ vagasPublicadas: empregador.vagasPublicadas })
                });
    
                // Atualizar vagasPublicadas no localStorage
                usuarioCorrente.vagasPublicadas = usuarioCorrente.vagasPublicadas.filter(id => id !== vagaId);
                localStorage.setItem('UsuarioCorrente', JSON.stringify(usuarioCorrente));
    
                alert("Vaga excluída com sucesso.");
                window.location.reload(); // Recarrega a página para atualizar a lista de vagas
            } else {
                throw new Error('Erro ao excluir a vaga');
            }
        } catch (error) {
            console.error("Erro ao excluir a vaga:", error);
            alert('Erro ao excluir a vaga. Por favor, tente novamente.');
        }
    }
    
// Função para mostrar os candidatos da vaga
async function mostrarCandidatos(vagaId) {
    const candidatosModal = new bootstrap.Modal(document.getElementById('candidatosModal'));
    const candidatosContainer = document.getElementById('candidatosContainer');
    candidatosContainer.innerHTML = ''; // Limpa o container antes de adicionar novos candidatos

    try {
        const vagaResponse = await fetch(`${JSON_SERVER_URL_VAGAS}/${vagaId}`);
        const vaga = await vagaResponse.json();
        
        if(vaga.online){
            if (vaga.candidatos && vaga.candidatos.length > 0) {
                for (let candidatoId of vaga.candidatos) {
                    const candidatoResponse = await fetch(`${JSON_SERVER_URL_FREELANCERS}/${candidatoId}`);
                    const candidato = await candidatoResponse.json();
                    const candidatoCard = document.createElement('div');
                    candidatoCard.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-3');
                    candidatoCard.innerHTML = `
                        <div class="card cardCandidato">
                            <div class="card-body cardCandidatoSelecao">
                                <input class="idCandidato" style="display: none" value="${candidato.id}">
                                <input class="idVaga" style="display: none" value="${vagaId}">
                                <h5 class="card-title">${candidato.nome}</h5>
                                <img src="${candidato.imagem}" alt="Foto de ${candidato.nome}" class="img-fluid mb-3">
                                <p class="card-text"><strong>Habilidades:</strong> ${candidato.interesses.join(', ')}</p>
                                <div class="contato-info" style="display:none;">
                                    <p class="card-text"><strong>Email:</strong> ${candidato.email}</p>
                                    <p class="card-text"><strong>Telefone:</strong> ${candidato.telefone}</p>
                                    <p class="card-text"><strong>LinkedIn:</strong> <a href="${candidato.linkedin}" target="_blank">${candidato.linkedin}</a></p>
                                </div>
                                
                            </div>
                        </div>
                    `;
                    candidatosContainer.appendChild(candidatoCard);
    
                    //Função que habilita seleção de candidato nas vagas publicadas
                    let candidatoCardSelecao = document.querySelectorAll(".cardCandidatoSelecao")
                    let cardCandidato = document.querySelectorAll(".cardCandidato")
                    var btnSelecionaCandidato = document.getElementById("btnSelecionaCandidato")
    
                    cardCandidato.forEach(card => {
                        card.addEventListener("click", () => {
    
                            btnSelecionaCandidato.style.display = "block"
    
                            
                            candidatoCardSelecao.forEach(divInterna => {
                                divInterna.classList.remove("selecionado")
                            })
    
                            const cardCandidatoSelecaoClicado = card.querySelector('.cardCandidatoSelecao')
    
                            if(cardCandidatoSelecaoClicado){
                                cardCandidatoSelecaoClicado.classList.add("selecionado")
                            }
                        } )
    
    
                    })
    
                }
            } else {
                candidatosContainer.textContent = 'Nenhum candidato para esta vaga.';
            }
        } else {
            const response = await fetch(`${JSON_SERVER_URL_FREELANCERS}/${vaga.IDfreelancerEscolhido}`);
            const candidatoSelecionado = await response.json();

            const candidatoCard = document.createElement('div');
            const smallModalCandidato = document.getElementById("smallCandidato")

            candidatoCard.classList.add('col-12','m-3');
            candidatoCard.innerHTML = `
                                        <div class="card cardCandidato p-0 m-4">
                                            <div class="card-body cardCandidatoSelecao">
                                                <h5 class="card-title">${candidatoSelecionado.nome}</h5>
                                                <img src="${candidatoSelecionado.imagem}" alt="Foto de ${candidatoSelecionado.nome}" class="img-fluid mb-3 w-25">
                                                <p class="card-text"><strong>Habilidades:</strong> ${candidatoSelecionado.interesses.join(', ')}</p>
                                                <div class="contato-info">
                                                    <p class="card-text"><strong>Email:</strong> ${candidatoSelecionado.email}</p>
                                                    <p class="card-text"><strong>Telefone:</strong> ${candidatoSelecionado.telefone}</p>
                                                    <p class="card-text"><strong>LinkedIn:</strong> <a href="${candidatoSelecionado.linkedin}" target="_blank">${candidatoSelecionado.linkedin}</a></p>
                                                </div>
                                                
                                            </div>
                                        </div>`;
            candidatosContainer.appendChild(candidatoCard);

            smallModalCandidato.textContent = `Você escolheu o ${candidatoSelecionado.nome} como seu Freelancer! Entre em contato com ele e resolva suas demandas! Obrigado por confiar na UaiJobs!`

            console.log(candidatoSelecionado)
        }
        
    } catch (error) {
        console.error('Erro ao buscar candidatos:', error);
        candidatosContainer.textContent = 'Erro ao buscar candidatos.';
    }

    candidatosModal.show();
}



// Função para excluir a vaga
async function excluirVaga(vagaId) {
    const confirmar = confirm("Tem certeza de que deseja excluir esta vaga?");
    if (!confirmar) return;

    try {
        // Excluir a vaga do JSON Server
        const response = await fetch(`${JSON_SERVER_URL_VAGAS}/${vagaId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            // Atualizar vagasPublicadas no JSON Server
            const empregadorResponse = await axios.get(`${JSON_SERVER_URL_EMPREGADORES}/${usuarioCorrente.id}`);
            const empregador = empregadorResponse.data;
            empregador.vagasPublicadas = empregador.vagasPublicadas.filter(id => id !== vagaId);
            
            await fetch(`${JSON_SERVER_URL_EMPREGADORES}/${usuarioCorrente.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ vagasPublicadas: empregador.vagasPublicadas })
            });

            // Atualizar vagasPublicadas no localStorage
            usuarioCorrente.vagasPublicadas = usuarioCorrente.vagasPublicadas.filter(id => id !== vagaId);
            localStorage.setItem('UsuarioCorrente', JSON.stringify(usuarioCorrente));

            alert("Vaga excluída com sucesso.");
            window.location.reload(); // Recarrega a página para atualizar a lista de vagas
        } else {
            throw new Error('Erro ao excluir a vaga');
        }
    } catch (error) {
        console.error("Erro ao excluir a vaga:", error);
        alert('Erro ao excluir a vaga. Por favor, tente novamente.');
    }
}
    async function buscarEnderecoPorCEP(cep) {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar endereço:', error);
            return null;
        }
    }
    
});
// Função para mostrar as informações de contato
function mostrarContato(button) {
    const contatoInfo = button.nextElementSibling;
    contatoInfo.style.display = 'block';
    button.style.display = 'none';
}

//Botão que deve sumir se usuario for freelancer
// Função que lê o usuário logado no momento
function lerUsuarioCorrenteLS() {
    let strUsuario = localStorage.getItem('UsuarioCorrente');
    return strUsuario ? JSON.parse(strUsuario) : null;
}

// Função que oculta o botão "Publicar Vaga" se o usuário corrente for um freelancer
function ocultarBotaoParaFreelancer() {
    const usuarioCorrente = lerUsuarioCorrenteLS();
    if (usuarioCorrente && usuarioCorrente.tipo === 'freelancer') {
        const botaoVagasAbertas = document.getElementById('botaoVagasAbertas');
        if (botaoVagasAbertas) {
            botaoVagasAbertas.style.display = 'none';
        }
    }
}

// Chama a função para ocultar o botão ao carregar a página
document.addEventListener('DOMContentLoaded', ocultarBotaoParaFreelancer);

function selecionaCandidato(){
    let candidatoId = document.querySelector(".cardCandidato .selecionado .idCandidato").value
    let vagaId = document.querySelector(".cardCandidato .selecionado .idVaga").value
  
    const vagaAtualizada = {
        online: false,
        IDfreelancerEscolhido: candidatoId
    };

    const candidatoAtualizado = {
        vagasRealizadas: vagaId
    }
    updateVagaOnline(vagaId, vagaAtualizada);
    updateCandidato(candidatoId, candidatoAtualizado);


    console.log(candidatoId, vagaId)
}

async function updateVagaOnline(vagaId, vagaAtualizada) {
    try {
        const response = await fetch(`${JSON_SERVER_URL_VAGAS}/${vagaId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vagaAtualizada)
        });

        if (response.ok) {
            alert("Candidato selecionado com sucesso! Informações disponíveis na área dos candidatos!");
            window.location.reload(); // Recarrega a página para atualizar a lista de vagas
        } else {
            throw new Error('Erro ao atualizar a vaga');
        }
    } catch (error) {
        console.error("Erro ao atualizar a vaga:", error);
        alert('Erro ao atualizar a vaga. Por favor, tente novamente.');
    }
}

async function updateCandidato(candidatoId, candidatoAtualizado) {
    try {
        const response = await fetch(`${JSON_SERVER_URL_FREELANCERS}/${candidatoId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(candidatoAtualizado)
        });

        if (response.ok) {
            window.location.reload(); // Recarrega a página para atualizar a lista de vagas
        }
    } catch (error) {
        console.error("Erro ao atualizar a vaga:", error);
    }
}