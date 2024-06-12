document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.getElementById('carouselExampleIndicators');
    var carouselItems = carousel.querySelectorAll('.carousel-item');
    var titulo = document.getElementById('titulo-imagem');
    var descricao = document.getElementById('descricao-imagem');

    // Títulos e descrições das imagens.
    var titulos = ["Luis Sampaio", "Vitor Prates", "Igor Maia", "Guilherme Oliveira", "Victor Schneider", "Thiago Moreira"];
    var descricoes = ["Luis é dedicado e curioso, sempre em busca de conhecimento em diversas áreas. Ele é apaixonado por música e toca guitarra em uma banda local nas horas vagas. Com um talento natural para liderança, Luis é frequentemente visto organizando eventos e atividades para a comunidade estudantil.", "Vitor é um estudante de mente analítica e meticulosa, que se destaca em resolver problemas complexos de matemática e ciência da computação. Ele é fascinado por inteligência artificial e está constantemente explorando novas técnicas e algoritmos nesta área. Nos fins de semana, Vitor gosta de relaxar praticando jardinagem e cuidando de suas plantas.", "Igor é um estudante de Análise e Desenvolvimento de Sistemas com uma paixão por resolver problemas complexos de programação. Ele é conhecido por sua habilidade em encontrar soluções criativas e eficientes para desafios técnicos. Fora da sala de aula, ele gosta de praticar esportes radicais e explorar novas tecnologias.", "Guilherme é conhecido por seu entusiasmado e sociabilidade, sua personalidade extrovertida e senso de humor cativante. Ele é apaixonado por empreendedorismo e está sempre procurando maneiras de transformar suas ideias inovadoras em realidade. Além dos estudos, Guilherme é um ávido jogador de futebol e adora passar tempo com amigos e familiares.", "Victor é um estudante criativo e visionário, sempre pensando fora da caixa e buscando maneiras de inovar. Ele é apaixonado por design e é habilidoso em criar interfaces intuitivas e visualmente atraentes. Além dos estudos, Victor é um entusiasta de viagens e adora explorar novas culturas e paisagens ao redor do mundo.", "Thiago é um estudante determinado e focado, com uma forte ética de trabalho e compromisso com a excelência acadêmica. Ele é especializado em segurança cibernética e está sempre atualizado com as últimas tendências e técnicas de proteção de dados. Nas horas vagas, Thiago gosta de ler livros de ficção científica e jogar videogames com os amigos."];

    // Função para atualizar o título e a descrição com base no índice do item ativo no carrossel.
    function atualizarTituloDescricao() {
        var indice = Array.from(carouselItems).findIndex(item => item.classList.contains('active'));
        titulo.textContent = titulos[indice];
        descricao.textContent = descricoes[indice];
    }

    carousel.addEventListener('slid.bs.carousel', function () {
        atualizarTituloDescricao();
    });
    atualizarTituloDescricao();
});

function mostrarAlerta() {
    alert("Perdão, função ainda em desenvolvimento!");
}