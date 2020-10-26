let dia=0
let resultadoDia=("")
let mes=0
let resltadoMes=("")
let nombreMes=("")
let anho=-1
let resultadoAnho=("")
do{
    let dia = parseInt(prompt(`Introduzca un día `));
    if ((dia<=0) || (dia>31)){
        console.log(`El día introducido es incorrecto ${dia}`)
        window.alert(`El día introducido es incorrecto`)
    
    } else{
            resultadoDia=dia
            break
        }
        
        
    }while ((dia<=0) || (dia>31))
    
    
    document.write(`resultado del dia=${resultadoDia}`)
    do{
        let mes = parseInt(prompt(`Introduzca un mes `));
        if ((mes<=0) || (mes>12)) {
            console.log(`El mes introducido es incorrecto ${mes}`)
            window.alert(`El mes introducido es incorrecto`)
        }    
        else{
            resultadoMes=mes 
            break 
        }
        
} while ((mes<=0) || (mes>12))



do {
    let anho =parseInt(prompt(`Introduzca un año `))
    if ((anho<0) || (anho>2020)) {
        console.log(`El año introducido es incorrecto ${anho}`)
        window.alert(`El año introducido es incorrecto`)
        
    } else {
        resultadoAnho=anho
        break
    }
    
} while ((anho<0) || (anho>2020));   

//document.write(`el dia ${dia}`)

resultadoMes===1?nombreMes=("Enero"):("")
resultadoMes===2?nombreMes=("Febrero"):("")
resultadoMes===3?nombreMes=("Marzo"):("continue")
resultadoMes===4?nombreMes=("Abril"):("continue")
resultadoMes===5?nombreMes=("Mayo"):("continue")
resultadoMes===6?nombreMes=("Junio"):("continue")
resultadoMes===7?nombreMes=("Julio"):("continue")
resultadoMes===8?nombreMes=("Agosto"):("continue")
resultadoMes===9?nombreMes=("Septiembre"):("continue")
resultadoMes===10?nombreMes=("Octubre"):("continue")
resultadoMes===11?nombreMes=("Noviembre"):("continue")
resultadoMes===12?nombreMes=("Diciembre"):("continue")

if ((resultadoMes===2)&&(resultadoDia>=29)) {
    console.log(`Este mes no puede tener ${resultadoDia} dia `)
    window.alert(`Este mes no puede tener ${resultadoDia} dia`)
    document.write(`${nombreMes} no puede tener ${resultadoDia} dia`)
}