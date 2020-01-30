// var objeto = {
//     clave: 'El valor',
//     id: 1,
//     function: function(){

//     }
// }

function crearPersona(nombre, apellido, edad){
    const persona = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        toString: function(){
            return `${this.nombre} ${this.apellido}`
        },
        whoIsThis: function(){
            console.log(this);
        }
    };
    return persona
}


function cambiarNombre(persona, nuevoNombre){
    // persona.nombre = nuevoNombre;
    return {
        ...persona,
        nombre: nuevoNombre
    }
}

// var persona = {
//     nombre: 'Nicolas',
//     apellido: 'Martin',
//     edad: 22,
// }