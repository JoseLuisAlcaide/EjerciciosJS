/*Escríbir un scrip que pida al usuario su peso (en Kg) y estatura (en metros), calcule el índice
de masa corporal, lo almacene en una variable y muestre por pantalla la frase "Tu indice de 
masa corporal es <imc>" donde <imc> es el índice de corporal calculado redondeado 
con dos decimales e indique si tiene riesgo de enfermedad coronaria.*/
let peso = window.prompt("Introduzca su peso en Kilogramos ");
console.log(`su peso es ${peso} Kilogramos`);
let altura = window.prompt("Introduzca su altura en Metros ");
console.log(`su altura es ${altura} Metros`)
// let imc = [];
let imc = (peso / (altura*altura)).toFixed(2);
// let imc2Decimal = imc.toFixed(2);
console.log(`su IMC es ${imc}`);
// console.log(`su IMC es ${imc2Decimal}`);
document.write(`<p>Tu índice de masa corporal es ${imc}</p>`);
// document.write(`<p>Tu índice de masa corporal es ${imc2Decimal}</p>`)
let edad = window.prompt("Introduzca se eda en años");
console.log(`Su Edad es ${edad} años`);
// lo que continua puedes utilizar estructura de control switch
if (imc<22.0 && edad<45)
    {
        console.log(`Su riesgo de enfermedad coronaria es Bajo`)
        document.write(`<p>Su riesgo de enfermedad coronaria es Bajo</p>`)
    }
if (imc>=22.0 && edad<45)
    {
        console.log(`Su riesgo de enfermedad coronaria es Medio`)
        document.write(`<p>Su riesgo de enfermedad coronaria es Medio</p>`)
    }
if (imc<22.0 && edad>=45)
    {
        console.log(`Su riesgo de enfermedad coronaria es Medio`)
        document.write(`<p>Su riesgo de enfermedad coronaria es Medio</p>`)
    }
if (imc>=22.0 && edad>=45)
    {
        console.log(`Su riesgo de enfermedad coronaria es Alto`)
        document.write(`<p>Su riesgo de enfermedad coronaria es Alto</p>`)
    }

