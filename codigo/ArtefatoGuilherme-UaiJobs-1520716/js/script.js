//Pego todas as variaveis com a class "fas", que e do fontAwesome(as estrelas)
const stars = document.querySelectorAll('.fas');

//Pego o valor ATUAL do rating que o cliente escolher, ou seja, ele clica na estrela 2 aparece 2 na frente
const rating = document.getElementById('ratingAtual');

//Aqui ele pega o RATING atual que foi armazenado no local storage e se n tiver nada dentro dele ele vai ser definido como zero, e o update rating e pra mostrar o rating atualizado
let currentRating = localStorage.getItem('ratingAtual') || 0;
updateRating(currentRating);

/*
Percorro todas as estrelas, e adiciono um evento de clique para que cada estrela que eu clicar a classificacao dela e atualizada
e apos disso armazenei o valor no local storage.
*/

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        const clickedRating = index + 1;
        updateRating(clickedRating);
        localStorage.setItem('ratingAtual', clickedRating);
        // Sessao de teste pra ver se o local storage esta funcionando:
        if (localStorage.getItem('ratingAtual') == clickedRating)
            console.log('Avaliação armazenada com sucesso!');
        else
            console.error('Erro ao armazenar a  avaliação!');
    });
});


/* Defini uma funcao para aparecer a cor das estrelas */
function updateRating(valorRating) {
    /*rating.textContent = `: ${valorRating}`;*/  //Esse text content e pra incluir no html o valor das estrelas que voce selecionou, coloquei de base, se tivermos mudanca podemos optar por ela.

    /* Se o indice da estrela for menor que valoRating a estrela e definida como amarela 
    Ou seja, as estrelas ate a posicao do rating atual vai ser amarela se nao ela sao deixadas em branco
    */

    stars.forEach((star, i) => {
        /* o ? no javaScript, e literalmente um if else, ou seja, se o indice for menor que o valor do rating logo vai pintar de amarelo, se nao vai ficar branco */
        star.style.color = i < valorRating ? '#fc0' : '';
    });
}
