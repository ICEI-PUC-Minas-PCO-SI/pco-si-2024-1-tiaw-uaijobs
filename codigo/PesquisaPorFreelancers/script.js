$(document).ready(function () {
    let freelancersData = [];
    const $filterCategoria = $('#filter-categoria');
    const $filterLocalizacao = $('#filter-localizacao');
    const $filterHabilidades = $('#filter-habilidades');
    const $priceSlider = $("#price-slider");
    const $priceMin = $("#price-min");
    const $priceMax = $("#price-max");
    const $resultList = $("#result-list");

    // Função para captar os filtros selecionados
    function getSelectedFilters() {
        let filters = {
            categories: [],
            locations: [],
            skills: [],
            priceRange: $priceSlider.slider("values")
        };

        $filterCategoria.find('input:checked').each(function () {
            filters.categories.push($(this).val());
        });

        $filterLocalizacao.find('input:checked').each(function () {
            filters.locations.push($(this).val());
        });

        $filterHabilidades.find('input:checked').each(function () {
            filters.skills.push($(this).val());
        });

        return filters;
    }

    // Carrega dados do arquivo JSON
    $.getJSON('data.json', function (data) {
        freelancersData = data.freelancers;

        // Preenche categorias no filtro de categorias
        let categorias = data.categorias;
        $.each(categorias, function (index, value) {
            $filterCategoria.append('<label><input type="checkbox" value="' + value + '"> ' + value + '</label><br>');
        });

        // Preenche habilidades no filtro de habilidades
        let habilidades = data.habilidades;
        $.each(habilidades, function (index, value) {
            $filterHabilidades.append('<label><input type="checkbox" value="' + value + '"> ' + value + '</label><br>');
        });

        // Configura o slider de preço
        $priceSlider.slider({
            range: true,
            min: data.preco.min,
            max: data.preco.max,
            values: [data.preco.min, data.preco.max],
            slide: function (event, ui) {
                $priceMin.val("R$" + ui.values[0]);
                $priceMax.val("R$" + ui.values[1]);
            }
        });
        $priceMin.val("R$" + data.preco.min);
        $priceMax.val("R$" + data.preco.max);
    });

    // Função para atualizar o slider com base nos valores digitados
    function updateSliderFromInput(minVal, maxVal) {
        // Garante que o valor mínimo não seja maior que o valor máximo
        minVal = Math.min(minVal, maxVal);
        maxVal = Math.max(minVal, maxVal);

        var minPrice = Math.max(minVal, $priceSlider.slider("option", "min"));
        var maxPrice = Math.min(maxVal, $priceSlider.slider("option", "max"));

        $priceSlider.slider('values', [minPrice, maxPrice]);
        $priceMin.val("R$" + minPrice);
        $priceMax.val("R$" + maxPrice);
    }

    // Entrada manual para o campo de preço mínimo
    $priceMin.on('input', function () {
        // Remover letras e caracteres especiais
        var valor = $(this).val().replace(/[^0-9.,]/g, '');
        if (valor === '') {
            valor = '0';
        }
        valor = 'R$ ' + valor;
        $(this).val(valor);

        var minVal = parseInt(valor.replace('R$', ''), 10);
        var maxVal = parseInt($priceMax.val().replace('R$', ''), 10);
        updateSliderFromInput(minVal, maxVal);
    });

    // Entrada manual para o campo de preço máximo
    $priceMax.on('input', function () {
        // Remover letras e caracteres especiais
        var valor = $(this).val().replace(/[^0-9.,]/g, '');
        if (valor === '' || isNaN(valor)) {
            valor = '150'; // Definir valor como 150 se vazio ou conter letras
        }
        valor = 'R$ ' + valor;
        $(this).val(valor);

        var maxVal = parseInt(valor.replace('R$', ''), 10);
        var minVal = parseInt($priceMin.val().replace('R$', ''), 10);
        updateSliderFromInput(minVal, maxVal);
    });

    // Expande ou recolhe filtros ao clicar no título
    $(".filter-title").click(function () {
        $(this).next(".filter-content").slideToggle();
    });

    // Evento do botão de pesquisa
    $("#search-button").click(function () {
        let filters = getSelectedFilters();
        displayResults(filters);
        updateFilters(filters);
    });

    // Atualiza filtros ao selecionar/desmarcar uma opção
    $(".filter-content").on('change', 'input', function () {
        let filters = getSelectedFilters();
        updateFilters(filters);
    });

    // Função para exibir resultados
    function displayResults(filters) {
        $resultList.empty();

        // Filtra freelancers com base nos filtros selecionados (area de resultados)
        let results = freelancersData.filter(function (freelancer) {
            let categoryMatch = filters.categories.length === 0 || filters.categories.includes(freelancer.categoria);
            let locationMatch = filters.locations.length === 0 || filters.locations.includes(freelancer.localizacao);
            let skillsMatch = filters.skills.length === 0 || filters.skills.every(skill => freelancer.habilidades.includes(skill));
            let priceMatch = freelancer.preco >= filters.priceRange[0] && freelancer.preco <= filters.priceRange[1];

            return categoryMatch && locationMatch && skillsMatch && priceMatch;
        });

        // Adiciona resultados à lista ou mostra mensagem de 'nenhum resultado'
        if (results.length > 0) {
            $.each(results, function (index, freelancer) {
                let resultItem = `
                        <div class="result-item">
                            <img src="${freelancer.foto}" alt="${freelancer.nome}">
                            <h3>${freelancer.nome}</h3>
                            <p>${freelancer.resumo}</p>
                            <p>Categoria: ${freelancer.categoria}</p>
                            <p>Localização: ${freelancer.localizacao}</p>
                            <p>Preço: R$${freelancer.preco}/hora</p>
                            <p>Habilidades: ${freelancer.habilidades.join(', ')}</p>
                        </div>
                    `;
                $resultList.append(resultItem);
            });
        } else {
            $resultList.append('<p>Nenhum freelancer encontrado com os filtros selecionados.</p>');
        }

        // Atualiza os filtros com base nos resultados
        updateFilters(filters);
    }

    // Função para atualizar os filtros disponíveis
    function updateFilters(filters) {
        let availableCategories = new Set();
        let availableLocations = new Set();
        let availableSkills = new Set();

        // Filtra freelancers com base nos filtros selecionados (area de filtros)
        let filteredFreelancers = freelancersData.filter(function (freelancer) {
            let categoryMatch = !filters.categories.length || filters.categories.includes(freelancer.categoria);
            let locationMatch = !filters.locations.length || filters.locations.includes(freelancer.localizacao);
            let skillsMatch = !filters.skills.length || freelancer.habilidades.some(skill => filters.skills.includes(skill));
            let priceMatch = freelancer.preco >= filters.priceRange[0] && freelancer.preco <= filters.priceRange[1];

            if (categoryMatch && locationMatch && skillsMatch && priceMatch) {
                availableCategories.add(freelancer.categoria);
                availableLocations.add(freelancer.localizacao);
                freelancer.habilidades.forEach(skill => availableSkills.add(skill));
            }
            return categoryMatch && locationMatch && skillsMatch && priceMatch;
        });

        // Atualiza categorias
        $filterCategoria.find('input').each(function () {
            let isAvailable = availableCategories.has($(this).val());
            $(this).prop("disabled", !isAvailable);
            $(this).parent().css("color", isAvailable ? "" : "gray");
        });

        // Atualiza localizações
        $filterLocalizacao.find('input').each(function () {
            let isAvailable = availableLocations.has($(this).val());
            $(this).prop("disabled", !isAvailable);
            $(this).parent().css("color", isAvailable ? "" : "gray");
        });

        // Atualiza habilidades
        $filterHabilidades.find('input').each(function () {
            let isAvailable = availableSkills.has($(this).val());
            $(this).prop("disabled", !isAvailable);
            $(this).parent().css("color", isAvailable ? "" : "gray");
        });
    }
});
