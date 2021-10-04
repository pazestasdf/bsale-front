# bsale-front

##Adquirir API desde app Heroku
```js
var request = new XMLHttpRequest();
request.open('GET', 'https://bsaletest-api.herokuapp.com/api/product', true);
```
##Búsqueda por palabra (keyword)
```js
request.open('GET', 'https://bsaletest-api.herokuapp.com/api/product/' + searchParam, true);
```
##Renderización de Productos por Categoria en formato tarjeta (card); refrescar tarjeta cada vez que se solicite
```js
$('.card-container').empty();
    var cardCounter = 0;
    for (let i = 0; i < categoryInfo.length; i++) {
        if (cardCounter % 4 == 0) {
          (html)
        }
```
##Validación para agregar tarjetas vacas si la fila es menor a 4 elementos
```js
        if (i == categoryInfo.length - 1) {
            var rowCardNumber = $('.card-row').last().children('.card-unit').length
            for (let j = 0; j < 4 - rowCardNumber; j++) {
                $('.card-row').last().append(`
            `);
            }
        }
```        
