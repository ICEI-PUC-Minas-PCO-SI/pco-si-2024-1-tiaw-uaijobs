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

        data.forEach((job, index) => {
            if (index < 3) { // Limita a criação inicial dos cards aos primeiros 3
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
            }
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

    //-----------------------------FILTRAGEM E PAGINAÇÃO-----------------------------------------
    const object = {
        "sizePage": 3,
        "items": jobData.map((job, index) => ({
            "title": `${index + 1}. ${job.title}`,
            "image": job.image,
            "description": job.description,
            "categoria": "Categoria Exemplo", // Adicione a categoria aqui
            "periodo": "Manhã", // Adicione o período aqui
            "data": "Hoje", // Adicione a data aqui
            "dataLiteral": "10/01/2001", // Adicione a data literal aqui
            "cidade": "Belo Horizonte", // Adicione a cidade aqui
            "valorHora": 100 // Adicione o valor por hora aqui
        }))
    };

    let currentPage = 1;
    let filteredItems = object.items;

    let filters = {
        categoria: '',
        periodo: '',
        data: '',
        dataIni: '',
        dataFim: '',
        cidade: '',
        valorHora: 1000
    };

    function updateDropdownButton(dropdownId, value) {
        const button = document.getElementById(dropdownId);
        button.innerHTML = value + ' <span class="caret"></span>';
    }

    function setFilter(filterType, value, dropdownId) {
        filters[filterType] = value;
        console.log(filters);
        updateDropdownButton(dropdownId, value);
        applyFilters();
    }

    function updatavalorHoraLabel(value) {
        filters.valorHora = parseInt(value);
        document.getElementById('valorHoraMaxLabel').innerText = value;
        applyFilters();
    }

    function applyFilters() {
        filteredItems = object.items.filter(item => {
            if(filters.dataIni && filters.dataFim){
                var dateFrom = filters.dataIni.split("/");
                var dateTo = filters.dataFim.split("/");
                var dateCheck = item.dataLiteral.split("/");

                var from = new Date(dateFrom[2], parseInt(dateFrom[1])-1, dateFrom[0]);
                var to   = new Date(dateTo[2], parseInt(dateTo[1])-1, dateTo[0]);
                var check = new Date(dateCheck[2], parseInt(dateCheck[1])-1, dateCheck[0]);

                if(!(check >= from && check <= to)){
                    return false;
                }
            }

            return (!filters.categoria || item.categoria === filters.categoria) &&
            (!filters.periodo || item.periodo === filters.periodo) &&
            (!filters.data || item.data === filters.data) &&
            (!filters.cidade || item.cidade === filters.cidade) &&
            (item.valorHora <= filters.valorHora);
        });
        
        console.log(filteredItems)
        numberOfPages = Math.ceil(filteredItems.length / object.sizePage);
        currentPage = 1;
        selectPage(1);
    }

    function resetFilters() {
        filters = {
            categoria: '',
            periodo: '',
            data: '',
            dataIni: '',
            dataFim: '',
            cidade: '',
            valorHora: 1000
        };

        document.getElementById('dropdownCategory').innerText = 'Categoria';
        document.getElementById('dropdownPeriod').innerText = 'Período';
        document.getElementById('dropdownDate').innerText = 'Data';
        document.getElementById('dropdownCity').innerText = 'Cidade';
        document.getElementById('valorHora').value = 1000;
        document.getElementById('valorHoraMinLabel').innerText = 0;
        document.getElementById('valorHoraMaxLabel').innerText = 1000;

        applyFilters();
    }

    function selectPage(page) {
        currentPage = page;
        const start = (page - 1) * object.sizePage;
        const end = start + object.sizePage;
        const pageItems = filteredItems.slice(start, end);

        for (let i = 0; i < object.sizePage; i++) {
            const card = document.getElementById(`item-${i + 1}`);
            const title = document.getElementById(`item-title-${i + 1}`);
            const img = document.getElementById(`item-img-${i + 1}`);
            const description = document.getElementById(`item-description-${i + 1}`);

            if (pageItems[i]) {
                const item = pageItems[i];
                title.innerHTML = item.title;
                img.src = item.image;
                description.innerHTML = item.description;
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    }

    function backPage() {
        if (currentPage > 1) {
            selectPage(currentPage - 1);
        }
    }

    function fowardPage() {
        if (currentPage < numberOfPages) {
            selectPage(currentPage + 1);
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        selectPage(1);

        flatpickr("#dateRange", {
            mode: "range",
            dateFormat: "d/m/Y",
            locale: "pt",
            onChange: function(selectedDates, dateStr, instance) {
                if (selectedDates.length === 2) {
                    filters.dataIni = selectedDates[0].toLocaleDateString("pt-BR");
                    filters.dataFim = selectedDates[1].toLocaleDateString("pt-BR");
                    applyFilters();
                }
            }
        });
    });

    //----------------------------------------------------------------------
    function mostrarAlerta() {
        alert("Perdão, função ainda em desenvolvimento!");
    }
});
