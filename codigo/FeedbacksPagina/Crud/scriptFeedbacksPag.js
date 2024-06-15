document.addEventListener('DOMContentLoaded', (event) => {
    const feedbackForm = document.querySelector('form');
    feedbackForm.addEventListener('submit', storeFeedback);
});

function storeFeedback(event) {
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

    // Cria um objeto de avaliação que será enviado para o localStorage
    const feedback = {
        nome: nome,
        email: email,
        estrelas: estrelas,
        descricao: descricao,
        data: data,
        categoria: categoria
    };

    // Verifica se já existe algum feedback armazenado
    let feedbackList = localStorage.getItem('feedbacks');
    if (feedbackList) {
        feedbackList = JSON.parse(feedbackList);
    } else {
        feedbackList = [];
    }

    // Adiciona o novo feedback à lista
    feedbackList.push(feedback);

    // Armazena a lista atualizada no localStorage
    localStorage.setItem('feedbacks', JSON.stringify(feedbackList));

    // Limpa os campos do formulário após o envio
    document.getElementById('inserirNome').value = '';
    document.getElementById('inserirEmail').value = '';
    document.getElementById('inserirDescricao').value = '';
    document.querySelector('input[name="rate"]:checked').checked = false;

    alert('Feedback enviado com sucesso!');
}
