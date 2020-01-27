// Arreglos

var array = [0, 1, 5, 6];
var array = ['a', 'c', 'y'];
var arrayMixto = [0, 1, 'b', {}, function(){}];

var arrayNumber = [0,1,5,6];
//Devuelve la cantidad de items del array en el momento
arrayNumber.length
// Agrega un nuevo elemento
arrayNumber.push(8);
arrayNumber.length //5
// Ejercicio
// Crear una función que utilice strings y arreglos para solucionar los siguientes problemas
var entrada = "Las frutas son muy ricas";

// 1. Reto
// La ultima letra de cada palabra debe ir en mayúsculas y el resto en minusculas

// resultado
var salida = "laS frutaS son muY ricasS";
// 2. Reto
// Que todas las parabres esten al reves

// 3. Contar las veces que se repite cada palabra

function cambiarUltima(entrada){
    var arregloPalabras = entrada.split(" ");
    console.log(arregloPalabras);
    arregloPalabras.forEach(palabra => {
        var palabraMin = palabra.toLowerCase();
        var caracteres = palabraMin.split('');
        caracteres.forEach((caracter) => {
            caracteres.indexOf(caracteres.length - 1).toUpperCase();
        })
        
    })
    
}
