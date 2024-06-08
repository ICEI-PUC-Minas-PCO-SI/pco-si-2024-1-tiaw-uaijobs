function leUsuariosLS(){
    let strUsuarios = localStorage.getItem('Usuarios');
    var objUsuarios = {};

    if(strUsuarios){
        objUsuarios = JSON.parse(strUsuarios);
    }
    else{
        objUsuarios = { usuario: [
                {
                    id: '0',
                    nome: 'Victor Schneider',
                    dataNasc: '2004-09-16',
                    cpf: '13521637646',
                    email: 'victor.schneider@uaijobs.com',
                    senha: 'victor123',
                    interesses: ['Culinária', 'Marketing'],
                    cep: '32315-060',
                    telefone: '31 99874-1609',
                    Linkedin: '',
                    tipo: "adm",
                    vagasPublicadas: []
                },
                {
                    id: '1',
                    nome: 'Igor Maia',
                    dataNasc: 'dd/mm/aaaa',
                    cpf: '123.456.789-10',
                    email: 'igor@uaijobs.com',
                    senha: 'igor123',
                    interesses: [],
                    cep: 'xxxxx-xxx',
                    telefone: '31 99999-9999',
                    Linkedin: '',
                    tipo: "adm",
                    vagasPublicadas: []
                },
                {
                    id: '2',
                    nome: 'Guilherme',
                    dataNasc: 'dd/mm/aaaa',
                    cpf: '123.456.789-10',
                    email: 'guilherme@uaijobs.com',
                    senha: 'guilherme123',
                    interesses: [],
                    cep: 'xxxxx-xxx',
                    telefone: '31 99999-9999',
                    Linkedin: '',
                    tipo: "adm",
                    vagasPublicadas: []
                },
                {
                    id: '3',
                    nome: 'Luis',
                    dataNasc: 'dd/mm/aaaa',
                    cpf: '123.456.789-10',
                    email: 'luis@uaijobs.com',
                    senha: 'luis123',
                    interesses: [],
                    cep: 'xxxxx-xxx',
                    telefone: '31 99999-9999',
                    Linkedin: '',
                    tipo: "adm",
                    vagasPublicadas: []
                },
                {
                    id: '4',
                    nome: 'Thiago',
                    dataNasc: 'dd/mm/aaaa',
                    cpf: '123.456.789-10',
                    email: 'thiago@uaijobs.com',
                    senha: 'thiago123',
                    interesses: [],
                    cep: 'xxxxx-xxx',
                    telefone: '31 99999-9999',
                    Linkedin: '',
                    tipo: "adm",
                    vagasPublicadas: []
                },
                {
                    id: '5',
                    nome: 'Vitor Prates',
                    dataNasc: 'dd/mm/aaaa',
                    cpf: '123.456.789-10',
                    email: 'vitor.prates@uaijobs.com',
                    senha: 'vitor123',
                    interesses: [],
                    cep: 'xxxxx-xxx',
                    telefone: '31 99999-9999',
                    Linkedin: '',
                    tipo: "adm",
                    vagasPublicadas: []
                }
            ]
        }
    }  
    
    return objUsuarios;
    
}

//Função que LÊ o usuário LOGADO no momento
function leUsuarioCorrenteLS(){
    let strUsuarios = localStorage.getItem('UsuarioCorrente');
    let usuarioLogado = JSON.parse(strUsuarios);

    return usuarioLogado;
}

/*Função que SALVA um novo USUÁRIO no LOCAL STORAGE */
function SalvarUsuarioLS(objUsuarios){
    localStorage.setItem('Usuarios', JSON.stringify(objUsuarios));
}

/*Função que SALVA o usuário LOGADO no momento */
function SalvarUsuarioCorrenteLS(usuario){
    localStorage.setItem('UsuarioCorrente', JSON.stringify(usuario));
}


// Função para salvar as seleções no Local Storage
function saveSelections() {
    const selectedSubjects = []; // Array para armazenar os interesses selecionados
    document.querySelectorAll('.card.selected').forEach(card => { // Para cada card selecionado
        selectedSubjects.push(card.textContent.trim()); // Adiciona o texto do card (interesse) ao array
    });
    const usuarioLogado = leUsuarioCorrenteLS();
    usuarioLogado.interesses = selectedSubjects; // Adiciona os interesses selecionados aos interesses do usuário fictício
    SalvarUsuarioCorrenteLS(usuarioLogado); // Salva os dados do usuário fictício no Local Storage
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