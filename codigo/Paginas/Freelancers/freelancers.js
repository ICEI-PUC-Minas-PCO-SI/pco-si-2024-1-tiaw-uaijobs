const JSON_SERVER_URL_VAGAS = 'http://localhost:3000/vagas';
const JSON_SERVER_URL_EMPREGADORES = 'http://localhost:3000/empregadores';
const JSON_SERVER_URL_FREELANCERS = 'http://localhost:3000/freelancers';

document.addEventListener("DOMContentLoaded", async function () {
    const response = await axios.get(`${JSON_SERVER_URL_FREELANCERS}`);
    let freelancers = response.data;
    console.log(freelancers);
    const freelancerContainer = document.getElementById('container-freelancers-disponiveis');
    
    freelancers.forEach(freelancer => {
        const freelancerCard = document.createElement('div');
        freelancerCard.classList.add('Container', 'border', 'p-3', 'rounded-4', 'shadow-lg', 'p-3', 'mb-5', 'bg-body-tertiary', 'mx-5', 'col-xxl-4');
    
        const title = document.createElement('div');
        title.classList.add('Cards-freelancer-title', 'text-center', 'pb-2');
        const h2 = document.createElement('h2');
        h2.textContent = freelancer.nome;
        title.appendChild(h2);
    
        const imagem = document.createElement('div');
        imagem.classList.add('Cards-freelancer-imagem', 'pb-2', 'ps-5');
        const img = document.createElement('img');
        img.classList.add('rounded-3');
        img.src = '../../' + freelancer.imagem;
        img.alt = 'Imagem do freelancer';
        // img.onerror = function () {
        //     console.error('Erro ao carregar a imagem:', freelancer.imagem);
        //     img.src = 'fallback_image_url.jpg'; // Imagem de fallback
        // };
        imagem.appendChild(img);
    
        const descricao = document.createElement('div');
        descricao.classList.add('Cards-freelancer-descrição');
        const p = document.createElement('p');
        const maxLength = 500;
        if (freelancer.bio) {
            p.textContent = freelancer.bio.substring(0, maxLength) + '...';
        } else {
            p.textContent = 'Biografia não disponível.';
        }
        descricao.appendChild(p);
    
        const bttn = document.createElement('div');
        bttn.classList.add('Cards-freelancer-bttn', 'd-grid', 'gap-2', 'col-6', 'mx-auto');
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-outline-danger');
        button.textContent = 'Ver detalhes';
        button.onclick = function() {
            mostrarDetalhesVaga(vagaItem);
        };
        bttn.appendChild(button);
        
        freelancerCard.appendChild(title);
        freelancerCard.appendChild(imagem);
        freelancerCard.appendChild(descricao);
        freelancerCard.appendChild(bttn);
    
        freelancerContainer.appendChild(freelancerCard);
    });
    
});


