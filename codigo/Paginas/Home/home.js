// Adiciona um evento que será executado quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Array de textos que serão exibidos dinamicamente
    const textosDinamicos = [
        "criar sua logo",
        "ter aulas de redação",
        "editar seu clipe",
        "traduzir seu artigo"
    ];
    let textoAtual = 0; // Índice do texto atual
    const elementoTexto = document.getElementById('texto-alteravel'); // Obtém o elemento que conterá o texto dinâmico

    // Função para digitar um texto, caractere por caractere
    function digitarTexto(texto, callback) {
        let i = 0;
        const intervaloDigitar = setInterval(() => {
            if (i < texto.length) {
                elementoTexto.textContent += texto.charAt(i); // Adiciona o próximo caractere ao elemento
                i++;
            } else {
                clearInterval(intervaloDigitar); // Para o intervalo quando o texto estiver completo
                if (callback) callback(); // Executa a função de callback se houver
            }
        }, 100); // Intervalo de 100 milissegundos entre cada caractere
    }

    // Função para apagar o texto, caractere por caractere
    function apagarTexto(callback) {
        let textoAtual = elementoTexto.textContent; // Obtém o texto atual do elemento
        let i = textoAtual.length;
        const intervaloApagar = setInterval(() => {
            if (i > 0) {
                elementoTexto.textContent = textoAtual.substring(0, i - 1); // Remove o último caractere do elemento
                i--;
            } else {
                clearInterval(intervaloApagar); // Para o intervalo quando o texto estiver apagado
                if (callback) callback(); // Executa a função de callback se houver
            }
        }, 100); // Intervalo de 100 milissegundos entre cada caractere removido
    }

    // Função que alterna entre os textos dinâmicos
    function atualizarTextoDinamico() {
        textoAtual = (textoAtual + 1) % textosDinamicos.length; // Atualiza o índice do texto atual de forma cíclica
        apagarTexto(() => {
            digitarTexto(textosDinamicos[textoAtual], () => {
                setTimeout(atualizarTextoDinamico, 2000); // Espera 2 segundos antes de atualizar o texto novamente
            });
        });
    }

    // Inicia a atualização do texto dinâmico após 2 segundos
    setTimeout(atualizarTextoDinamico, 2000);
});


