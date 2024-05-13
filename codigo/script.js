// Definição de dados de exemplo para itens e configuração da paginação
// Paginas
const object = {
    "sizePage": 3,
    "items": [
        // Lista de itens com título, imagem e descrição
        {
            "title": "1. Desenvolvedor Mobile",
            "image": "img/DevMob.png",
            "description": "Especializado na criação de aplicativos dinâmicos e responsivos para Android e iOS, este freelancer combina profundo conhecimento técnico com uma abordagem criativa para entregar soluções móveis que não só atendem, mas superam as expectativas dos clientes."
        },
        {
            "title": "2. Vendedor",
            "image": "img/Venda.png",
            "description": "Estamos buscando um profissional dinâmico e motivado para se juntar à nossa equipe como Vendedor. O candidato ideal deverá ter um forte interesse por vendas e um compromisso com o atendimento ao cliente de excelência."
        },
        {
            "title": "3. Desenvolvedor front-end",
            "image": "img/DevFront.jpg",
            "description": "Estamos em busca de um Desenvolvedor Front-end apaixonado por criar interfaces atraentes e funcionais, capaz de transformar designs em código limpo e eficiente."
        },
        {
            "title": "4. Doméstico",
            "image": "img/Domestico.jpeg",
            "description": "Estamos em busca de um(a) Trabalhador(a) Doméstico(a) para cuidar das atividades diárias de nossa residência. O candidato ideal deve ser confiável, organizado(a) e proativo(a)."
        },
        {
            "title": "5. Editor de vídeo",
            "image": "img/EditVideo.jpg",
            "description": "Estamos em busca de um(a) Editor(a) de Vídeo talentoso(a) para colaborar em projetos emocionantes e criativos. O(a) candidato(a) ideal deve ter experiência sólida em edição de vídeo e habilidades técnicas para transformar imagens em narrativas visualmente impactantes."
        },
        {
            "title": "6. Desenvolvedor back-end",
            "image": "img/DevBack.jpg",
            "description": "Procuramos um Desenvolvedor Back-end dedicado para integrar nossa equipe de tecnologia. O candidato ideal deverá desenvolver e manter soluções de backend robustas e eficientes."
        },
        {
            "title": "7. Pedreiro",
            "image": "img/Pedreiro.jpg",
            "description": "Buscamos um Pedreiro experiente para se juntar à nossa equipe em projetos de construção residencial e comercial. O candidato ideal deve ser habilidoso em diversas técnicas de construção e reparos, garantindo trabalho de qualidade e aderência aos prazos."
        },
        {
            "title": "8. Churrasqueiro",
            "image": "img/Churras.jpg",
            "description": "Estamos em busca de um(a) Churrasqueiro(a) para se juntar à nossa equipe em um ambiente descontraído e acolhedor. O candidato ideal deve ter paixão pela arte do churrasco e habilidades excepcionais em preparar carnes de qualidade."
        },
        {
            "title": "9. Garçom",
            "image": "img/Garcom.jpg",
            "description": "Estamos em busca de um(a) Garçom/Garçonete para se juntar à nossa equipe em um ambiente dinâmico e acolhedor. O candidato ideal deve ter habilidades excepcionais em atendimento ao cliente, sendo responsável por garantir uma experiência memorável para os clientes."
        }
    ]
}

const numberOfPages = 3 // Total de páginas disponíveis
let currentPage = 1 // Página atual inicialmente definida para 1

// Função para selecionar e exibir uma página de itens
function selectPage(page) {
    currentPage = page
    let start = (page - 1) * object.sizePage
    let end = start + 3
    let pageItems = object.items.slice(start, end)  

    let item1 = pageItems[0]
    let item2 = pageItems[1]
    let item3 = pageItems[2]

    // Atualiza cada card com os dados dos itens da página selecionada
    document.getElementById("item-title-1").innerHTML = item1.title
    document.getElementById("item-img-1").src = item1.image
    document.getElementById("item-description-1").innerHTML = item1.description

    document.getElementById("item-title-2").innerHTML = item2.title
    document.getElementById("item-img-2").src = item2.image
    document.getElementById("item-description-2").innerHTML = item2.description

    document.getElementById("item-title-3").innerHTML = item3.title
    document.getElementById("item-img-3").src = item3.image
    document.getElementById("item-description-3").innerHTML = item3.description
}

// Funções para navegar entre as páginas
function backPage(){
    if(currentPage <= 1){
        return
    }
    selectPage(currentPage-1)
}

function fowardPage(){
    if(currentPage >= numberOfPages){
        return
    }
    selectPage(currentPage+1)
}
