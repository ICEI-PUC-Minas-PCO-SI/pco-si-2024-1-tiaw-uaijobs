document.addEventListener("DOMContentLoaded", function () {
    const vagasContainer = document.getElementById('container-vagas-abertas');
    const JSON_SERVER_URL_VAGAS = 'http://localhost:3000/vagas';

    // Criação dos cards
    axios.get(JSON_SERVER_URL_VAGAS)
        .then(response => {
            const vagas = response.data;

            if (!vagasContainer) {
                console.error('Container para vagas não encontrado.');
                return;
            }

            vagas.forEach(vagaItem => {
                if (vagaItem.publicado) {
                    const vagaCard = document.createElement('div');
                    vagaCard.classList.add('Container', 'border', 'p-3', 'rounded-4', 'shadow-lg', 'p-3', 'mb-5', 'bg-body-tertiary', 'mx-5', 'col-xxl-4');

                    const title = document.createElement('div');
                    title.classList.add('Cards-vagas-title', 'text-center', 'pb-2');
                    const h2 = document.createElement('h2');
                    h2.textContent = vagaItem.nome;
                    title.appendChild(h2);

                    const imagem = document.createElement('div');
                    imagem.classList.add('Cards-vagas-imagem', 'pb-2', 'ps-5');
                    const img = document.createElement('img');
                    img.classList.add('rounded-3');
                    img.src = vagaItem.imagem;
                    img.alt = 'Imagem da vaga';
                    imagem.appendChild(img);

                    const descricao = document.createElement('div');
                    descricao.classList.add('Cards-vagas-descrição');
                    const p = document.createElement('p');
                    const maxLength = 500;
                    if (vagaItem.descricao) {
                        p.textContent = vagaItem.descricao.substring(0, maxLength) + '...';
                    } else {
                        p.textContent = 'Descrição não disponível.';
                    }
                    descricao.appendChild(p);

                    const bttn = document.createElement('div');
                    bttn.classList.add('Cards-vagas-bttn', 'd-grid', 'gap-2', 'col-6', 'mx-auto');
                    const button = document.createElement('button');
                    button.classList.add('btn', 'btn-outline-danger');
                    button.textContent = 'Ver detalhes';
                    button.onclick = function() {
                        mostrarDetalhesVaga(vagaItem);
                    };
                    bttn.appendChild(button);
                    
                    vagaCard.appendChild(title);
                    vagaCard.appendChild(imagem);
                    vagaCard.appendChild(descricao);
                    vagaCard.appendChild(bttn);

                    vagasContainer.appendChild(vagaCard);
                }
            });
        })
        .catch(error => {
            console.error('Erro ao buscar dados do servidor:', error);
        });
});

function mostrarDetalhesVaga(vaga) {
    const vagaDetalhes = document.getElementById('vagaDetalhes');
    vagaDetalhes.innerHTML = `
        <h5>${vaga.nome}</h5>
        <p><strong>Categoria:</strong> ${vaga.categoria}</p>
        <p><strong>Descrição:</strong> ${vaga.descricao || 'Descrição não disponível.'}</p>
        <p><strong>Publicação:</strong> ${vaga.publicacao}</p>
        <p><strong>Valor:</strong> R$ ${vaga.valor}</p>
        <p><strong>Turno:</strong> ${vaga.turno}</p>
        <p><strong>Data:</strong> ${vaga.data}</p>
        <p><strong>Local:</strong> ${vaga.local}</p>
        <p><strong>Empresa:</strong> ${vaga.empresa}</p>
        <p><strong>Email:</strong> ${vaga.email}</p>
        <p><strong>Telefone:</strong> ${vaga.telefone}</p>
        <p><strong>Habilidades:</strong> ${vaga.habilidades.join(', ')}</p>
        <p><strong>CPF:</strong> ${vaga.cpf}</p>
        <p><strong>CNPJ:</strong> ${vaga.cnpj}</p>
    `;

    const usuarioCorrente = JSON.parse(localStorage.getItem('UsuarioCorrente'));
    const candidatarButton = document.getElementById('candidatarButton');
    
    if (usuarioCorrente && usuarioCorrente.tipo === 'freelancer') {
        candidatarButton.style.display = 'block';
        candidatarButton.onclick = function() {
            candidatarVaga(vaga.id);
        };
    } else {
        candidatarButton.style.display = 'none';
    }

    const vagaModal = new bootstrap.Modal(document.getElementById('vagaModal'));
    vagaModal.show();
}

