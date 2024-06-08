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

SalvarUsuarioLS(leUsuariosLS());

/*Função que SALVA o usuário LOGADO no momento */
function SalvarUsuarioCorrenteLS(usuario){
    localStorage.setItem('UsuarioCorrente', JSON.stringify(usuario));
}

// function DeslogaUsuarioLS(){
// }

//Função que registra um novo usuário no LS 
function CadastraUsuarioLS(){
    let objUsuarios = leUsuariosLS();

    let nome = document.getElementById('inputNomeCadastro').value;
    let dataNasc = document.getElementById('inputNascimentoCadastro').value;
    let cpf = document.getElementById('inputCPFCadastro').value;
    let telefone = document.getElementById('inputNomeCadastro').value;
    let cep = document.getElementById('inputCEPCadastro').value;
    let linkedin = document.getElementById('inputLinkedinCadastro').value;
    let email = document.getElementById('inputEmailCadastro').value;
    let confEmail = document.getElementById('inputEmailConfirmacaoCadastro').value;
    let senha = document.getElementById('inputSenhaCadastro').value;
    let tipo = document.querySelector('input[name="tipoCadastro"]:checked');
    let id = objUsuarios.usuario.length;
    
    if(nome === '' || telefone === '' || cep === '' || email === '' || confEmail === '' || senha === '' || dataNasc === '' || cpf === ''){
        window.alert("Por Favor, certifique de que os seguintes dados estão preenchidos:\nNome, Telefone, CEP, Email, Confirmação de Email, Senha, Data de Nascimento, CPF e Tipo de Cadastro")
    }
    else{
        
        if(email == confEmail){

            if(VerificaCPF(cpf) == -1){
                window.alert("O CPF inserido já está Cadastrado!")
            }
            else if(VerificaEmail(email) == -1){
                window.alert("O Email inserido já está Cadastrado!")
            }
            else{
                let novoUsuario = {
                    id: id,
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
                    vagasPublicadas: []
                }

                objUsuarios.usuario.push(novoUsuario);
                SalvarUsuarioLS(objUsuarios)
                SalvarUsuarioCorrenteLS(novoUsuario);
                    window.location.href = "PesquisaInteresse.html"
            }
        }
        else{
            window.alert("O Email e sua Confirmação precisam ser iguais! Favor reenviar o formulário!");
        }
    }
}

// Função que verifica se o CPF já existe no LS
function VerificaCPF(cpf){
    let objUsuarios = leUsuariosLS();
    let usuariosLS = objUsuarios.usuario;

    usuariosLS.forEach(user => {
        if(cpf === user.cpf)
            return -1;
        else
            return 0;
    });
}

// Função que verifica se o Email já existe no LS
function VerificaEmail(email){
    let objUsuarios = leUsuariosLS();
    let usuariosLS = objUsuarios.usuario;

    usuariosLS.forEach(user => {
        if(email == user.email)
            return -1;
        else
            return 0;
    })
}

//Função que verifica as credenciais do Login
function LoginUsuario(){
    let objUsuarios = leUsuariosLS();

    let emailLogin = document.getElementById("inputEmailLogin").value;
    let senhaLogin = document.getElementById("inputSenhaLogin").value;

    objUsuarios.usuario.forEach(user => {
        if (user.email === emailLogin){
            if(user.senha == senhaLogin){
                SalvarUsuarioCorrenteLS(user)
                window.location.href = "Home.html";

            }
            else{
                window.alert(`A senha para o email: "${emailLogin}" está incorreta!`)
            }
        }
    })
}

let btnLogin = document.getElementById('enviaLogin')
btnLogin.addEventListener('click', LoginUsuario)

let btnCadastro = document.getElementById('enviaCadastro');
btnCadastro.addEventListener('click', CadastraUsuarioLS);

