# bsale-front

# JQuery, Bootstrap, HTML, JS


## Adquirir API desde app Heroku
```js
var request = new XMLHttpRequest();
request.open('GET', 'https://bsaletest-api.herokuapp.com/api/product', true);
```
## Búsqueda por palabra (keyword)
```js
request.open('GET', 'https://bsaletest-api.herokuapp.com/api/product/' + searchParam, true);
```
## Búsqueda no ha encontrado la palabra (keyword)
```js
if (response.data.length>0){
                renderProducts(response.data);
            }
            else{
                $('.card-container').empty();
                $('.card-container').append(`
                <div class="alert alert-danger text-center" role="alert">
                    <h5>Ooops! No se han encontrado productos que contengan en su nombre: ${searchParam}</h5>
                </div>
                `);
            }
```
## Renderización de Productos por Categoria en formato tarjeta (card); refrescar tarjeta cada vez que se solicite
```js
$('.card-container').empty();
    var cardCounter = 0;
    for (let i = 0; i < categoryInfo.length; i++) {
        if (cardCounter % 4 == 0) {
          (html)
        }
```
## Validación para agregar tarjetas vacías si la fila es menor a 4 elementos
```js
        if (i == categoryInfo.length - 1) {
            var rowCardNumber = $('.card-row').last().children('.card-unit').length
            for (let j = 0; j < 4 - rowCardNumber; j++) {
                $('.card-row').last().append(`
                (html)
            `);
            }
        }
```        
