// for(let contador = 1; contador < 10; contador++){
//     //Instrucciones
//     console.log('Primero', contador);
// }

// let contador = 0;
// for(; contador < 10; contador++){
//     console.log(contador);
// }

// var diasDeLaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
// for(let i = 0; i < 7; i++){
//     console.log(diasDeLaSemana[i]);
// }
var listaDeAmigos = ['Juan', 'Marta', 'Miguel', 'Sara', 'John', 'Viviana', 'Amparo', 'Pepe', 'Kevin', 'Braian'];
// for(let i = 0; i < listaDeAmigos.length; i++){
//     console.log(listaDeAmigos[i]);
// }

// listaDeAmigos.forEach(function(amigo) {
//     console.log(amigo);
// })

// for (let nombre of listaDeAmigos) {
//     console.log(nombre);
// }

// for(let i in listaDeAmigos) {
//     console.log(listaDeAmigos[i]);
// }

/*While*/
// while(condicion){
//     // Instrucciones
// }

// let contador = 0;

// while (contador < 10){
//     console.log(contador);
//     contador++
// }

// let peso = 120; //kg
// let meta = 70; // kg
// let contadorDias = 0;

// while(peso > meta){
//     hacerEjercicio();
//     contadorDias++
// }

// function hacerEjercicio() {
//     peso = peso - Math.ceil(Math.random() *2)
// }

// console.log(`cantidad de días de ejercicio: ${contadorDias}`);

//Taller

// Calcula la fecha del septimo domingo del año 2020

let numeroDomingos = 0;
let fecha = new Date(2019, 12, 0);//Diciembre 31 de 2019
while(numeroDomingos < 7){
    fecha.setDate(fecha.getDate() + 1);
    if(fecha.getDay() === 0){
        numeroDomingos++;
    }
}

console.log(fecha);


