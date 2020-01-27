/*
Constructors Date
new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)
*/

// var alumno = 'Juan'
// var horaDeLlegada = 11
// var horaLimiteDeLlegada = 10
// var trajoExcusa = true


// if (las condiciones a evaluar) { 
//   Nuestro codigo, o sentencias a evaluar
// }

/*
Operaciones Booleanas
OR => ||
false OR true => true
true OR true => true
false OR false => false

0 + 1 si el resultado es mayor a cero 0, entonces es verdadero

AND => &&
false AND true => false
false AND false => false
true AND true => true

0 * 1 si el resultado es mayor a cero 0, entonces es verdadero

NOT => !
!false => true
!true => false
*/

// ¿llego tarde? O ¿al menos trajo excusa?
// true && !true => true && false
// if ( horaDeLlegada > horaLimiteDeLlegada ) {

//   if (trabajoExcusa) {
//     console.log(`${alumno} NO tiene una falla!`)
//   } else {
//     console.log(`${alumno} tiene una falla!`)
//   }

// } else if (horaDeLlegada === horaLimiteDeLlegada) {

//   console.log(`${alumno} casi se queda afuera!`)

// } else if ( horaDeLlegada <= 8 ) {

//   console.log(`${alumno} llegó muy temprano!`)

// } else {
//   console.log(`${alumno} llegó a tiempo!`)
// }


/*
Vamos a calcular el valor de una cantidad X de galones de gasolina, dadas las siguientes condiciones:

1. El valor normal del galon de gasolina es de 1000 pesos

2. Los días Lunes el valor aumenta en un 10%

3. Los días miercoles el valor se reduce en 100 pesos

4. Los días viernes de 3 pm a 6 pm el valor se reduce en 150 pesos a cada galon

5. Los fines de semana el valor aumenta en 20%

6. El resto de días vamos a reducir el valor de cada galon en 80 pesos solo si la cantidad de galones es par

OBJETIVO: Crear una función para determinar el valor de la gasolina dados la cantidad de galones de gasolina, el nombre del día de la semana y una hora de llegada

*/

function calcularValorGasolina(cantidadGalones, nombreDia, horaDeLlegada) {
  var valorGalon = 1000

  switch (nombreDia.toLowerCase()) {
    case 'lunes':
      valorGalon = valorGalon + (valorGalon * 10 / 100) // 1100
      break
    case 'miercoles':
      valorGalon = valorGalon - 100 // 100
      break
    case 'viernes':
      if (horaDeLlegada >= 15 && horaDeLlegada <= 18) {
        valorGalon = valorGalon - 150 // 850
      }
      break
    case 'sabado':
    case 'domingo':
      valorGalon = valorGalon + (valorGalon * 20 / 100) // 1200
      break
    default:
      if (cantidadGalones%2 === 0) {
        valorGalon = valorGalon - 80
      }
  }

  return valorGalon * cantidadGalones
}

// var valorGasolina = calcularValorGasolina(1.5, 'Lunes', 12)
// console.log('El valor de la gasolina es de $ ' + valorGasolina)

var inputCantidadGalones = document.querySelector('#cantidadGalones')
var inputDiaSemana = document.querySelector('#diaSemana')
var inputHoraDeLlegada = document.querySelector('#horaDeLlegada')

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  
  if (esValido()) {
    var valorGasolina = calcularValorGasolina(
        parseFloat(inputCantidadGalones.value),
        inputDiaSemana.value,
        parseInt(inputHoraDeLlegada.value)
      )

    console.log('El valor de la gasolina es de $ ' + valorGasolina)

    var salida = document.querySelector('#salida')
    salida.innerHTML = `<h1>El valor de la gasolina es de <span style="color: red;">$ ${valorGasolina}</span></h1>`
  } else {
    console.error('Error: ', 'Por favor valide los parametros del formulario!!!')
  }
})

function esValido() {
  var cantidadGalones = parseFloat(inputCantidadGalones.value)
  if (cantidadGalones < 0) {
    return false
  }

  return true
}

var borrarTodo = function() {
  var salida = document.querySelector('#salida')
  salida.innerHTML = ''
}

document.querySelector('#botonBorrar').addEventListener('click', function (event) {
  borrarTodo()
  alert('Todo ha sido borrado!')
})