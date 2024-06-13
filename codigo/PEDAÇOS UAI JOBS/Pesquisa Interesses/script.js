// Função para gerar dados aleatórios usando Faker
function gerarDadosAleatoriosUsuario() {
    // Retorna um objeto com dados aleatórios para o usuário
    return {
        id: faker.random.uuid(), // Gera um ID único aleatório
        nome: faker.name.findName(), // Gera um nome aleatório
        email: faker.internet.email(), // Gera um email aleatório
        senha: faker.internet.password(), // Gera uma senha aleatória
        interesses: [], // Inicializa o array de interesses como vazio
        cidade: faker.address.city(), // Gera uma cidade aleatória
        telefone: faker.phone.phoneNumber(), // Gera um número de telefone aleatório
        linkedin: faker.internet.url() // Gera um URL aleatório para o LinkedIn
    };
}

// Função para salvar as seleções no Local Storage
function salvarSelecaoInteresses() {
    const interessesSelecionados = [];
    // Adiciona cada card selecionado ao array interessesSelecionados
    document.querySelectorAll('.card-interesse.selecionado').forEach(card => {
        interessesSelecionados.push(card.textContent.trim()); // Adiciona o texto do card (interesse) ao array
    });

    // Recupera os dados do usuário do Local Storage, se existirem
    let dadosUsuario = localStorage.getItem('dadosUsuario');
    if (dadosUsuario) {
        dadosUsuario = JSON.parse(dadosUsuario); // Converte a string JSON para um objeto
    } else {
        dadosUsuario = gerarDadosAleatoriosUsuario(); // Gera novos dados de usuário se não existirem
    }
    dadosUsuario.interesses = interessesSelecionados; // Atualiza os interesses do usuário

    // Salva os dados do usuário no Local Storage
    localStorage.setItem('dadosUsuario', JSON.stringify(dadosUsuario));
    console.log('Interesses salvos:', dadosUsuario); // Log para depuração
    alert('Seus interesses foram salvos.'); // Exibe a mensagem de sucesso
}

// Função para carregar os interesses salvos do Local Storage
function carregarInteressesSalvos() {
    const dadosUsuario = JSON.parse(localStorage.getItem('dadosUsuario')); // Recupera os dados do usuário do Local Storage
    if (dadosUsuario && dadosUsuario.interesses) {
        // Se existirem interesses salvos, marca os cards correspondentes como selecionados
        dadosUsuario.interesses.forEach(interesse => {
            const card = Array.from(document.querySelectorAll('.card-interesse')).find(card => card.textContent.trim() === interesse);
            if (card) {
                card.classList.add('selecionado');
            }
        });
    }
}

// Função que é executada quando a página é carregada
document.addEventListener('DOMContentLoaded', function () {
    inicializarCardsInteresses(); // Inicializa os cards de interesses
    carregarInteressesSalvos(); // Carrega os interesses salvos
    atualizarEstadoBotaoConfirmar(); // Atualiza o estado do botão Confirmar
});

// Lista de interesses e imagens correspondentes
const listaInteresses = [
    { nome: 'Jurídico', imageUrl: 'Imagens/justica.png' },
    { nome: 'Culinária', imageUrl: 'Imagens/culinaria.png' },
    { nome: 'Design', imageUrl: 'Imagens/design.png' },
    { nome: 'Finanças', imageUrl: 'Imagens/financa.png' },
    { nome: 'Fotografia', imageUrl: 'Imagens/fotografia.png' },
    { nome: 'Marketing', imageUrl: 'Imagens/marketing.png' },
    { nome: 'Redação', imageUrl: 'Imagens/redacao.png' },
    { nome: 'Construção', imageUrl: 'Imagens/tijolos.png' },
    { nome: 'Tradução', imageUrl: 'Imagens/traducao.png' },
    { nome: 'Videoclipes', imageUrl: 'Imagens/videoclipe.png' },
    { nome: 'Computação', imageUrl: 'Imagens/computacao.png' },
    { nome: 'Mídias Sociais', imageUrl: 'Imagens/midia-social.png' }
];

// Função para criar um card com uma imagem específica e nome do interesse
function criarCardInteresse(interesse) {
    const card = document.createElement('div'); // Cria um elemento div para o card
    card.classList.add('card-interesse'); // Adiciona a classe CSS 'card-interesse'
    card.innerHTML = '<img src="' + interesse.imageUrl + '" alt="' + interesse.nome + '">' + // Adiciona a imagem do interesse
        '<div>' + interesse.nome + '</div>'; // Adiciona o nome do interesse

    // Adiciona evento de clique ao card para selecionar/deselecionar
    card.onclick = function () {
        card.classList.toggle('selecionado'); // Alterna a classe 'selecionado' no card
        atualizarEstadoBotaoConfirmar(); // Atualiza o estado do botão Confirmar
    };
    return card;
}

// Função para inicializar os cards
function inicializarCardsInteresses() {
    const gradeInteresses = document.getElementById('grade-interesses'); // Obtém o contêiner dos cards
    listaInteresses.forEach(interesse => {
        gradeInteresses.appendChild(criarCardInteresse(interesse)); // Adiciona cada card ao contêiner
    });
}

// Função para limpar a seleção dos cards
function limparSelecaoInteresses() {
    document.querySelectorAll('.card-interesse.selecionado').forEach(card => {
        card.classList.remove('selecionado'); // Remove a classe 'selecionado' de cada card
    });
    atualizarEstadoBotaoConfirmar(); // Atualiza o estado do botão Confirmar
}

// Função para atualizar o estado do botão Confirmar baseado na seleção dos cards
function atualizarEstadoBotaoConfirmar() {
    const quantidadeCardsSelecionados = document.querySelectorAll('.card-interesse.selecionado').length; // Conta os cards selecionados
    const botaoConfirmarInteresses = document.getElementById('botao-confirmar'); // Obtém o botão Confirmar
    botaoConfirmarInteresses.disabled = quantidadeCardsSelecionados === 0; // Desabilita o botão se nenhum card estiver selecionado
    console.log('Estado do botão confirmar atualizado:', botaoConfirmarInteresses.disabled); // Log para depuração
}

// Função confirmarSelecaoInteresses para salvar as seleções de interesses e exibir mensagem de sucesso
function confirmarSelecaoInteresses() {
    console.log('confirmarSelecaoInteresses foi chamada'); // Log para depuração
    const confirmacao = confirm('Você deseja confirmar suas escolhas?'); // Exibe uma confirmação para o usuário
    console.log('Confirmação:', confirmacao); // Log para depuração
    if (confirmacao) {
        salvarSelecaoInteresses(); // Salva as seleções de interesses
        console.log('Seleções confirmadas e salvas'); // Log para depuração
    } else {
        console.log('Seleções não confirmadas'); // Log para depuração
    }
}

// Adiciona função de clique ao botão Pular
document.getElementById('botao-pular').addEventListener('click', function () {
    const confirmacao = confirm('Você tem certeza que deseja pular a pesquisa de interesses?'); // Exibe uma confirmação para o usuário
    if (confirmacao) {
        window.location.href = 'home.html'; // Redireciona para a página inicial
    }
});

function toggleMenu() {
    var menu = document.getElementById('menu-usuario');
    menu.classList.toggle('show');
  }
  
  // Fechar o menu se o usuário clicar fora dele
  window.onclick = function(event) {
    if (!event.target.matches('.hamburger')) {
      var dropdowns = document.getElementsByClassName('menu-usuario');
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  