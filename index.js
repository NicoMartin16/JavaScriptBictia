const select = document.querySelector('#filter');

if (select) {
  select.addEventListener('change', function () {
    const value = select.value
    if (value === '') {
      const elementsToShow = document.querySelectorAll(`.product`);
      [].forEach.call(elementsToShow, function(element) {
        element.style.display = 'block';
      })
    } else {
      
      const elementsToShow = document.querySelectorAll(`.product.${value}`);
      [].forEach.call(elementsToShow, function(element) {
        element.style.display = 'block';
      })
  
      const elementsToHide = document.querySelectorAll(`.product:not(.${value})`);
      [].forEach.call(elementsToHide, function(element) {
        element.style.display = 'none';
      })
    }
  })
}

const contenedor = document.querySelector('#contenedor');

const sorter = document.querySelector('#sorter');
sorter.addEventListener('change', function(){
  const valorSeleccionado = sorter.value;
      const elementos = document.querySelectorAll(`.product.${valorSeleccionado}`);
      elementos.forEach((elemento) => {
        contenedor.insertBefore(elemento, contenedor.firstChild);
      });
})

// --- Va a pintar la lista de elementos

var productos = [
  {
    imagen: 'img/celular.jpg',
    titulo: 'Xiaomi Mi',
    clase: 'mobiles',
    precio: 1200
  },
  {
    imagen: 'img/celular.jpg',
    titulo: 'Iphone',
    clase: 'mobiles',
    precio: 1300
  },
  {
    imagen: 'img/celular.jpg',
    titulo: 'Honor',
    clase: 'mobiles',
    precio: 1500
  },
  {
    imagen: 'img/pc.jpg',
    titulo: 'PC',
    clase: 'computers',
    precio: 1600
  }
]

// const contenedor = document.querySelector('.container')

// let contenido
// productos.forEach(function(producto) {
//   contenido += `<div class="col-sm-12 col-md-4 product ${producto.clase}">
//     <img class="img-fluid" src="${producto.imagen}" alt="${producto.clase}" />
//     <span>${producto.titulo}</span>
//   </div>`
// })

// contenedor.innerHTML = contenido

// Crea un nuevo elemento HTML
// Estructura document.createElement('nombre de la tiqueta')
// var boton = document.createElement('button') 
// boton.id = 'mi-boton'
// boton.className = 'mi-clase-boton'
// boton.onclick = function() {
//   console.log('hola')
// }
// boton.innerText = 'Haz Click'

/*
 Los elementos que ya han sido creados, no se duplican si usamos más de una función. Solo cambian su posición dentro del contenedor
*/

// Insertamos un elemento antes de otro elemento dentro de un contenedor
// contenedor.insertBefore(boton, contenedor.firstChild) 

// Inserta un elemento al final dentro de un contenedor
// contenedor.appendChild(boton) 

// Taller

/*
Agreguemos un nuevo menú desplegable que nos permita ordenar los items por categoria.

Para esto usemos las funciones del document "appendChild" y "insertBefore"
*/


