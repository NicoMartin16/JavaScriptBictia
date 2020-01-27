// Formas de instanciar un String

var str1 = 'Mi texto' // Más usada
var str2 = "Mi texto"
var str4 = new String('Mi texto')

// Nos permite interpolar variables
// var str3 = `Mi texto`

var str3 = `Algo nuevo más ${str2}`

var str5 = 'Algo nuevo más ' + str2

var accion = 'Comprar'
var script = "alert('saludar')"
var miClase = "button"

var boton = "<button class=\"" + miClase + "\" onclick=\"" + script + "\">" + accion + "</button>"

var nuevoBoton = `<button class="${miClase}" onclick="${script}">${accion}</button>`

// ------------

// var str = 'prueba'
// // length se usa para obtener la cantidad de caracteres de la cadena de texto
// var cuenta = str.length // 6

// var viejaPosicion = 3
// var nuevaPosicion = 5

// var nuevaPalabra = ''
// for(var i = 0; i < cuenta; i++) {
//   if (i === viejaPosicion) {
//     nuevaPalabra += str.charAt(nuevaPosicion)
//     // nuevaPalabra = nuevaPalabra + str.charAt(nuevaPosicion)
//   } else if (i === nuevaPosicion) {
//     nuevaPalabra += str.charAt(viejaPosicion)
//   } else {
//     nuevaPalabra += str.charAt(i)
//   }
// }

// console.log(`Resultado ${nuevaPalabra}`) // pruabe

//--------------------------------------------------
// FUNCIONES
//--------------------------------------------------

function cambiarLetrasDePosicion(palabra, viejaPosicion, nuevaPosicion) {
  var nuevaPalabra = ''
  var cuenta = palabra.length
  for(var i = 0; i < cuenta; i++) {
    if (i === viejaPosicion) {
      nuevaPalabra += palabra.charAt(nuevaPosicion)
      // nuevaPalabra = nuevaPalabra + str.charAt(nuevaPosicion)
    } else if (i === nuevaPosicion) {
      nuevaPalabra += palabra.charAt(viejaPosicion)
    } else {
      nuevaPalabra += palabra.charAt(i)
    }
  }

  console.log(`Resultado ${nuevaPalabra}`)
}