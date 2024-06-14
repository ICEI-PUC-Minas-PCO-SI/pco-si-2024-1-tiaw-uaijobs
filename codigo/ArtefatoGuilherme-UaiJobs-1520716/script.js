document.addEventListener('DOMContentLoaded', () => {
    // Container onde a lista de trabalhadores será exibida
    const workersListContainer = document.getElementById('uai-jobs-workers-list');
    // URL do servidor para salvar e carregar avaliações
    const serverUrl = 'http://localhost:3000/ratings';
    // Dados dos trabalhadores
    const workersData = [
        { id: 1, name: 'Elder Franco', competencies: 'Developer Front End, sou freelancer.' },
        { id: 2, name: 'Maria Souza', competencies: 'Encanadora a mais de dois anos.' },
        { id: 3, name: 'Carlos Pereira', competencies: 'Faço artes, grafites, pinturas tudo que for relacionado!' },
    ];

    // Função para renderizar a lista de trabalhadores
    function renderWorkers(workers) {
        workersListContainer.innerHTML = workers.map(worker => `
            <div class="worker-card col-12">
                <div class="worker-name">${worker.name}</div>
                <div class="competencies">Competências: ${worker.competencies}</div>
                <div class="rating" data-id="${worker.id}">
                    ${[1, 2, 3, 4, 5].map(i => `<span data-value="${i}">&#9733;</span>`).join('')}
                </div>
                <div class="comment-section">
                    <textarea placeholder="Escreva um comentário..." data-id="${worker.id}"></textarea>
                </div>
                <button class="submit-rating" data-id="${worker.id}">Confirmar Avaliação</button>
            </div>
        `).join('');
        addListeners();
        loadRatings();
    }

    // Função para adicionar listeners aos elementos interativos
    function addListeners() {
        // Adiciona evento de clique nas estrelas para definir a avaliação
        document.querySelectorAll('.rating span').forEach(star => {
            star.addEventListener('click', setRating);
        });
        // Adiciona evento de clique nos botões de confirmar avaliação
        document.querySelectorAll('.submit-rating').forEach(button => {
            button.addEventListener('click', submitRating);
        });
    }

    // Função para definir a avaliação quando uma estrela é clicada
    function setRating(e) {
        const ratingValue = e.target.getAttribute('data-value');
        const ratingContainer = e.target.parentElement;
        ratingContainer.setAttribute('data-selected-rating', ratingValue);
        updateDisplay(ratingContainer, ratingValue);
    }

    // Função para atualizar a exibição das estrelas selecionadas
    function updateDisplay(container, value) {
        container.querySelectorAll('span').forEach(span => {
            span.classList.toggle('active', span.getAttribute('data-value') <= value);
        });
    }

    // Função para enviar a avaliação ao servidor e salvar no Local Storage
    async function submitRating(e) {
        const workerId = e.target.getAttribute('data-id');
        const ratingContainer = document.querySelector(`.rating[data-id='${workerId}']`);
        const ratingValue = ratingContainer.getAttribute('data-selected-rating');
        const comment = document.querySelector(`textarea[data-id='${workerId}']`).value;
        if (ratingValue) {
            await saveRating(workerId, parseInt(ratingValue), comment);
            saveToLocalStorage(workerId, parseInt(ratingValue), comment);
        } else {
            alert("Por favor, selecione uma avaliação antes de confirmar.");
        }
    }

    // Função para salvar a avaliação no servidor
    async function saveRating(workerId, ratingValue, comment) {
        const ratingData = { workerId, rating: ratingValue, comment };
        const response = await fetch(serverUrl);
        const ratings = await response.json();
        const existingRating = ratings.find(r => r.workerId == workerId);
        const method = existingRating ? 'PUT' : 'POST';
        const url = existingRating ? `${serverUrl}/${existingRating.id}` : serverUrl;
        await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ratingData),
        });
        loadRatings();
    }

    // Função para salvar a avaliação no Local Storage
    function saveToLocalStorage(workerId, ratingValue, comment) {
        const ratings = JSON.parse(localStorage.getItem('uaiJobsRatings')) || [];
        const existingRatingIndex = ratings.findIndex(r => r.workerId === workerId);
        const ratingData = { workerId, rating: ratingValue, comment };
        if (existingRatingIndex > -1) {
            ratings[existingRatingIndex] = ratingData;
        } else {
            ratings.push(ratingData);
        }
        localStorage.setItem('uaiJobsRatings', JSON.stringify(ratings));
    }

    // Função para carregar as avaliações salvas do servidor e do Local Storage
    async function loadRatings() {
        const response = await fetch(serverUrl);
        const ratings = await response.json();
        const localRatings = JSON.parse(localStorage.getItem('uaiJobsRatings')) || [];
        const combinedRatings = [...ratings, ...localRatings];
        combinedRatings.forEach(rating => {
            const ratingContainer = document.querySelector(`.rating[data-id='${rating.workerId}']`);
            const commentElement = document.querySelector(`textarea[data-id='${rating.workerId}']`);
            if (ratingContainer) {
                updateDisplay(ratingContainer, rating.rating);
                ratingContainer.setAttribute('data-selected-rating', rating.rating);
                commentElement.value = rating.comment || '';
            }
        });
    }

    // Renderiza os trabalhadores quando a página é carregada
    renderWorkers(workersData);
});
