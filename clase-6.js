var hoy = new Date();
var segundaFecha = new Date('1995-09-12');

function diferenciaDias(fecha1, fecha2, tiempo) {

    var diferencia = Math.abs(fecha1 - fecha2);
    switch (tiempo) {

        case 'años':
            return  Math.floor(diferencia / 1000 / 60 / 60 / 24 / 365) ;
        case 'meses':
            return  Math.floor(diferencia / 1000 / 60 / 60 / 24 / 30) ;    
        case 'dias':
            return Math.floor(diferencia / 1000 / 60 / 60 / 24);
        case 'horas':
            return Math.floor(diferencia / 1000 / 60 / 60);
        case 'minutos':
            return Math.floor(diferencia / 1000 / 60);
        default:
            return diferencia;
    }
};

var anos = diferenciaDias(segundaFecha, hoy,'años');
console.log(`La diferencia en años es de ${anos}`); 

var meses = diferenciaDias(hoy, segundaFecha, 'meses');
console.log(`la diferencia en meses es de ${meses}`);

var dias = diferenciaDias(hoy, segundaFecha, 'dias');
console.log(`la diferencia en dias es de ${dias}`);

var horas = diferenciaDias(hoy, segundaFecha, 'horas');
console.log(`la diferencia en horas es de ${horas}`);

var minutos = diferenciaDias(hoy, segundaFecha, 'minutos');
console.log(`la diferencia en minutos es de ${minutos}`);

var mili = diferenciaDias(hoy, segundaFecha);
console.log(`la diferencia en milisegundos es de ${mili}`);

 