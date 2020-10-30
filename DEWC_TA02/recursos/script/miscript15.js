let dia=0;
let mes=0;
let meses=["Enero","Febrero","Marzo","Abril","Mayo","Jnio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
let ndias=0
do {
    dia=parseInt(prompt(`introduzca un dia`))
    if (dia<=0 || dia>=31){
        document.write(`<p>El dia no es correcto</p>`)
    }
}while (dia<=0 || dia>31);

do{
    mes=parseInt=(prompt(`introduzca un mes`))
    if (mes<=0 || dia>12){
        document.wraite(`<p>El mes no es correcto</p>`)
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

    

