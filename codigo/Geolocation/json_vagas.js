document.addEventListener('DOMContentLoaded', () => {
    //-------------------------------JSON SIMULADO---------------------------------------
    const jobData = [
        {
            "title": "Desenvolvedor Web",
            "description": "Estamos procurando um desenvolvedor web com experiência em JavaScript e React.",
            "image": "img/dev.jpg",
            "lat": "-19.945820",
            "lgt": "-44.041089"
        },
        {
            "title": "Designer Gráfico",
            "description": "Procuramos um designer gráfico talentoso para criar gráficos impressionantes.",
            "image": "img/designer.png",
            "lat": "-19.952721",
            "lgt": "-44.037770"
        },
        {
            "title": "Analista de Dados",
            "description": "Buscamos um analista de dados para interpretar e analisar grandes volumes de dados.",
            "image": "img/analista.jpg",
            "lat": "-19.950878",
            "lgt": "-44.034519"
        },
        {
            "title": "Jardineiro",
            "description": "Buscamos jardineiro para realizar manutenção de jardins.",
            "image": "img/jardineiro.jpg",
            "lat": "-19.946582",
            "lgt": "-44.029358"
        },
        {
            "title": "Garçom",
            "description": "Precisamos de um garçom para atender alta demanda.",
            "image": "img/garcom.jpg",
            "lat": "-19.932234",
            "lgt": "-44.014335"
        },
        {
            "title": "Entregador",
            "description": "Precisamos de um entregador para trabalhar num periodo de uma semana.",
            "image": "img/entregador.jpg",
            "lat": "-19.937182",
            "lgt": "-44.046036"
        }
    ];
    //-----------------------------FUNÇÃO PARA CRIAR CARDS-----------------------------------------
    createJobCards(jobData);

    function createJobCards(data) {
        const jobCardsContainer = document.getElementById('right');

        data.forEach(job => {
            const card = document.createElement('div');
            card.className = 'card mb-4 d-flex flex-row align-items-center';

            const link = document.createElement('a');
            link.href = `details.html?title=${encodeURIComponent(job.title)}`;
            link.className = 'd-flex flex-row align-items-center text-decoration-none text-dark bg-light';

            link.innerHTML = `
                <img src="${job.image}" class="card-img-left" alt="${job.title}" style="width: 30%; height: auto;">
                <div class="card-body">
                    <h5 class="card-title">${job.title}</h5>
                    <p class="card-text">${job.description}</p>
                </div>
            `;

            card.appendChild(link);
            jobCardsContainer.appendChild(card);
        });
    }
//-----------------------------MAPA-----------------------------------------
    const params = new URLSearchParams(window.location.search);
    const userCep = params.get('cep');
    const userAddress = params.get('address');
    const userLat = parseFloat(params.get('lat'));
    const userLng = parseFloat(params.get('lng'));

    if (userAddress) {
        document.getElementById('user-address').textContent = decodeURIComponent(userAddress);
    }

    document.getElementById('change-cep').addEventListener('click', () => {
        window.location.href = 'cep_input.html';
    });

    mapboxgl.accessToken = 'pk.eyJ1IjoiaWdvcm1tZiIsImEiOiJjbHd3cnl4dzExNHpsMmlvOHdzMzN3aTBiIn0.BOMzGXeX4cjnW2X-qpYzJw';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [userLng, userLat],
        zoom: 12
    });

    jobData.forEach(location => {
        const marker = new mapboxgl.Marker()
            .setLngLat([location.lgt, location.lat])
            .setPopup(new mapboxgl.Popup().setHTML(`<h3>${location.title}</h3>`))
            .addTo(map);
    }); // cria os cards com base na lat e lgn no JSON

    if (userLat && userLng) {
        new mapboxgl.Marker({ color: 'yellow' })
            .setLngLat([userLng, userLat])
            .setPopup(new mapboxgl.Popup().setHTML(`<h3>Você está aqui</h3>`))
            .addTo(map);
    } else {
        navigator.geolocation.getCurrentPosition(position => {
            const userLocation = [position.coords.longitude, position.coords.latitude];
            map.setCenter(userLocation);
            new mapboxgl.Marker({ color: 'yellow' })
                .setLngLat(userLocation)
                .setPopup(new mapboxgl.Popup().setHTML(`<h3>Você está aqui</h3>`))
                .addTo(map);
        }, () => {
            alert('Erro ao obter localização.');
        });
    } // cria sua localização com base no CEP

//----------------------------------------------------------------------
    function mostrarAlerta() {
        alert("Perdão, função ainda em desenvolvimento!");
    }
});