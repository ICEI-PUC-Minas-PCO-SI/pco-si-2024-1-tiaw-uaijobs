const jobData = [
    {
        "title": "Desenvolvedor Web",
        "description": "Estamos procurando um desenvolvedor web com experiência em JavaScript e React.",
        "image": "img/dev.jpg",
        "lat": "-19.945820",
        "lgt": "-44.041089",
        "categoria": "Tecnologia",
        "periodo": "Manhã",       "dataLiteral": "10/01/2001",
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
        "periodo": "Manhã",       "dataLiteral": "10/01/2001",
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
        "periodo": "Noite",       "dataLiteral": "10/02/2001",
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
        "periodo": "Manhã",       "dataLiteral": "10/01/2001",
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
        "periodo": "Noite",       "dataLiteral": "10/01/2001",
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
        "dataLiteral": "10/01/2001",
        "cidade": "Contagem",
        "valorHora": 40
    }
];



function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Raio da Terra em km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

let currentPage = 1;
let filteredItems = jobData;
let numberOfPages = Math.ceil(filteredItems.length / 3);

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

function updateDropdownButton(dropdownId, value) {
    const button = document.getElementById(dropdownId);
    button.innerHTML = value + ' <span class="caret"></span>';
}

function setFilter(filterType, value, dropdownId) {
    filters[filterType] = value;
    updateDropdownButton(dropdownId, value);
    applyFilters();
}

function updatavalorHoraLabel(value) {
    filters.valorHora = parseInt(value);
    document.getElementById('valorHoraMaxLabel').innerText = value;
    applyFilters();
}

function applyFilters() {
    filteredItems = jobData.filter(item => {
        const distance = calculateDistance(filters.lat, filters.lng, parseFloat(item.lat), parseFloat(item.lgt));
        const withinDistance = !filters.distance || distance <= filters.distance;

        if (filters.dataIni && filters.dataFim) {
            const dateFrom = filters.dataIni.split("/");
            const dateTo = filters.dataFim.split("/");
            const dateCheck = item.dataLiteral.split("/");

            const from = new Date(dateFrom[2], parseInt(dateFrom[1]) - 1, dateFrom[0]);
            const to = new Date(dateTo[2], parseInt(dateTo[1]) - 1, dateTo[0]);
            const check = new Date(dateCheck[2], parseInt(dateCheck[1]) - 1, dateCheck[0]);

            if (!(check >= from && check <= to)) {
                return false;
            }
        }

        return (!filters.categoria || item.categoria === filters.categoria) &&
               (!filters.periodo || item.periodo === filters.periodo) &&
               (item.valorHora <= filters.valorHora) &&
               withinDistance;
    });

    numberOfPages = Math.ceil(filteredItems.length / 3);
    currentPage = 1;
    selectPage(1);
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
    document.getElementById('valorHora').value = 1000;
    document.getElementById('valorHoraMinLabel').innerText = 0;
    document.getElementById('valorHoraMaxLabel').innerText = 1000;

    document.getElementById('dateRange').value = '';  // Reset date range input

    applyFilters();
}

function selectPage(page, event) {
    if (event) {
        event.preventDefault();
    }

    currentPage = page;
    const start = (page - 1) * 3;
    const end = start + 3;
    const pageItems = filteredItems.slice(start, end);

    const jobCardsContainer = document.getElementById('job-cards-container');
    jobCardsContainer.innerHTML = '';

    pageItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card mb-4 d-flex flex-row align-items-center';

        const link = document.createElement('a');
        link.href = `details.html?title=${encodeURIComponent(item.title)}`;
        link.className = 'd-flex flex-row align-items-center text-decoration-none text-dark bg-light';

        link.innerHTML = `
            <img src="${item.image}" class="card-img-left" alt="${item.title}" style="width: 25%; height: auto;">
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.description}</p>
            </div>
        `;

        card.appendChild(link);
        jobCardsContainer.appendChild(card);
    });

    updatePagination();
}

function updatePagination() {
    const pagination = document.querySelector('.pagination');
    pagination.innerHTML = `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link page-link-custom" href="#" onclick="backPage(event)">Anterior</a>
        </li>
    `;

    for (let i = 1; i <= numberOfPages; i++) {
        pagination.innerHTML += `
            <li class="page-item ${currentPage === i ? 'active' : ''}">
                <a class="page-link page-link-custom" href="#" onclick="selectPage(${i}, event)">${i}</a>
            </li>
        `;
    }

    pagination.innerHTML += `
        <li class="page-item ${currentPage === numberOfPages ? 'disabled' : ''}">
            <a class="page-link page-link-custom" href="#" onclick="fowardPage(event)">Próximo</a>
        </li>
    `;
}

function backPage(event) {
    if (event) {
        event.preventDefault();
    }

    if (currentPage > 1) {
        selectPage(currentPage - 1);
    }
}

function fowardPage(event) {
    if (event) {
        event.preventDefault();
    }

    if (currentPage < numberOfPages) {
        selectPage(currentPage + 1);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    selectPage(1);

    flatpickr("#dateRange", {
        mode: "range",
        dateFormat: "d/m/Y",
        locale: "pt",
        onChange: function(selectedDates) {
            if (selectedDates.length === 2) {
                filters.dataIni = selectedDates[0].toLocaleDateString("pt-BR");
                filters.dataFim = selectedDates[1].toLocaleDateString("pt-BR");
                applyFilters();
            }
        }
    });

    const params = new URLSearchParams(window.location.search);
    const userLat = parseFloat(params.get('lat'));
    const userLng = parseFloat(params.get('lng'));
    const distance = parseFloat(params.get('distance'));

    if (userLat && userLng) {
        filters.lat = userLat;
        filters.lng = userLng;
        filters.distance = distance;

        applyFilters();

        mapboxgl.accessToken = 'pk.eyJ1IjoiaWdvcm1tZiIsImEiOiJjbHd3cnl4dzExNHpsMmlvOHdzMzN3aTBiIn0.BOMzGXeX4cjnW2X-qpYzJw';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [userLng, userLat],
            zoom: 12
        });

        jobData.forEach(location => {
            const marker = new mapboxgl.Marker()
                .setLngLat([parseFloat(location.lgt), parseFloat(location.lat)])
                .setPopup(new mapboxgl.Popup().setHTML(`<h3>${location.title}</h3>`))
                .addTo(map);
        });

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
    }

    document.getElementById('change-cep').addEventListener('click', () => {
        window.location.href = 'input_cep.html';
    });
});

function mostrarAlerta() {
    alert("Perdão, função ainda em desenvolvimento!");
}