//Carrossel dinamico de feedbacks
document.addEventListener('DOMContentLoaded', () => {
    mostraFeedbacks();
    setupCarousel();
});
//Construção dinamica do carrossel
function mostraFeedbacks() {
    axios.get('http://localhost:3000/feedbacks') // Substituir pela URL do JSon server
        .then(response => {
            const feedbacks = response.data;
            const carouselInner = document.querySelector('.carousel-inner');

            if (feedbacks.length > 0) {
                for (let i = 0; i < feedbacks.length; i += 3) {
                    const feedbackDiv = document.createElement('div');
                    feedbackDiv.classList.add('carousel-item');
                    if (i === 0) {
                        feedbackDiv.classList.add('active');
                    }

                    const feedbackGroup = document.createElement('div');
                    feedbackGroup.classList.add('d-flex', 'justify-content-around');

                    for (let j = 0; j < 3 && i + j < feedbacks.length; j++) {
                        const feedback = feedbacks[i + j];
                        const feedbackCard = `
                            <div class="boxAvaliacao rounded-4 shadow-lg border border-opacity-50 p-4 m-3">
                                <div class="nomeAvaliacao fw-semibold text-center pt-4">
                                    <p>${feedback.nome}</p>
                                </div>
                                <div class="notaAvaliacao text-center fw-medium">
                                    <p>Avaliação: ${feedback.estrelas}/5</p>
                                </div>
                                <div class="estrelasAvaliacao fw-medium text-center">
                                    ${geraEstrelas(feedback.estrelas)}
                                </div>
                                <div class="feedbackAvaliacao mt-3">
                                    <div class="fundoFeedback border rounded-4 shadow-lg border-opacity-50 p-3">
                                        <div class="textoFeedback p-4 text-center pt-5">
                                            <textarea class="form-control" readonly>${feedback.descricao}</textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                        feedbackGroup.innerHTML += feedbackCard;
                    }

                    feedbackDiv.appendChild(feedbackGroup);
                    carouselInner.appendChild(feedbackDiv);
                }
            } else {
                carouselInner.innerHTML = '<div class="carousel-item active"><p>Nenhum feedback disponível.</p></div>';
            }
        })
        .catch(error => {
            console.error('Erro ao buscar feedbacks do servidor:', error);
            const carouselInner = document.querySelector('.carousel-inner');
            carouselInner.innerHTML = '<div class="carousel-item active"><p>Erro ao carregar feedbacks.</p></div>';
        });
}
//Geração de estrelas
function geraEstrelas(rating) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        starsHTML += `<span class="fa fa-star ${i <= rating ? 'checked' : ''}"></span>`;
    }
    return starsHTML;
}
//Tempo do carrossel
function setupCarousel() {
    const feedbackCarousel = new bootstrap.Carousel(document.getElementById('feedbackCarousel'), {
        interval: 5000 // Define o intervalo de 5 segundos
    });
}

//CRUD dos feedbacks

document.addEventListener('DOMContentLoaded', (event) => {
    const feedbackForm = document.querySelector('form');
    feedbackForm.addEventListener('submit', ArmazenaFeedback);
});

function ArmazenaFeedback(event) {
    event.preventDefault();

    // Captura os valores dos campos do formulário
    const nome = document.getElementById('inserirNome').value.trim();
    const email = document.getElementById('inserirEmail').value.trim();
    const descricao = document.getElementById('inserirDescricao').value.trim();
    const estrelasElem = document.querySelector('input[name="rate"]:checked');
    const estrelas = estrelasElem ? estrelasElem.value : 0;

    // Verifica se todos os campos estão preenchidos
    if (!nome || !email || !descricao || !estrelas) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Obtém a data atual do dispositivo
    const data = new Date().toLocaleString();

    // Determina a categoria com base no valor das estrelas
    const categoria = estrelas >= 3 ? 'positivo' : 'negativo';

    // Cria um objeto de avaliação que será enviado para o servidor JSON
    const feedback = {
        nome: nome,
        email: email,
        estrelas: estrelas,
        descricao: descricao,
        data: data,
        categoria: categoria
    };

    // Envia o feedback para o servidor JSON
    axios.post('http://localhost:3000/feedbacks', feedback) // Substitua pela URL do seu JSON server
        .then(response => {
            console.log('Feedback enviado com sucesso:', response.data);
            alert('Feedback enviado com sucesso!');
            
            // Limpa os campos do formulário após o envio
            document.getElementById('inserirNome').value = '';
            document.getElementById('inserirEmail').value = '';
            document.getElementById('inserirDescricao').value = '';
            document.querySelector('input[name="rate"]:checked').checked = false;
        })
        .catch(error => {
            console.error('Erro ao enviar feedback:', error);
            alert('Erro ao enviar feedback. Por favor, tente novamente.');
        });
}

//Funções de pagamento

document.addEventListener('DOMContentLoaded', () => {
    const JSON_SERVER_URL_EMPREGADORES = 'http://localhost:3000/empregadores';
    const JSON_SERVER_URL_FREELANCERS = 'http://localhost:3000/freelancers';

    // Seleciona o botão de pagamento no modal
    const btnPagamento = document.getElementById('payment-button');
    const btnPremium = document.querySelector('.link-navegacao.premium').parentElement;

    // Esconde o botão "Tornar-se usuário premium" se o usuário já for premium
    function verificarUsuarioPremium() {
        const usuarioCorrente = JSON.parse(localStorage.getItem('UsuarioCorrente'));
        if (usuarioCorrente && usuarioCorrente.UserPremium) {
            btnPremium.style.display = 'none';
        }
    }

    verificarUsuarioPremium(); // Chama a função ao carregar a página

    btnPagamento.addEventListener('click', () => {
        // Exibe a área de conteúdo de pagamento
        const paymentContent = document.getElementById('payment-content');
        paymentContent.style.display = 'block';

        // Inicia o contador de 5 segundos
        let countdownElement = document.getElementById('countdown');
        let countdown = 5;
        countdownElement.innerText = countdown;

        let interval = setInterval(async () => {
            countdown--;
            countdownElement.innerText = countdown;
            if (countdown <= 0) {
                clearInterval(interval);
                //adicional para o final do contador
                window.alert('Pagamento realizado com sucesso!');
                
                // Atualiza o usuário para UserPremium
                await atualizarUsuarioParaPremium();
                
                // Fechar o modal após a ação de pagamento
                const premiumModal = document.getElementById('premiumModal');
                const modal = bootstrap.Modal.getInstance(premiumModal);
                modal.hide();
                paymentContent.style.display = 'none'; // Reseta a visibilidade do conteúdo de pagamento
                removeModalBackdrop(); // Remove manualmente a classe do backdrop
            }
        }, 1000);
    });

    // Função para remover manualmente o backdrop do modal
    function removeModalBackdrop() {
        document.body.classList.remove('modal-open');
        document.body.style = '';
        const modalBackdrops = document.getElementsByClassName('modal-backdrop');
        while (modalBackdrops[0]) {
            modalBackdrops[0].parentNode.removeChild(modalBackdrops[0]);
        }
    }

    // Listener para o evento de fechamento do modal, garantindo que as classes do corpo sejam removidas
    const premiumModal = document.getElementById('premiumModal');
    premiumModal.addEventListener('hidden.bs.modal', () => {
        removeModalBackdrop();
    });

    // Função para atualizar o usuário corrente para premium
    async function atualizarUsuarioParaPremium() {
        const usuarioCorrente = JSON.parse(localStorage.getItem('UsuarioCorrente'));
        if (!usuarioCorrente) {
            console.error("Nenhum usuário corrente encontrado no local storage.");
            return;
        }

        const url = usuarioCorrente.tipo === 'empregador' ? `${JSON_SERVER_URL_EMPREGADORES}/${usuarioCorrente.id}` : `${JSON_SERVER_URL_FREELANCERS}/${usuarioCorrente.id}`;
        console.log(`Atualizando usuário para premium. URL: ${url}`);

        try {
            const response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ UserPremium: true })
            });

            if (response.ok) {
                const updatedUser = await response.json();
                usuarioCorrente.UserPremium = updatedUser.UserPremium;
                localStorage.setItem('UsuarioCorrente', JSON.stringify(usuarioCorrente));
                btnPremium.style.display = 'none'; // Esconde o botão após o pagamento ser concluído
                console.log("Usuário atualizado para premium com sucesso.");
            } else {
                const errorText = await response.text();
                console.error("Falha ao atualizar usuário para premium. Status:", response.status, "Mensagem:", errorText);
            }
        } catch (error) {
            console.error("Erro ao atualizar usuário para premium:", error);
        }
    }
});

//Muda botão da home de acordo com o tipo de usuario

// Função para obter o tipo de usuário do local storage
function obterTipoUsuarioDoLocalStorage() {
    var dadosUsuario = localStorage.getItem('UsuarioCorrente');
    if (dadosUsuario) {
        var usuario = JSON.parse(dadosUsuario);
        return usuario.tipo;
    }
    return null;
}

// Adiciona um evento que será executado quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Função para verificar o tipo de usuário e ocultar o botão se não for freelancer
    function ocultarBotaoSeNaoForFreelancer() {
        // Obtém os dados do usuário corrente do localStorage
        var dadosUsuario = localStorage.getItem('UsuarioCorrente');
        
        // Verifica se os dados do usuário existem
        if (dadosUsuario) {
            var usuarioCorrente = JSON.parse(dadosUsuario);
            
            // Verifica se o tipo de usuário não é freelancer
            if (usuarioCorrente.tipo !== 'freelancer') {
                // Oculta o botão "Vagas para Você!"
                document.getElementById('botao-vagas-para-voce').style.display = 'none';
            }
        } else {
            // Caso não haja dados de usuário, oculta o botão por precaução
            document.getElementById('botao-vagas-para-voce').style.display = 'none';
        }
    }

    // Chama a função para ocultar o botão se necessário
    ocultarBotaoSeNaoForFreelancer();
});
