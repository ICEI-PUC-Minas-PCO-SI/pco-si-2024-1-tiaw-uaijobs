// Função para gerar dados fictícios JSON - Será substituido nas proximas sprints para uma funcão de buscar dados no JSON criado no cadastro
// function gerarDadosFicticios() {
//     const dadosGerados = {
//         id: '1',
//         nome: 'Pedro Felipe',
//         email: 'pedrinhoF@email.com',
//         senha: 'Pedro123',
//         interesses: [],
//         cidade: 'Contagem',
//         telefone: '31-1234-5678',
//         Linkedin: 'linkedin.com/PedroFelps'
//     };
//     return dadosGerados;
// }

// Função para salvar as seleções no Local Storage
function saveSelections() {
    const selectedSubjects = []; // Array para armazenar os interesses selecionados
    document.querySelectorAll('.card.selected').forEach(card => { // Para cada card selecionado
        selectedSubjects.push(card.textContent.trim()); // Adiciona o texto do card (interesse) ao array
    });
    const userData = gerarDadosFicticios();
    userData.interesses = selectedSubjects; // Adiciona os interesses selecionados aos interesses do usuário fictício
    localStorage.setItem('userData', JSON.stringify(userData)); // Salva os dados do usuário fictício no Local Storage
}

// Ao carregar a página, adiciona a geração de dados fictícios e o salvamento no Local Storage 
// document.addEventListener('DOMContentLoaded', function () {
//     const userData = leUsuarioCorrenteLS();
//     localStorage.setItem('userData', JSON.stringify(userData)); // Salva os dados do usuário fictício no Local Storage
//     updateConfirmButtonState();
// });

// Nomes dos interesses e caminhos das imagens
const subjects = [
    { name: 'Jurídico', imageUrl: '../img/imgCardsPesquisaInteresse/justica.png' },
    { name: 'Culinária', imageUrl: '../img/imgCardsPesquisaInteresse/culinaria.png' },
    { name: 'Design', imageUrl: '../img/imgCardsPesquisaInteresse/design.png' },
    { name: 'Finanças', imageUrl: '../img/imgCardsPesquisaInteresse/financa.png' },
    { name: 'Fotografia', imageUrl: '../img/imgCardsPesquisaInteresse/fotografia.png' },
    { name: 'Marketing', imageUrl: '../img/imgCardsPesquisaInteresse/marketing.png' },
    { name: 'Redação', imageUrl: '../img/imgCardsPesquisaInteresse/redacao.png' },
    { name: 'Construção', imageUrl: '../img/imgCardsPesquisaInteresse/tijolos.png' },
    { name: 'Tradução', imageUrl: '../img/imgCardsPesquisaInteresse/traducao.png' },
    { name: 'Videoclipes', imageUrl: '../img/imgCardsPesquisaInteresse/videoclipe.png' },
    { name: 'Computação', imageUrl: '../img/imgCardsPesquisaInteresse/computacao.png' },
    { name: 'Mídias Sociais', imageUrl: '../img/imgCardsPesquisaInteresse/midia-social.png' }
];

// Função para criar um card com uma imagem específica e nome do interesse
function createCard(subject) {
    const card = document.createElement('div'); // Cria uma div
    card.classList.add('card'); // Adiciona a classe 'card' na div
    card.innerHTML = '<img src="' + subject.imageUrl + '" alt="' + subject.name + '">' + // Adiciona uma imagem ao card
        '<div>' + subject.name + '</div>'; // Adiciona o nome do interesse no card
    card.onclick = function () { // Quando o usuario clicar no card:
        card.classList.toggle('selected'); // Alterna a classe 'selected' do card (seleciona ou desseleciona)
        updateConfirmButtonState(); // Atualiza o estado do botão Confirmar (habilita ou desabilita)
    };
    return card;
}

// Inicializa os cards
const grid = document.getElementById('grid');
subjects.forEach(subject => { // Para cada interesse
    grid.appendChild(createCard(subject)); // Adiciona um card ao grid
});
updateConfirmButtonState();


// Função para limpar a seleção dos cards
function clearSelection() {
    document.querySelectorAll('.card.selected').forEach(card => { // Para cada card selecionado
        card.classList.remove('selected'); // Remove a classe 'selected' do card
    });
    updateConfirmButtonState();
}

// Função para atualizar o estado do botão Confirmar baseado na seleção dos cards
function updateConfirmButtonState() {
    const selectedCards = document.querySelectorAll('.card.selected').length; // Conta o número de cards selecionados
    const botaoConfirmar = document.getElementById('botao-confirmar');
    botaoConfirmar.disabled = selectedCards === 0; // Desativa o botão Confirmar se nenhum card estiver selecionado
}

// Incrementa a função confirmSelection (confirmar) para salvar as seleções de interesses antes de redirecionar para a home
function confirmSelection() {
    const confirmacao = confirm('Você deseja confirmar suas escolhas?'); // Pergunta ao usuário se ele deseja confirmar as escolhas
    if (confirmacao) { // Se o usuário confirmar
        saveSelections(); // Salva as seleções no Local Storage
        window.location.href = 'home.html'; // Redireciona para a home
    }
}

// Adiciona função de clique ao botão Pular
document.getElementById('botao-pular').addEventListener('click', function () {
    const confirmacao = confirm('Você tem certeza que deseja pular a pesquisa de interesses?'); // Pergunta ao usuário se ele deseja pular a pesquisa
    if (confirmacao) { // Se o usuário confirmar
        window.location.href = 'Home.html'; // Redireciona para a página inicial
    }
});