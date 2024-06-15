document.addEventListener("DOMContentLoaded", function () {
    const vagasContainer = document.getElementById('cards-vagas-abertas');
    
    axios.get('http://localhost:3000/vagas') // Substitua pela URL do seu JSON server
        .then(response => {
            const vagas = response.data;

            vagas.forEach(vagaItem => {
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
                p.textContent = vagaItem.descrição.substring(0, maxLength) + '...';
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
        })
        .catch(error => {
            console.error('Erro ao buscar dados do servidor:', error);
        });
});
