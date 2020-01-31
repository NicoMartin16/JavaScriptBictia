const select = document.querySelector('#filter')
const contenedor = document.querySelector('#contenedor')
const mostrarPrimeroSelect = document.querySelector('#mostrarPrimero')
const ordenadorSelect = document.querySelector('#ordenador')

// Lista de Productos
var productos = [
  {
    imagen: '../img/celular.jpg',
    titulo: 'Xiaomi Mi',
    clase: 'mobiles',
    precio: 1200
  },
  {
    imagen: '../img/celular.jpg',
    titulo: 'Iphone',
    clase: 'mobiles',
    precio: 1300
  },
  {
    imagen: '../img/celular.jpg',
    titulo: 'Honor',
    clase: 'mobiles',
    precio: 1500
  },
  {
    imagen: '../img/pc.jpg',
    titulo: 'Regular PC',
    clase: 'computers',
    precio: 1600
  },
  {
    imagen: '../img/pc.jpg',
    titulo: 'Super PC',
    clase: 'computers',
    precio: 1800
  },
  {
    imagen: '../img/pantalon.jpg',
    titulo: 'Blue Jeans',
    clase: 'clothes',
    precio: 1600
  },
  {
    imagen: '../img/saco.jpg',
    titulo: 'Camiseta',
    clase: 'clothes',
    precio: 1380
  }
]

// Eventos
if (select) {
  select.addEventListener('change', function () {
    const value = select.value
  
    if (value === '') {
      const elementsToShow = document.querySelectorAll(`.product`);
      [].forEach.call(elementsToShow, function(element) {
        element.style.display = 'block';
      })
    } else {                                           //        mobiles
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

mostrarPrimeroSelect.addEventListener('change', function() {
  const valorSeleccionado = mostrarPrimeroSelect.value
// Obtenemos la lista de elementos
  const elementos = document.querySelectorAll(`.product.${valorSeleccionado}`)

  // Uno por uno, los volvemos a insertar dentro del contenedor pero esta vez antes del primer elemento
  elementos.forEach(function (elemento) {
    contenedor.insertBefore(elemento, contenedor.firstChild)
  })
})

ordenadorSelect.addEventListener('change', function (event) {
  // const valorSeleccione = event.target.value => Funciona igual que la linea siguiente
  const valorSeleccionado = ordenadorSelect.value
  let comparador

  switch (valorSeleccionado) {
    case 'MenorAMayor': // V a a validar el precio
      comparador = function(obj1, obj2) {
        if (obj1.precio > obj2.precio) {
          return 1 // pondrá el obj1 delante del obj2
        } else {
          return -1 // pondrá el obj1 atrás del obj2
        }
      }
      break;
    case 'MayorAMenor':
        comparador = function(obj1, obj2){
            if(obj1.precio < obj2.precio){
                return 1;
            } else {
                return -1
            }
        }
        break;
    case 'AaZ':
        comparador = function(obj1, obj2){
            if(obj1.titulo < obj2.titulo){
                return 1;
            } else {
                return -1;
            }
        }
        break;
    case 'ZaA':
        comparador = function(obj1, obj2){
            if(obj1.titulo > obj2.titulo
                ){
                return 1;
            } else {
                return -1;
            }
        }
        break;
    default:
      comparador = function(obj1, obj2) {
        return 0
      }
  }

  productos = productos.sort(comparador)
  refrescarLista()
})
// Fin - Eventos

function refrescarLista() {
  let contenido = ''
  productos.forEach(function(producto) {
    contenido += dibujarProducto(producto)
  });
  contenedor.innerHTML = contenido;
}

function dibujarProducto(producto) {
  return `<div class="col-sm-12 col-md-4 product ${producto.clase}">
    <img class="img-fluid" src="${producto.imagen}" alt="${producto.clase}" />
    <div class="d-flex justify-content-between" style="font-size: 16px;">
      <span class="text-primary">${producto.titulo}</span>
      <strong>$ ${producto.precio}</strong>
    </div>
  </div>`;
}

refrescarLista();



















var lista = [
  { nombre: 'Uvas', precio: 1200 },
  { nombre: 'Fresas', precio: 900 },
  { nombre: 'Mangos', precio: 1780 },
]

function comparador(obj1, obj2) {
  if (obj1.precio < obj2.precio) {
    return 1
  } else {
    return -1
  }
}

lista.sort(comparador)
