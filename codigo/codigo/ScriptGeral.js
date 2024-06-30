// Verifique se há um usuário corrente no local storage
const usuarioCorrente = localStorage.getItem('UsuarioCorrente');


//Função que altera nome do usuário no header e remove botões de Login e Cadastro caso já esteja logado
if (usuarioCorrente) {
    // Parse o JSON para obter o nome do usuário
    const usuarioObj = JSON.parse(usuarioCorrente);
    const nomeUsuario = usuarioObj.nome;
    
    // Se houver, atualize o nome do usuário no elemento <a>
    document.getElementById('NomeUser').textContent = nomeUsuario;
    
    // Exiba o item de logout
    document.getElementById('logoutItem').style.display = 'block';
    
    // Oculte os itens de login e cadastro
    document.getElementById('loginItem').style.display = 'none';
    document.getElementById('cadastroItem').style.display = 'none';

    // Chame a função ao carregar a página (Só é chamada se tiver usuário logado)
    controlarVisibilidadePremiumButton();
    
    // Adicione um evento de clique ao botão de logout
    document.getElementById('logoutLink').addEventListener('click', function(event) {
        event.preventDefault();
        
        console.log('Botão de logout clicado'); // Log para depuração
        
        // Remova o usuarioCorrente do local storage
        localStorage.removeItem('usuarioCorrente');
        console.log('UsuarioCorrente removido do local storage'); // Log para confirmar a remoção

    
        // Atualize a página para refletir as mudanças
        window.location.reload();
    });
} else {
    // Se não houver, oculte o item de logout
    document.getElementById('logoutItem').style.display = 'none';
    document.getElementById('premiumButton').style.display = 'none';
    
    // Exiba os itens de login e cadastro
    document.getElementById('loginItem').style.display = 'block';
    document.getElementById('cadastroItem').style.display = 'block';
    
}

// Adicione um evento de clique ao botão de logout
document.getElementById('logoutLink').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link

    console.log('Botão de logout clicado'); // Log para depuração

    // Remova o usuarioCorrente do local storage
    localStorage.removeItem('UsuarioCorrente');
    window.location.replace("../Home/Home.html")
    console.log('UsuarioCorrente removido do local storage'); // Log para confirmar a remoção

});

 // Função para verificar a página atual e esconder o botão "premium" se não estiver na Home
 function controlarVisibilidadePremiumButton() {
    const premiumButton = document.getElementById('premiumButton');
    if (!premiumButton) {
        console.error('O elemento premiumButton não foi encontrado no DOM.');
        return;
    }

    const paginaAtual = window.location.pathname;

    // Verifique se a página atual é a Home (ajuste conforme necessário)
    const isHomePage = paginaAtual === '/codigo/Paginas/Home/Home.html'

    if(usuarioCorrente.UserPremium == true){
        // Esconda o botão se o usuário já for premium
        premiumButton.style.display = 'none';
    }

    if (!isHomePage) {
        // Esconda o botão se não for a Home
        premiumButton.style.display = 'none';
    }
       
}

function Dropdown(){
    let ulDrop = document.getElementById('ulDropdown');

    ulDrop.classList.toggle('d-none');
}

// Função para ajustar o comportamento do botão com base no tipo de usuário
function ajustarComportamentoBotao() {
    var tipoUsuario = obterTipoUsuarioDoLocalStorage();
    var botaoAcao = document.getElementById("botao-acao-home");

    
    if (tipoUsuario === "freelancer") {
        botaoAcao.style.display = 'block';
        botaoAcao.innerText = "Vagas candidatadas";
        botaoAcao.onclick = function() {
            location.href = '../Vagas/PagDinamicaPostCand.html';
        };
    } else if (tipoUsuario === "empregador") {
        botaoAcao.style.display = 'block';
        botaoAcao.innerText = "Publicar Vaga";
        botaoAcao.onclick = function() {
            location.href = '../Vagas/PublicarVaga.html';
        };
    }
    else {
        botaoAcao.style.display = 'none';
    }
}

// Chama a função para ajustar o comportamento do botão quando a página carregar
window.onload = ajustarComportamentoBotao;
