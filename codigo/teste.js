const jobData = [
    {
        "title": "Desenvolvedor Web",
        "description": "Estamos procurando um desenvolvedor web com experiência em JavaScript e React.",
        "image": "img/dev.jpg",
        "lat": "-19.945820",
        "lgt": "-44.041089",
        "categoria": "Tecnologia",
        "periodo": "Manhã",
        "data": "Hoje",
        "dataLiteral": "10/01/2001",
        "cidade": "Belo Horizonte",
        "valorHora": 100
    },
    {
        "title": "Designer Gráfico",
        "description": "Procuramos um designer gráfico talentoso para criar gráficos impressionantes.",
        "image": "img/designer.png",
        "lat": "-19.952721",
        "lgt": "-44.037770",
        "categoria": "Tecnologia",
        "periodo": "Tarde",
        "data": "Esta semana",
        "dataLiteral": "10/01/2001",
        "cidade": "Contagem",
        "valorHora": 80
    },
    {
        "title": "Analista de Dados",
        "description": "Buscamos um analista de dados para interpretar e analisar grandes volumes de dados.",
        "image": "img/analista.jpg",
        "lat": "-19.950878",
        "lgt": "-44.034519",
        "categoria": "Tecnologia",
        "periodo": "Noite",
        "data": "Este mês",
        "dataLiteral": "10/01/2001",
        "cidade": "Betim",
        "valorHora": 120
    },
    {
        "title": "Jardineiro",
        "description": "Buscamos jardineiro para realizar manutenção de jardins.",
        "image": "img/jardineiro.jpg",
        "lat": "-19.946582",
        "lgt": "-44.029358",
        "categoria": "Serviços Gerais",
        "periodo": "Manhã",
        "data": "Hoje",
        "dataLiteral": "10/01/2001",
        "cidade": "Belo Horizonte",
        "valorHora": 40
    },
    {
        "title": "Garçom",
        "description": "Precisamos de um garçom para atender alta demanda.",
        "image": "img/garcom.jpg",
        "lat": "-19.932234",
        "lgt": "-44.014335",
        "categoria": "Serviços Gerais",
        "periodo": "Noite",
        "data": "Hoje",
        "dataLiteral": "10/02/2001",
        "cidade": "Belo Horizonte",
        "valorHora": 35
    },
    {
        "title": "Entregador",
        "description": "Precisamos de um entregador para trabalhar num periodo de uma semana.",
        "image": "img/entregador.jpg",
        "lat": "-19.937182",
        "lgt": "-44.046036",
        "categoria": "Serviços Gerais",
        "periodo": "Tarde",
        "data": "Esta semana",
        "dataLiteral": "10/01/2001",
        "cidade": "Contagem",
        "valorHora": 50
    },
    {
        "title": "Desenvolvedor Mobile",
        "image": "img/DevMob.png",
        "description": "Especializado na criação de aplicativos dinâmicos e responsivos para Android e iOS, este freelancer combina profundo conhecimento técnico com uma abordagem criativa para entregar soluções móveis que não só atendem, mas superam as expectativas dos clientes.",
        "lat": "-19.940820",
        "lgt": "-44.042089",
        "categoria": "Tecnologia",
        "periodo": "Manhã",
        "data": "Hoje",
        "dataLiteral": "10/01/2001",
        "cidade": "Belo Horizonte",
        "valorHora": 100
    },
    {
        "title": "Vendedor",
        "image": "img/Venda.png",
        "description": "Estamos buscando um profissional dinâmico e motivado para se juntar à nossa equipe como Vendedor. O candidato ideal deverá ter um forte interesse por vendas e um compromisso com o atendimento ao cliente de excelência.",
        "lat": "-19.951721",
        "lgt": "-44.032770",
        "categoria": "Vendas",
        "periodo": "Tarde",
        "data": "Esta semana",
        "dataLiteral": "10/01/2001",
        "cidade": "Contagem",
        "valorHora": 50
    },
    {
        "title": "Desenvolvedor front-end",
        "image": "img/DevFront.jpg",
        "description": "Estamos em busca de um Desenvolvedor Front-end apaixonado por criar interfaces atraentes e funcionais, capaz de transformar designs em código limpo e eficiente.",
        "lat": "-19.950878",
        "lgt": "-44.034519",
        "categoria": "Tecnologia",
        "periodo": "Noite",
        "data": "Este mês",
        "dataLiteral": "10/01/2001",
        "cidade": "Betim",
        "valorHora": 120
    },
    {
        "title": "Doméstico",
        "image": "img/Domestico.jpeg",
        "description": "Estamos em busca de um(a) Trabalhador(a) Doméstico(a) para cuidar das atividades diárias de nossa residência. O candidato ideal deve ser confiável, organizado(a) e proativo(a).",
        "lat": "-19.946582",
        "lgt": "-44.029358",
        "categoria": "Serviços Gerais",
        "periodo": "Manhã",
        "data": "Este mês",
        "dataLiteral": "10/01/2001",
        "cidade": "Belo Horizonte",
        "valorHora": 30
    },
    {
        "title": "Editor de vídeo",
        "image": "img/EditVideo.jpg",
        "description": "Estamos em busca de um(a) Editor(a) de Vídeo talentoso(a) para colaborar em projetos emocionantes e criativos. O(a) candidato(a) ideal deve ter experiência sólida em edição de vídeo e habilidades técnicas para transformar imagens em narrativas visualmente impactantes.",
        "lat": "-19.940820",
        "lgt": "-44.042089",
        "categoria": "Tecnologia",
        "periodo": "Tarde",
        "data": "Esta semana",
        "dataLiteral": "10/01/2001",
        "cidade": "Contagem",
        "valorHora": 80
    },
    {
        "title": "Desenvolvedor back-end",
        "image": "img/DevBack.jpg",
        "description": "Procuramos um Desenvolvedor Back-end dedicado para integrar nossa equipe de tecnologia. O candidato ideal deverá desenvolver e manter soluções de backend robustas e eficientes.",
        "lat": "-19.950878",
        "lgt": "-44.034519",
        "categoria": "Tecnologia",
        "periodo": "Noite",
        "data": "Hoje",
        "dataLiteral": "10/01/2001",
        "cidade": "Belo Horizonte",
        "valorHora": 150
    },
    {
        "title": "Pedreiro",
        "image": "img/Pedreiro.jpg",
        "description": "Buscamos um Pedreiro experiente para se juntar à nossa equipe em projetos de construção residencial e comercial. O candidato ideal deve ser habilidoso em diversas técnicas de construção e reparos, garantindo trabalho de qualidade e aderência aos prazos.",
        "lat": "-19.950878",
        "lgt": "-44.034519",
        "categoria": "Construção",
        "periodo": "Manhã",
        "data": "Este mês",
        "dataLiteral": "10/01/2001",
        "cidade": "Betim",
        "valorHora": 70
    },
    {
        "title": "Churrasqueiro",
        "image": "img/Churras.jpg",
        "description": "Estamos em busca de um(a) Churrasqueiro(a) para se juntar à nossa equipe em um ambiente descontraído e acolhedor. O candidato ideal deve ter paixão pela arte do churrasco e habilidades excepcionais em preparar carnes de qualidade.",
        "lat": "-19.937182",
        "lgt": "-44.046036",
        "categoria": "Serviços Gerais",
        "periodo": "Tarde",
        "data": "Esta semana",
        "dataLiteral": "10/01/2001",
        "cidade": "Contagem",
        "valorHora": 40
    }
];

