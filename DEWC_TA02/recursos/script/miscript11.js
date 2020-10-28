let dia=0
let mes=0
let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
let nombreMes=""
let anho=-1
let bisiesto=""
let ndias=""
do {
    dia = parseInt(prompt(`Introduzca un día `));
    if ((dia<=0) || (dia>31)) {
        console.log(`El día introducido es incorrecto ${dia}`)
        window.alert(`El día introducido es incorrecto`)
    }
} while ((dia<=0) || (dia>31))

do {
    mes = parseInt(prompt(`Introduzca un mes `));
    if ((mes<=0) || (mes>12)) {
        console.log(`El mes introducido es incorrecto ${mes}`)
        window.alert(`El mes introducido es incorrecto`)
    }           
} while ((mes<=0) || (mes>12))
mes--

do {
    anho =parseInt(prompt(`Introduzca un año `))
    if ((anho<0) || (anho>2020)) {
        console.log(`El año introducido es incorrecto ${anho}`)
        window.alert(`El año introducido es incorrecto`)
    }
} while ((anho<0) || (anho>2020));   

bisiesto=((anho%4==0) || (anho%400==0) && (anho%100!=0))
ndias=30
switch (mes) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11: ndias=31; break;
    default: ndias=30
}
    // console.log("El mes "+meses[mes]+" tiene "+ndias)
    
    if ((mes==1) && dia<=28 && !bisiesto) {
        ndias=28
        console.log(`El mes ${meses[mes]} tiene ${ndias}`)
        document.write(`<h3>El mes ${meses[mes]} tiene ${ndias}</h3>`)
        document.write(`<p>${dia}, ${meses[mes]}, ${anho}</p>`)
                            
    }else if ((mes==1) && dia<=29 && bisiesto) {
        ndias=29
        console.log(`El mes ${meses[mes]} tiene ${ndias} porque es Bisiesto`)
        document.write(`<h3>El mes ${meses[mes]} tiene ${ndias} porque es Bisiesto</h3>`)
        document.write(`<p>${dia}, ${meses[mes]}, ${anho}</p>`)
    }else if ((dia<=30) && (mes==1)){
        console.log(`error1`)
        document.write(`<h3>La fecha es incorrecta</h3>`)
    }else if ((dia==31) && (mes==(3,5,8,10))){
        console.log(`error2`)
        document.write(`<h3>La fecha es incorrecta</h3>`)
    }
    else{
        console.log(`El mes ${meses[mes]} tiene ${ndias}`)
        document.write(`<h3>El mes ${meses[mes]} tiene ${ndias}</h3>`)
        document.write(`<p>${dia}, ${meses[mes]}, ${anho}</p>`)
    }