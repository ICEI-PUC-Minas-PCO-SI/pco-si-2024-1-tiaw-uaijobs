/*Função que LÊ as vagas já presentes no LOCAL STORAGE e transcreve o arquivo do objeto */
function leVagaLS(){
    let strVagas = localStorage.getItem('Vagas');
    var objVagas = {};

    if(strVagas){
        objVagas = JSON.parse(strVagas);
    }
    else{
        objVagas = { vaga: [
        ]}
    }

    return objVagas;
}

/*Função que SALVA uma nova vaga no LOCAL STORAFGE*/
function SalvarVagaLS(vaga){
    localStorage.setItem('Vagas', JSON.stringify(vaga));
}

function IncluirVagaLS(){
    let objVagas = leVagaLS();
    // const Date = new Date();
    // const timeElapsed = Date.now();
    // const today = new Date(timeElapsed);

    //recolhendo dados no formulário
    let nomeVaga = document.getElementById('nomeVaga').value;
    let categoriaVaga = document.getElementById('categoriaVaga').value;
    let descricaoVaga = document.getElementById('descricaoVaga').value;
    let valorVaga = document.getElementById('valorVaga').value;
    let turnoVaga = document.getElementById('turnoVaga').value;
    let localVaga = document.getElementById('localVaga').value;
    let dataVaga = document.getElementById('dataVaga').value;
    let habilidadesVaga = document.getElementById('habilidadesVaga').value;
    let nomeEmpresa = document.getElementById('nomeEmpresa').value;
    let emailEmpresa = document.getElementById('emailEmpresa').value;
    let telefoneEmpresa = document.getElementById('telefoneEmpresa').value;
    let cpfCnpjEmpresa = document.getElementById('cpfCnpjEmpresa').value;
    let imagemVaga = '../img/imgVagas/';  

    //Condicional que verifica se as categorias obrigatórias foram preenchidas
    if(nomeVaga === '' || categoriaVaga === '' || valorVaga === '' || descricaoVaga === '' || nomeEmpresa === '' || emailEmpresa === '' || cpfCnpjEmpresa === ''){
        window.alert("\nPor favor, tenha certeza que todos os campos abaixos estão preenchidos: \n\nVaga: Nome, Categoria, Valor e Descrição \nContratante: Nome, E-mail e CPF/CNPJ");
    }
    else{

    //Switch que confere a categoria selecionada e completa o caminho da imagem (Em caso de categoria 'Outro', selecionei a logo da UaiJobs)
    switch(categoriaVaga){
        case 'Jurídico':
            imagemVaga += 'juridico.jpg';
            break;
        case 'Culinária':
            imagemVaga += 'culinaria.jpg';
            break;
        case 'Design':
            imagemVaga += 'design.jpg';
            break;
        case 'Finanças': 
            imagemVaga += 'financas.jpg'
            break;
        case 'Fotografia':
            imagemVaga += 'fotografia.jpg'
            break;
        case 'Marketing':
            imagemVaga += 'marketing.png';
            break;
        case 'Redação':
            imagemVaga += 'redacao.jpg'
            break;
        case 'Tradução':
            imagemVaga += 'traducao.jpg'
            break;
        case 'Vídeo Clipes':
            imagemVaga += 'videoClipes.jpg'
            break
        case 'Computação': 
            imagemVaga += 'computacao.jpg'
            break
        case 'Mídias Sociais':
            imagemVaga += 'midiasSociais.jpg';
            break
        case 'Limpeza':
            imagemVaga += 'limpeza.jpg'
            break;
        case 'Trabalhos Manuais':
            imagemVaga += 'trabalhosManuais.jpg'
            break;
        case 'Construção':
            imagemVaga += 'construcao.jpg';
            break;
        default:
            imagemVaga += 'outro.png'
    }

    //Criação de um novo objeto com a estrutura da vaga usando os dados recolhidos no formulário
    let novaVaga = {
        nome: nomeVaga,
        categoria: categoriaVaga,
        descricao: descricaoVaga,
        // publicacao: today.toLocaleDateString(),
        imagem: imagemVaga,
        valor: valorVaga,
        turno: turnoVaga,
        local: localVaga,
        data: dataVaga,
        habilidades: habilidadesVaga,
        empresa: nomeEmpresa,
        email: emailEmpresa,
        telefone: telefoneEmpresa,
        cnpj: cpfCnpjEmpresa,
        publicado: false,
    }

    //Inserindo objeto criado no vetor lido do Local Storage
    objVagas.vaga.push(novaVaga);

    //Chamando função que salva o vetor de vagas no Local Storage
    SalvarVagaLS(objVagas);

    //Chamando função que usará os dados do Local Storage para montar os cards (Artefato Luis)

    //poderemos mudar essa função, fazer uma para ler todos os arquivos e postar e outra para postar apenas o arquivo em questão
    window.alert('A vaga foi publicada! Para acessá-la, visite a aba de "Vagas em Aberto"');    
    }
}

