document.addEventListener("DOMContentLoaded", function () {
    const vagasContainer = document.getElementById('container-vagas-abertas');
    const JSON_SERVER_URL_VAGAS = 'http://localhost:3000/vagas';

    // Verifique se axios está disponível
    if (typeof axios === 'undefined') {
        console.error('Axios não está definido. Verifique se o script axios está incluído no HTML.');
        return;
    }

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
                    img.onerror = function () {
                        console.error('Erro ao carregar a imagem:', vagaItem.imagem);
                        img.src = 'fallback_image_url.jpg'; // Imagem de fallback
                    };
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

async function mostrarDetalhesVaga(vaga) {
    const vagaDetalhes = document.getElementById('vagaDetalhes');
    
    const endereco = await buscarEnderecoPorCEP(vaga.local);
    const enderecoTexto = endereco ? `${endereco.logradouro}, ${endereco.bairro}, ${endereco.localidade} - ${endereco.uf}` : 'Endereço não encontrado.';

    vagaDetalhes.innerHTML = `
        <h5>${vaga.nome}</h5>
        <p><strong>Categoria:</strong> ${vaga.categoria}</p>
        <p><strong>Descrição:</strong> ${vaga.descricao || 'Descrição não disponível.'}</p>
        <p><strong>Publicação:</strong> ${vaga.publicacao}</p>
        <p><strong>Valor:</strong> R$ ${vaga.valor}</p>
        <p><strong>Turno:</strong> ${vaga.turno}</p>
        <p><strong>Data:</strong> ${vaga.data}</p>
        <p><strong>Local:</strong> ${enderecoTexto}</p>
        <p><strong>Empresa:</strong> ${vaga.empregador}</p>
        <p><strong>Telefone:</strong> ${vaga.telefone}</p>
        <p><strong>Habilidades:</strong> ${vaga.habilidades.join(', ')}</p>
    `;

    const usuarioCorrente = JSON.parse(localStorage.getItem('UsuarioCorrente'));
    const candidatarButton = document.getElementById('candidatarButton');
    
    if (usuarioCorrente && usuarioCorrente.tipo === 'freelancer') {
        if (usuarioCorrente.vagasCandidatadas && usuarioCorrente.vagasCandidatadas.includes(vaga.id)) {
            candidatarButton.textContent = 'Candidatado';
            candidatarButton.classList.add('btn-success');
            candidatarButton.disabled = true;
        } else {
            candidatarButton.textContent = 'Candidatar';
            candidatarButton.classList.remove('btn-success');
            candidatarButton.disabled = false;
            candidatarButton.onclick = function() {
                candidatarVaga(vaga.id);
            };
        }
        candidatarButton.style.display = 'block';
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

// Página de publicar vagas
const JSON_SERVER_URL_VAGAS = 'http://localhost:3000/vagas';

// Função para buscar o endereço pelo CEP
async function buscarEnderecoPorCEP(cep) {
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar endereço:', error);
        return null;
    }
}

// Função para salvar a vaga no JSON Server
async function salvarVagaNoJSONServer(vaga) {
    try {
        console.log("Salvando vaga no servidor:", vaga);
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

// Função para obter a data atual no formato DD/MM/AAAA
function obterDataAtual() {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const ano = hoje.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

// Função para fazer upload da imagem para Cloudinary
async function uploadImagem(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'Imagens_UAIJobs'); // Use o nome exato do seu upload preset

    try {
        console.log("Iniciando upload da imagem para Cloudinary");
        const response = await fetch('https://api.cloudinary.com/v1_1/df7rlfmhg/image/upload', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Imagem enviada com sucesso:", data.secure_url);
            return data.secure_url; // URL da imagem
        } else {
            const errorText = await response.text();
            console.error("Erro ao fazer upload da imagem. Status:", response.status, "Mensagem:", errorText);
            throw new Error('Erro ao fazer upload da imagem');
        }
    } catch (error) {
        console.error("Erro ao fazer upload da imagem:", error);
        return null;
    }
}

// Função para incluir uma vaga
async function IncluirVagaLS() {
    console.log("Iniciando inclusão de vaga...");
    const usuarioCorrente = JSON.parse(localStorage.getItem('UsuarioCorrente'));
    if (!usuarioCorrente || usuarioCorrente.tipo !== 'empregador') {
        window.alert('Apenas empregadores podem publicar vagas.');
        return;
    }

    let nomeVaga = document.getElementById('nomeVaga').value;
    let categoriaVaga = document.getElementById('categoriaVaga').value;
    let descricaoVaga = document.getElementById('descricaoVaga').value;
    let valorVaga = document.getElementById('valorVaga').value;
    let turnoVaga = document.getElementById('turnoVaga').value;
    let CEP = document.getElementById('localVaga').value;
    let dataVaga = document.getElementById('dataVaga').value;
    let habilidadesVaga = document.getElementById('habilidadesVaga').value.split(',');
    let imagemInput = document.getElementById('imagemVaga').files[0];

    if (nomeVaga === '' || categoriaVaga === '' || valorVaga === '' || descricaoVaga === '') {
        window.alert("Por favor, tenha certeza que todos os campos abaixos estão preenchidos: \n\nVaga: Nome, Categoria, Valor e Descrição \nContratante: Nome, E-mail e CPF/CNPJ");
        return;
    }

    let imagemVagaUrl = await uploadImagem(imagemInput);
    if (!imagemVagaUrl) {
        window.alert('Erro ao fazer upload da imagem. Por favor, tente novamente.');
        return;
    }

    let novaVaga = {
        nome: nomeVaga,
        categoria: categoriaVaga,
        descricao: descricaoVaga,
        imagem: imagemVagaUrl,
        valor: valorVaga,
        turno: turnoVaga,
        CEP: CEP,
        data: dataVaga,
        habilidades: habilidadesVaga,
        empregador: usuarioCorrente.nome,
        email: usuarioCorrente.email,
        telefone: usuarioCorrente.telefone,
        cnpj: usuarioCorrente.cpf,
        publicado: true,
        publicacao: obterDataAtual()
    };

    console.log("Nova vaga:", novaVaga);
    salvarVagaNoJSONServer(novaVaga);
}
