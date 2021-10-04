var categoriesArray = ['bebida energetica', 'pisco', 'ron', 'bebida', 'snack', 'cerveza', 'vodka'];
var bebidaEnergetica = [];
var pisco = [];
var ron = [];
var bebida = [];
var snack = [];
var cerveza = [];
var vodka = [];

function loadCategories(data) {
    for (let i = 0; i < data.length; i++) {
        switch (data[i].name) {
            case 'bebida energetica':
                bebidaEnergetica.push(data[i]);
                break;
            case 'pisco':
                pisco.push(data[i]);
                break;
            case 'ron':
                ron.push(data[i]);
                break;
            case 'bebida':
                bebida.push(data[i]);
                break;
            case 'snack':
                snack.push(data[i]);
                break;
            case 'cerveza':
                cerveza.push(data[i]);
                break;
            case 'vodka':
                vodka.push(data[i]);
                break;
        }
    }
}

function loadCategoryInfo(categoryName) {
    switch (categoryName) {
        case 'bebida energetica':
            renderCategory('energetica', bebidaEnergetica);
            break;
        case 'pisco':
            renderCategory('pisco', pisco);
            break;
        case 'ron':
            renderCategory('ron', ron);
            break;
        case 'bebida':
            renderCategory('bebida', bebida);
            break;
        case 'snack':
            renderCategory('snack', snack);
            break;
        case 'cerveza':
            renderCategory('cerveza', cerveza);
            break;
        case 'vodka':
            renderCategory('vodka', vodka);
            break;
    }
}

function renderCategory(category, categoryInfo) {
    $('.card-container').empty();
    var cardCounter = 0;
    for (let i = 0; i < categoryInfo.length; i++) {
        if (cardCounter % 4 == 0) {
            $('.card-container').append(`
                <div class="row row-cols-1 row-cols-md-3 card-row">
                </div>
            `);
            $('.card-row').last().append(`
            <div class="col mb-4 card-unit">
            <div class="card h-100">
              <img src="${categoryInfo[i].url_image}" class="card-img-top" alt="">
              <div class="card-body">
                <h5 class="card-title">${categoryInfo[i].nombre_producto}</h5>
                <hr>
                <div class="card-body text-right">
                    <span class="card-link">$${categoryInfo[i].price}</span>
                    <a href=# class="btn btn-secondary"><i class="fas fa-cart-plus"></i></a>
                </div>
            </div>
            </div>
            `);
            cardCounter++
        } else {
            $('.card-container').children().last().append(`
            <div class="col mb-4 card-unit">
            <div class="card h-100">
              <img src="${categoryInfo[i].url_image}" class="card-img-top" alt="">
              <div class="card-body">
                <h5 class="card-title">${categoryInfo[i].nombre_producto}</h5>
                <hr>
                <div class="card-body text-right">
                    <span class="card-link">$${categoryInfo[i].price}</span>
                    <a href=# class="btn btn-secondary"><i class="fas fa-cart-plus"></i></a>
                </div>
            </div>
            </div>
            `);
            cardCounter++
        }
        // validacion para agregar tarjetas vacias si la fila es menor a 4 elementos
        if (i == categoryInfo.length - 1) {
            var rowCardNumber = $('.card-row').last().children('.card-unit').length
            for (let j = 0; j < 4 - rowCardNumber; j++) {
                $('.card-row').last().append(`
            <div class="col mb-4 card-unit">
            
            </div>
            `);
            }
        }
    }

}
var request = new XMLHttpRequest();
request.open('GET', 'https://bsaletest-api.herokuapp.com/api/product', true);

request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
        // Success!
        var response = JSON.parse(this.response);
        loadCategories(response.data)
        console.log('categoriesLoad')
        // console.log(response);
        // response.data.forEach(element => {
        // var newElement = document.createElement("p");
        // newElement.innerText = element.name;
        // document.body.appendChild(newElement);    
        // });
    } else {
        // We reached our target server, but it returned an error
    }
};

request.onerror = function () {
    // There was a connection error of some sort
};

request.send();