const usuarioLogado = 
    {
        id: 1,
        nome: 'Victor Schneider',
        dataNascimento: '16/09/2004',
        cpf: '123.456.789-10',
        telefone: '(31) 99999-9999',
        cidade: 'Contagem',
        linkedin: 'linkedin.com/exemplo',
        email: 'victor.schneider@email.com',
        senha: 'victor123',
        interesses: ['Jurídico', 'Mídias Sociais', 'Limpeza', 'Computação', 'Culinária'],
        tipo: "usuario",
    }


// Função que publica todas as vagas na pagina de Vagas Abertas
function PublicaVagas(){
   
    let objVagas = leVagaLS();
    let vagas = objVagas.vaga;
    let vagasContainer = document.getElementById('containerCardsVaga');

    vagas.forEach(vagaItem => {
        const vagaCard = document.createElement('div');
        vagaCard.classList.add('Container', 'border', 'p-3', 'rounded-4', 'shadow-lg', 'p-3', 'mb-5', 'bg-body-tertiary', 'mx-5', 'col-xxl-3');

        const title = document.createElement('div');
        title.classList.add('Cards-vagas-title', 'text-center', 'pb-2');
        const h2 = document.createElement('h2');
        h2.textContent = vagaItem.nome;
        title.appendChild(h2);

        const imagem = document.createElement('div');
        imagem.classList.add('Cards-vagas-imagem', 'pb-2', 'ps-5');
        const img = document.createElement('img');
        img.classList.add('rounded-3')
        img.src = vagaItem.imagem;
        img.alt = 'Imagem da vaga';
        imagem.appendChild(img);

        const descricao = document.createElement('div');
        descricao.classList.add('Cards-vagas-descrição');
        const p = document.createElement('p');
        const maxLength = 500;
        p.textContent = vagaItem.descricao.substring(0, maxLength) + '...';
        descricao.appendChild(p);

        const bttn = document.createElement('div');
        bttn.classList.add('Cards-vagas-bttn', 'd-grid', 'gap-2', 'col-6', 'mx-auto');
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-outline-danger');
        button.textContent = 'Ver detalhes';
        button.onclick = function() {
            window.location.href = 'DetalhamentoVaga.html';
        };
        bttn.appendChild(button);

        vagaCard.appendChild(title);
        vagaCard.appendChild(imagem);
        vagaCard.appendChild(descricao);
        vagaCard.appendChild(bttn);

        vagasContainer.appendChild(vagaCard);
    });
}

//Função que publica apenas as vagas de interesse do usuário
function PublicaVagasInteresse(){
   
    let objVagas = leVagaLS();
    let vagas = objVagas.vaga;
    const vagasContainerInteresse = document.getElementById('containerCardsVagaInteresse');

    usuarioLogado.interesses.forEach(interesseItem => {
        vagas.forEach(vagaItem => {
            if(interesseItem === vagaItem.categoria){
                const vagaCard = document.createElement('div');
                vagaCard.classList.add('Container', 'border', 'p-3', 'rounded-4', 'shadow-lg', 'p-3', 'mb-5', 'bg-body-tertiary', 'mx-5', 'col-xxl-3');
            
                const title = document.createElement('div');
                title.classList.add('Cards-vagas-title', 'text-center', 'pb-2');
                const h2 = document.createElement('h2');
                h2.textContent = vagaItem.nome;
                title.appendChild(h2);
            
                const imagem = document.createElement('div');
                imagem.classList.add('Cards-vagas-imagem', 'pb-2', 'ps-5');
                const img = document.createElement('img');
                img.classList.add('rounded-3')
                img.src = vagaItem.imagem;
                img.alt = 'Imagem da vaga';
                imagem.appendChild(img);
            
                const descricao = document.createElement('div');
                descricao.classList.add('Cards-vagas-descrição');
                const p = document.createElement('p');
                const maxLength = 500;
                p.textContent = vagaItem.descricao.substring(0, maxLength) + '...';
                descricao.appendChild(p);
            
                const bttn = document.createElement('div');
                bttn.classList.add('Cards-vagas-bttn', 'd-grid', 'gap-2', 'col-6', 'mx-auto');
                const button = document.createElement('button');
                button.classList.add('btn', 'btn-outline-danger');
                button.textContent = 'Ver detalhes';
                button.onclick = function() {
                    window.location.href = 'DetalhamentoVaga.html';
                };
                bttn.appendChild(button);
            
                vagaCard.appendChild(title);
                vagaCard.appendChild(imagem);
                vagaCard.appendChild(descricao);
                vagaCard.appendChild(bttn);
    
                vagasContainerInteresse.appendChild(vagaCard);
            }   
        });    
    })
}