let currentPage = 1;
let filteredItems = jobData;

let filters = {
    categoria: '',
    periodo: '',
    data: '',
    dataIni: '',
    dataFim: '',
    cidade: '',
    valorHora: 1000
};

// Atualiza o botão do dropdown com o valor selecionado
function updateDropdownButton(dropdownId, value) {
    const button = document.getElementById(dropdownId);
    button.innerHTML = value + ' <span class="caret"></span>';
}

// Define o filtro e aplica os filtros
function setFilter(filterType, value, dropdownId) {
    filters[filterType] = value;
    console.log(filters);
    updateDropdownButton(dropdownId, value);
    applyFilters();
}

// Atualiza o valor do filtro de valor por hora
function updatavalorHoraLabel(value) {
    filters.valorHora = parseInt(value);
    document.getElementById('valorHoraMaxLabel').innerText = value;
    applyFilters();
}

// Aplica os filtros aos itens
function applyFilters() {
    filteredItems = jobData.filter(item => {

        if(filters.dataIni && filters.dataFim){
            var dateFrom = filters.dataIni.split("/");
            var dateTo = filters.dataFim.split("/");
            var dateCheck = item.dataLiteral.split("/");

            var from = new Date(dateFrom[2], parseInt(dateFrom[1])-1, dateFrom[0]);  // -1 porque meses são de 0 a 11
            var to   = new Date(dateTo[2], parseInt(dateTo[1])-1, dateTo[0]);
            var check = new Date(dateCheck[2], parseInt(dateCheck[1])-1, dateCheck[0]);

            if(!(check >= from && check <= to)){
                return false;
            }
        }

        return (!filters.categoria || item.categoria === filters.categoria) &&
        (!filters.periodo || item.periodo === filters.periodo) &&
        (!filters.data || item.data === filters.data) &&
        (!filters.cidade || item.cidade === filters.cidade) &&
        (item.valorHora <= filters.valorHora);
    });
    
    console.log(filteredItems);
    numberOfPages = Math.ceil(filteredItems.length / 3);
    currentPage = 1;
    selectPage(1);
}

