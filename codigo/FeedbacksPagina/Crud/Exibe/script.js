document.addEventListener('DOMContentLoaded', () => {
    mostraFeedbacks();
    setupCarousel();
});

function mostraFeedbacks() {
    axios.get('http://localhost:3000/feedbacks') // Substitua pela URL do seu JSON server
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
                                    ${generateStars(feedback.estrelas)}
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

function generateStars(rating) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        starsHTML += `<span class="fa fa-star ${i <= rating ? 'checked' : ''}"></span>`;
    }
    return starsHTML;
}

function setupCarousel() {
    const feedbackCarousel = new bootstrap.Carousel(document.getElementById('feedbackCarousel'), {
        interval: 5000 // Define o intervalo de 5 segundos
    });
}
