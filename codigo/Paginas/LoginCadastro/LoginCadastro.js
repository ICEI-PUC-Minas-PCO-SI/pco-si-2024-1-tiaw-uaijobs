const JSON_SERVER_URL_EMPREGADORES = 'http://localhost:3000/empregadores';
const JSON_SERVER_URL_FREELANCERS = 'http://localhost:3000/freelancers';

// Função para buscar todos os usuários do JSON server, tanto empregadores quanto freelancers
async function fetchUsuarios() {
    let responseEmpregadores = await fetch(JSON_SERVER_URL_EMPREGADORES);
    let empregadores = await responseEmpregadores.json();
    
    let responseFreelancers = await fetch(JSON_SERVER_URL_FREELANCERS);
    let freelancers = await responseFreelancers.json();
    
    return {
        empregadores: empregadores,
        freelancers: freelancers
    };
}

// Função para salvar um novo usuário no JSON server, de acordo com o tipo (empregador ou freelancer)
async function saveUsuario(usuario, tipo) {
    let url = tipo === 'empregador' ? JSON_SERVER_URL_EMPREGADORES : JSON_SERVER_URL_FREELANCERS;
    
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    });
    return response.json();
}

// Função para salvar o usuário corrente (logado) no local storage
function salvarUsuarioCorrenteLS(usuario) {
    localStorage.setItem('UsuarioCorrente', JSON.stringify(usuario));
}

// Função para cadastrar um novo usuário, verificando campos obrigatórios e salvando no JSON server
async function cadastrarUsuarioLS() {
    let nome = document.getElementById('inputNomeCadastro').value;
    let dataNasc = document.getElementById('inputNascimentoCadastro').value;
    let cpf = document.getElementById('inputCPFCadastro').value;
    let telefone = document.getElementById('inputTelefoneCadastro').value;
    let cep = document.getElementById('inputCEPCadastro').value;
    let linkedin = document.getElementById('inputLinkedinCadastro').value;
    let email = document.getElementById('inputEmailCadastro').value;
    let confEmail = document.getElementById('inputEmailConfirmacaoCadastro').value;
    let senha = document.getElementById('inputSenhaCadastro').value;
    let tipo = document.querySelector('input[name="tipoCadastro"]:checked').value;

    // Verifica se todos os campos obrigatórios estão preenchidos
    if (nome === '' || telefone === '' || cep === '' || email === '' || confEmail === '' || senha === '' || dataNasc === '' || cpf === '') {
        window.alert("Por favor, certifique de que os seguintes dados estão preenchidos:\nNome, Telefone, CEP, Email, Confirmação de Email, Senha, Data de Nascimento, CPF e Tipo de Cadastro");
        return;
    }

    // Verifica se os emails coincidem
    if (email !== confEmail) {
        window.alert("O Email e sua Confirmação precisam ser iguais! Favor reenviar o formulário!");
        return;
    }

    // Busca todos os usuários (empregadores e freelancers)
    let usuarios = await fetchUsuarios();
    let todosUsuarios = [...usuarios.empregadores, ...usuarios.freelancers];

    // Verifica se o CPF já está cadastrado
    if (todosUsuarios.some(user => user.cpf === cpf)) {
        window.alert("O CPF inserido já está Cadastrado!");
        return;
    }

    // Verifica se o email já está cadastrado
    if (todosUsuarios.some(user => user.email === email)) {
        window.alert("O Email inserido já está Cadastrado!");
        return;
    }

    // Cria o objeto do novo usuário
    let novoUsuario = {
        nome: nome,
        dataNascimento: dataNasc,
        cpf: cpf,
        telefone: telefone,
        cep: cep,
        linkedin: linkedin,
        email: email,
        senha: senha,
        interesses: [],
        tipo: tipo,
        UserPremium: false
    };

    // Adiciona o atributo específico baseado no tipo de usuário
    if (tipo === 'empregador') {
        novoUsuario.vagasPublicadas = [];
    } else if (tipo === 'freelancer') {
        novoUsuario.vagasCandidatadas = [];
    }

    // Salva o novo usuário no JSON server e armazena o usuário corrente no local storage
    let usuarioSalvo = await saveUsuario(novoUsuario, tipo);
    salvarUsuarioCorrenteLS(usuarioSalvo);
    window.location.href = "../PesquisaInteresse/PesquisaInteresse.html";
}

// Função para verificar as credenciais do login e logar o usuário
async function loginUsuario() {
    let emailLogin = document.getElementById("inputEmailLogin").value;
    let senhaLogin = document.getElementById("inputSenhaLogin").value;

    // Busca todos os usuários (empregadores e freelancers)
    let usuarios = await fetchUsuarios();
    let todosUsuarios = [...usuarios.empregadores, ...usuarios.freelancers];
    let usuarioEncontrado = todosUsuarios.find(user => user.email === emailLogin);

    // Verifica se o email existe e se a senha está correta
    if (usuarioEncontrado) {
        if (usuarioEncontrado.senha === senhaLogin) {
            salvarUsuarioCorrenteLS(usuarioEncontrado);
            window.alert("Usuario Logado");
            window.location.replace("../Home/Home.html");
        } else {
            window.alert(`A senha para o email: "${emailLogin}" está incorreta!`);
        }
    } else {
        window.alert("Email não encontrado!");
    }
}

// Verifica qual página está sendo carregada e adiciona os event listeners aos botões correspondentes
let paginaAtual = window.location.href;

if (paginaAtual.includes('Cadastro.html')) {
    let btnCadastro = document.getElementById('enviaCadastro');
    btnCadastro.addEventListener('click', (e) => {
        e.preventDefault();
        cadastrarUsuarioLS();
    });
} else {
    let btnLogin = document.getElementById('enviaLogin');
    btnLogin.addEventListener('click', (e) => {
        e.preventDefault();
        loginUsuario();
    });
}
