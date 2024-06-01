const object = {
    "sizePage": 3,
    "items": [
        {
            "title": "1. Desenvolvedor Mobile",
            "image": "img/DevMob.png",
            "description": "Especializado na criação de aplicativos dinâmicos e responsivos para Android e iOS, este freelancer combina profundo conhecimento técnico com uma abordagem criativa para entregar soluções móveis que não só atendem, mas superam as expectativas dos clientes.",
            "categoria": "Tecnologia",
            "periodo": "Manhã",
            "data": "Hoje",
            "cidade": "Belo Horizonte",
            "valorHora": 100
        },
        {
            "title": "2. Vendedor",
            "image": "img/Venda.png",
            "description": "Estamos buscando um profissional dinâmico e motivado para se juntar à nossa equipe como Vendedor. O candidato ideal deverá ter um forte interesse por vendas e um compromisso com o atendimento ao cliente de excelência.",
            "categoria": "Vendas",
            "periodo": "Tarde",
            "data": "Esta semana",
            "cidade": "Contagem",
            "valorHora": 50
        },
        {
            "title": "3. Desenvolvedor front-end",
            "image": "img/DevFront.jpg",
            "description": "Estamos em busca de um Desenvolvedor Front-end apaixonado por criar interfaces atraentes e funcionais, capaz de transformar designs em código limpo e eficiente.",
            "categoria": "Tecnologia",
            "periodo": "Noite",
            "data": "Este mês",
            "cidade": "Betim",
            "valorHora": 120
        },
        {
            "title": "4. Doméstico",
            "image": "img/Domestico.jpeg",
            "description": "Estamos em busca de um(a) Trabalhador(a) Doméstico(a) para cuidar das atividades diárias de nossa residência. O candidato ideal deve ser confiável, organizado(a) e proativo(a).",
            "categoria": "Serviços Gerais",
            "periodo": "Manhã",
            "data": "Este mês",
            "cidade": "Belo Horizonte",
            "valorHora": 30
        },
        {
            "title": "5. Editor de vídeo",
            "image": "img/EditVideo.jpg",
            "description": "Estamos em busca de um(a) Editor(a) de Vídeo talentoso(a) para colaborar em projetos emocionantes e criativos. O(a) candidato(a) ideal deve ter experiência sólida em edição de vídeo e habilidades técnicas para transformar imagens em narrativas visualmente impactantes.",
            "categoria": "Tecnologia",
            "periodo": "Tarde",
            "data": "Esta semana",
            "cidade": "Contagem",
            "valorHora": 80
        },
        {
            "title": "6. Desenvolvedor back-end",
            "image": "img/DevBack.jpg",
            "description": "Procuramos um Desenvolvedor Back-end dedicado para integrar nossa equipe de tecnologia. O candidato ideal deverá desenvolver e manter soluções de backend robustas e eficientes.",
            "categoria": "Tecnologia",
            "periodo": "Noite",
            "data": "Hoje",
            "cidade": "Belo Horizonte",
            "valorHora": 150
        },
        {
            "title": "7. Pedreiro",
            "image": "img/Pedreiro.jpg",
            "description": "Buscamos um Pedreiro experiente para se juntar à nossa equipe em projetos de construção residencial e comercial. O candidato ideal deve ser habilidoso em diversas técnicas de construção e reparos, garantindo trabalho de qualidade e aderência aos prazos.",
            "categoria": "Construção",
            "periodo": "Manhã",
            "data": "Este mês",
            "cidade": "Betim",
            "valorHora": 70
        },
        {
            "title": "8. Churrasqueiro",
            "image": "img/Churras.jpg",
            "description": "Estamos em busca de um(a) Churrasqueiro(a) para se juntar à nossa equipe em um ambiente descontraído e acolhedor. O candidato ideal deve ter paixão pela arte do churrasco e habilidades excepcionais em preparar carnes de qualidade.",
            "categoria": "Serviços Gerais",
            "periodo": "Tarde",
            "data": "Esta semana",
            "cidade": "Contagem",
            "valorHora": 40
        },
        {
            "title": "9. Garçom",
            "image": "img/Garcom.jpg",
            "description": "Estamos em busca de um(a) Garçom/Garçonete para se juntar à nossa equipe em um ambiente dinâmico e acolhedor. O candidato ideal deve ter habilidades excepcionais em atendimento ao cliente, sendo responsável por garantir uma experiência memorável para os clientes.",
            "categoria": "Serviços Gerais",
            "periodo": "Noite",
            "data": "Hoje",
            "cidade": "Belo Horizonte",
            "valorHora": 35
        }
    ]
};

let currentPage = 1;
let filteredItems = object.items;

const filters = {
    categoria: '',
    periodo: '',
    data: '',
    cidade: '',
    valorHora: 1000
};

function setFilter(filterType, value) {
    filters[filterType] = value;
    applyFilters();
}

function updatavalorHoraLabel(value) {
    filters.valorHora = parseInt(value);
    document.getElementById('valorHoraMaxLabel').innerText = value;
    applyFilters();
}

function applyFilters() {
    filteredItems = object.items.filter(item => 
        (!filters.categoria || item.categoria === filters.categoria) &&
        (!filters.periodo || item.periodo === filters.periodo) &&
        (!filters.data || item.data === filters.data) &&
        (!filters.cidade || item.cidade === filters.cidade) &&
        (item.valorHora <= filters.valorHora)
    );
    numberOfPages = Math.ceil(filteredItems.length / object.sizePage);
    currentPage = 1;
    selectPage(1);
}

function selectPage(page) {
    currentPage = page;
    const start = (page - 1) * object.sizePage;
    const end = start + object.sizePage;
    const pageItems = filteredItems.slice(start, end);

    for (let i = 0; i < object.sizePage; i++) {
        const card = document.getElementById(`item-${i + 1}`);
        const title = document.getElementById(`item-title-${i + 1}`);
        const img = document.getElementById(`item-img-${i + 1}`);
        const description = document.getElementById(`item-description-${i + 1}`);

        if (pageItems[i]) {
            const item = pageItems[i];
            title.innerHTML = item.title;
            img.src = item.image;
            description.innerHTML = item.description;
            card.style.display = 'block'; // Show the card
        } else {
            card.style.display = 'none'; // Hide the card
        }
    }
}


function backPage() {
    if (currentPage > 1) {
        selectPage(currentPage - 1);
    }
}

function fowardPage() {
    if (currentPage < numberOfPages) {
        selectPage(currentPage + 1);
    }
}

document.addEventListener('DOMContentLoaded', () => selectPage(1));