function resetFilters() {
    filters = {
        categoria: '',
        periodo: '',
        data: '',
        dataIni: '',
        dataFim: '',
        cidade: '',
        valorHora: 1000
    };

    document.getElementById('dropdownCategory').innerText = 'Categoria';
    document.getElementById('dropdownPeriod').innerText = 'Período';
    document.getElementById('dropdownDate').innerText = 'Data';
    document.getElementById('dropdownCity').innerText = 'Cidade';
    document.getElementById('valorHora').value = 1000;
    document.getElementById('valorHoraMinLabel').innerText = 0;
    document.getElementById('valorHoraMaxLabel').innerText = 1000;

    applyFilters();
}

// Seleciona a página
function selectPage(page) {
    currentPage = page;
    const start = (page - 1) * 3;
    const end = start + 3;
    const pageItems = filteredItems.slice(start, end);

    const jobCardsContainer = document.getElementById('job-cards-container');
    jobCardsContainer.innerHTML = ''; // Limpa os cartões anteriores

    pageItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card mb-4 d-flex flex-row align-items-center';

        const link = document.createElement('a');
        link.href = `details.html?title=${encodeURIComponent(item.title)}`;
        link.className = 'd-flex flex-row align-items-center text-decoration-none text-dark bg-light';

        link.innerHTML = `
            <img src="${item.image}" class="card-img-left" alt="${item.title}" style="width: 30%; height: auto;">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.description}</p>
            </div>
        `;

        card.appendChild(link);
        jobCardsContainer.appendChild(card);
    });
}

// Muda para a página anterior
function backPage() {
    if (currentPage > 1) {
        selectPage(currentPage - 1);
    }
}

// Muda para a próxima página
function fowardPage() {
    if (currentPage < numberOfPages) {
        selectPage(currentPage + 1);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    selectPage(1);

    // Inicializa o Flatpickr
    flatpickr("#dateRange", {
        mode: "range",
        dateFormat: "d/m/Y",
        locale: "pt",
        onChange: function(selectedDates, dateStr, instance) {
            if (selectedDates.length === 2) {
                filters.dataIni = selectedDates[0].toLocaleDateString("pt-BR");
                filters.dataFim = selectedDates[1].toLocaleDateString("pt-BR");
                applyFilters();
            }
        }
    });

    //-----------------------------MAPA-----------------------------------------
    const params = new URLSearchParams(window.location.search);
    const userCep = params.get('cep');
    const userAddress = params.get('address');
    const userLat = parseFloat(params.get('lat'));
    const userLng = parseFloat(params.get('lng'));

    if (userAddress) {
        document.getElementById('user-address').textContent = decodeURIComponent(userAddress);
    }

    document.getElementById('change-cep').addEventListener('click', () => {
        window.location.href = 'cep_input.html';
    });

    mapboxgl.accessToken = 'pk.eyJ1IjoiaWdvcm1tZiIsImEiOiJjbHd3cnl4dzExNHpsMmlvOHdzMzN3aTBiIn0.BOMzGXeX4cjnW2X-qpYzJw';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [userLng, userLat],
        zoom: 12
    });

    jobData.forEach(location => {
        const marker = new mapboxgl.Marker()
            .setLngLat([location.lgt, location.lat])
            .setPopup(new mapboxgl.Popup().setHTML(`<h3>${location.title}</h3>`))
            .addTo(map);
    }); // cria os cards com base na lat e lgn no JSON

    if (userLat && userLng) {
        new mapboxgl.Marker({ color: 'yellow' })
            .setLngLat([userLng, userLat])
            .setPopup(new mapboxgl.Popup().setHTML(`<h3>Você está aqui</h3>`))
            .addTo(map);
    } else {
        navigator.geolocation.getCurrentPosition(position => {
            const userLocation = [position.coords.longitude, position.coords.latitude];
            map.setCenter(userLocation);
            new mapboxgl.Marker({ color: 'yellow' })
                .setLngLat(userLocation)
                .setPopup(new mapboxgl.Popup().setHTML(`<h3>Você está aqui</h3>`))
                .addTo(map);
        }, () => {
            alert('Erro ao obter localização.');
        });
    } // cria sua localização com base no CEP

    //----------------------------------------------------------------------
    function mostrarAlerta() {
        alert("Perdão, função ainda em desenvolvimento!");
    }
});
