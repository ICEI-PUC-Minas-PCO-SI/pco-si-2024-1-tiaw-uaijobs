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
            "dataLiteral": "10/01/2001",
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
            "dataLiteral": "10/01/2001",
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
            "dataLiteral": "10/01/2001",
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
            "dataLiteral": "10/01/2001",
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
            "dataLiteral": "10/01/2001",
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
            "dataLiteral": "10/01/2001",
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
            "dataLiteral": "10/01/2001",
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
            "dataLiteral": "10/01/2001",
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
            "dataLiteral": "10/02/2001",
            "cidade": "Belo Horizonte",
            "valorHora": 35
        }
    ]
};

let currentPage = 1;
let filteredItems = object.items;

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

function changeData(){
    filters.dataIni = '01/02/2001'
    filters.dataFim = '20/02/2001'
    applyFilters()
}

// Define o filtro e aplica os filtros
function setFilter(filterType, value, dropdownId) {
    filters[filterType] = value;
    console.log(filters)
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
    filteredItems = object.items.filter(item =>  {

        if(filters.dataIni && filters.dataFim){
            var dateFrom = filters.dataIni;
            var dateTo = filters.dataFim;
            var dateCheck = item.dataLiteral;

            var d1 = dateFrom.split("/");
            var d2 = dateTo.split("/");
            var c = dateCheck.split("/");

            var from = new Date(d1[2], parseInt(d1[1])-1, d1[0]);  // -1 because months are from 0 to 11
            var to   = new Date(d2[2], parseInt(d2[1])-1, d2[0]);
            var check = new Date(c[2], parseInt(c[1])-1, c[0]);

            if(!(check >= from && check <= to)){
                return false;
            }
        }

        return (!filters.categoria || item.categoria === filters.categoria) &&
        (!filters.periodo || item.periodo === filters.periodo) &&
        (!filters.data || item.data === filters.data) &&
        (!filters.cidade || item.cidade === filters.cidade) &&
        (item.valorHora <= filters.valorHora);
    } 
    );
    console.log(filteredItems)
    numberOfPages = Math.ceil(filteredItems.length / object.sizePage);
    currentPage = 1;
    selectPage(1);
}

function resetFilters() {
    filters = {
        categoria: null,
        periodo: null,
        data: null,
        cidade: null,
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

    // Adiciona os event listeners aos itens do dropdown
    document.querySelectorAll('.dropdown-menu a').forEach(item => {
        item.addEventListener('click', event => {
            const filterType = item.parentElement.parentElement.previousElementSibling.id.replace('dropdown', '').toLowerCase();
            setFilter(filterType, item.textContent, item.parentElement.parentElement.previousElementSibling.id);
        });
    });
});
