var ropa = document.querySelectorAll('#ropa');
var computador = document.querySelectorAll('#computador');
var celular = document.querySelectorAll('#celular');
var elemento = document.querySelector('#filtro');
elemento.addEventListener('change', function(){
    let articulo = elemento.value;
    console.log(articulo);
    switch (articulo) {
        case 'ropa':
            mostrar(ropa);
            ocultar(computador);
            ocultar(celular);
            break;
        case 'computadores':
            mostrar(computador);
            ocultar(ropa);
            ocultar(celular);
            break;
        case 'celulares':
            mostrar(celular);
            ocultar(ropa);
            ocultar(computador);
            break;
        default:
            mostrar(ropa);
            mostrar(computador);
            mostrar(celular);
            break;
    }
});

function ocultar(arrayElementos){
    arrayElementos.forEach((elemento)=>{
        elemento.style.display = "none";
    })
}

function mostrar(arrayElementos){
    arrayElementos.forEach((elemento) => {
        elemento.style.display = "inline";
    })
}