async function candidatarVaga(vagaId) {
    const JSON_SERVER_URL_FREELANCERS = 'http://localhost:3000/freelancers';
    const usuarioCorrente = JSON.parse(localStorage.getItem('UsuarioCorrente'));
    if (!usuarioCorrente || usuarioCorrente.tipo !== 'freelancer') {
        window.alert("Apenas freelancers podem se candidatar a vagas.");
        return;
    }

    // Adiciona o ID da vaga ao array de vagasCandidatadas
    if (!usuarioCorrente.vagasCandidatadas) {
        usuarioCorrente.vagasCandidatadas = [];
    }
    usuarioCorrente.vagasCandidatadas.push(vagaId);

    const url = `${JSON_SERVER_URL_FREELANCERS}/${usuarioCorrente.id}`;
    
    try {
        const response = await fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ vagasCandidatadas: usuarioCorrente.vagasCandidatadas })
        });

        if (response.ok) {
            localStorage.setItem('UsuarioCorrente', JSON.stringify(usuarioCorrente));
            window.alert('Você se candidatou com sucesso!');
        } else {
            const errorText = await response.text();
            console.error("Falha ao atualizar o usuário. Status:", response.status, "Mensagem:", errorText);
        }
    } catch (error) {
        console.error("Erro ao atualizar o usuário:", error);
    }
}

//Página de publicar vagas

const JSON_SERVER_URL_VAGAS = 'http://localhost:3000/vagas';

// Função para salvar uma nova vaga no JSON Server
async function salvarVagaNoJSONServer(vaga) {
    try {
        let response = await fetch(JSON_SERVER_URL_VAGAS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vaga)
        });

        if (response.ok) {
            let novaVaga = await response.json();
            window.alert('A vaga foi publicada! Para acessá-la, visite a aba de "Vagas em Aberto"');
            return novaVaga;
        } else {
            throw new Error('Erro ao salvar vaga no JSON Server');
        }
    } catch (error) {
        console.error(error);
        window.alert('Falha ao salvar vaga no servidor. Por favor, tente novamente.');
    }
}

function IncluirVagaLS() {
    // Verifica se há um usuário corrente no local storage
    const usuarioCorrente = JSON.parse(localStorage.getItem('UsuarioCorrente'));
    if (!usuarioCorrente || usuarioCorrente.tipo !== 'empregador') {
        window.alert('Apenas empregadores podem publicar vagas.');
        return;
    }

    // Recolhendo dados no formulário
    let nomeVaga = document.getElementById('nomeVaga').value;
    let categoriaVaga = document.getElementById('categoriaVaga').value;
    let descricaoVaga = document.getElementById('descricaoVaga').value;
    let valorVaga = document.getElementById('valorVaga').value;
    let turnoVaga = document.getElementById('turnoVaga').value;
    let localVaga = document.getElementById('localVaga').value;
    let dataVaga = document.getElementById('dataVaga').value;
    let habilidadesVaga = document.getElementById('habilidadesVaga').value.split(',');

    // Condicional que verifica se as categorias obrigatórias foram preenchidas
    if (nomeVaga === '' || categoriaVaga === '' || valorVaga === '' || descricaoVaga === '') {
        window.alert("Por favor, tenha certeza que todos os campos abaixos estão preenchidos: \n\nVaga: Nome, Categoria, Valor e Descrição \nContratante: Nome, E-mail e CPF/CNPJ");
        return;
    }

    // Switch que confere a categoria selecionada e completa o caminho da imagem
    let imagemVaga = '../img/imgVagas/';
    switch (categoriaVaga) {
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
            imagemVaga += 'financas.jpg';
            break;
        case 'Fotografia':
            imagemVaga += 'fotografia.jpg';
            break;
        case 'Marketing':
            imagemVaga += 'marketing.png';
            break;
        case 'Redação':
            imagemVaga += 'redacao.jpg';
            break;
        case 'Tradução':
            imagemVaga += 'traducao.jpg';
            break;
        case 'Vídeo Clipes':
            imagemVaga += 'videoClipes.jpg';
            break;
        case 'Computação':
            imagemVaga += 'computacao.jpg';
            break;
        case 'Mídias Sociais':
            imagemVaga += 'midiasSociais.jpg';
            break;
        case 'Limpeza':
            imagemVaga += 'limpeza.jpg';
            break;
        case 'Trabalhos Manuais':
            imagemVaga += 'trabalhosManuais.jpg';
            break;
        case 'Construção':
            imagemVaga += 'construcao.jpg';
            break;
        default:
            imagemVaga += 'outro.png';
    }

    // Criação de um novo objeto com a estrutura da vaga usando os dados recolhidos no formulário
    let novaVaga = {
        nome: nomeVaga,
        categoria: categoriaVaga,
        descricao: descricaoVaga,
        imagem: imagemVaga,
        valor: valorVaga,
        turno: turnoVaga,
        local: localVaga,
        data: dataVaga,
        habilidades: habilidadesVaga,
        empregador: usuarioCorrente.nome,
        email: usuarioCorrente.email,
        telefone: usuarioCorrente.telefone,
        cnpj: usuarioCorrente.cpf,
        publicado: true
    };

    // Salvar a vaga no JSON Server
    salvarVagaNoJSONServer(novaVaga);
}
