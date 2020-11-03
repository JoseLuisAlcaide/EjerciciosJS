let dia=0;
let mes=0;
let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
let ndias=0

do {
    dia=parseInt(prompt(`introduzca un dia`))
    if (dia<=0 || dia>31){
        document.write(`<p>El dia no es correcto</p>`)
    }
} while (dia<=0 || dia>31);

/*
function perdir(cadena,numero1,numero2) {
    let dato;
    do {
        dato=parseInt(prompt("Introduzca un "+cadena))
        if (dato<numero1 || dato>numero2){
            document.write("<p>El "+cadena+" no es correcto</p>")
        }
    } while (dato<numero1 || dato>numero2);  
    return dato
}

dia=perdir("dia",1,31)
mes=pedir("mes",1,12)
numero=pedir("numero",1,100)
*/

do{
    mes=parseInt=(prompt(`introduzca un mes`))
    if (mes<=0 || mes>12){
        document.write(`<p>El mes no es correcto</p>`)
    }
}while (mes<=0 || mes>12)
mes--

ndias=30
switch (mes) {
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:ndias=31; break;
        default:ndias=30
}

if ((dia>=21) && (mes==2 || mes==3 || mes==4)){
    document.write(`<p>${dia}, ${meses[mes]}</p>`)
    document.write(`<p>es primavera</p>`)
}
if ((dia<=20) && (mes==3 || mes==4 || mes==5)){
    document.write(`<p>${dia}, ${meses[mes]}</p>`)
    document.write(`<p>es primavera</p>`)
}
if ((dia>=21) && (mes==5 || mes==6 || mes==7)){
    document.write(`<p>${dia}, ${meses[mes]}</p>`)
    document.write(`<p>es verano</p>`)
}
if ((dia<=20) && (mes==6 || mes==7 || mes==8)){
    document.write(`<p>${dia}, ${meses[mes]}</p>`)
    document.write(`<p>es verano</p>`)
}
if ((dia>=21) && (mes==8 || mes==9 || mes==10)){
    document.write(`<p>${dia}, ${meses[mes]}</p>`)
    document.write(`<p>es otoño</p>`)
}
if ((dia<=20) && (mes==9 || mes==10 || mes==11)){
    document.write(`<p>${dia}, ${meses[mes]}</p>`)
    document.write(`<p>es otoño</p>`)
}
if ((dia>=21) && (mes==11|| mes==0 || mes==1)){
    document.write(`<p>${dia}, ${meses[mes]}</p>`)
    document.write(`<p>es invierno</p>`)
}
if ((dia<=20) && (mes==0|| mes==1 || mes==2)){
    document.write(`<p>${dia}, ${meses[mes]}</p>`)
    document.write(`<p>es invierno</p>`)
}
    

