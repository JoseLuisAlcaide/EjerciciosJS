let dia=0
let mes=0
let meses=["Enero","Febrero","Marzo","Abril"]
let nombreMes=""
let anho=-1

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
    console.log(`El mes ${meses[mes]} tiene ${ndias}`)
