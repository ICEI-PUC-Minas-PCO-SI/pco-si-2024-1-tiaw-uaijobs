//Carrega o DOM
document.addEventListener('DOMContentLoaded', () => {
    mostraFeedbacks();
    setupCarousel();
});
//Função para criar e mostrar os feedbacks de acordo com o JSON
function mostraFeedbacks() {
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    const carouselInner = document.querySelector('.carousel-inner');

    if (feedbacks.length > 0) {
        feedbacks.forEach((feedback, index) => {
            const feedbackDiv = document.createElement('div');
            feedbackDiv.classList.add('carousel-item');
            if (index === 0) {
                feedbackDiv.classList.add('active');
            }
            feedbackDiv.innerHTML = `
                <div class="d-flex justify-content-center">
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
                                    <p>${feedback.descricao}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            carouselInner.appendChild(feedbackDiv);
        });
    } else {
        carouselInner.innerHTML = '<div class="carousel-item active"><p>Nenhum feedback disponível.</p></div>';
    }
}
//Gera as estrelas dos feedbacks
function generateStars(rating) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        starsHTML += `<span class="fa fa-star ${i <= rating ? 'checked' : ''}"></span>`;
    }
    return starsHTML;
}
//Cria carrossel e determina intervalo de passagem
function setupCarousel() {
    const feedbackCarousel = new bootstrap.Carousel(document.getElementById('feedbackCarousel'), {
        interval: 5000 // Define o intervalo de 5 segundos
    });

}
