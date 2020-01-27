function mayusUltima(frase){
    var resultado = [];
    var invertido = [];
    var resultadoInvertido = [];
    var arregloPalabras = frase.toLowerCase().split(" ");
    arregloPalabras.forEach(palabra => {
        var tamaño = palabra.length - 1;
        palabra = palabra.substring(0,tamaño)+palabra.substr(tamaño).toUpperCase();
        resultado.push(palabra);
    });
    console.log(resultado.join(" "));
    invertido = resultado.join(" ").split(" ");
    invertido.forEach(palabra => {
        var reves = palabra.split("");
        var palabraInvertida = reves.reverse();
        resultadoInvertido.push(palabraInvertida.join(""));
    });
    console.log(resultadoInvertido.join(" "));
    contarPalabras(frase.toLowerCase());
}

function contarPalabras(frase){
    var arrayPalabras = frase.split(" ");
    for (const palabra in arrayPalabras) {
        if (arrayPalabras.hasOwnProperty(palabra)) {
            const element = arrayPalabras[palabra];
            console.log(element);
        }
    }
}