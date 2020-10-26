let dia=0
let mes=0
do{
    let dia = parseInt(prompt(`Introduzca un día `));
    if ((dia<=0) || (dia>31)){
        console.log(`El día introducido es incorrecto ${dia}`)
        window.alert(`El día introducido es incorrecto`)
    }
        else{
            break
        }
        
        
    }while ((dia<=0) || (dia>31))
    
    document.write(`${dia}`)
    do{
        let mes = parseInt(prompt(`Introduzca un mes `));
        if ((mes<=0) || (mes>12)) {
            console.log(`El mes introducido es incorrecto ${mes}`)
            window.alert(`El mes introducido es incorrecto`)
        }    
        else{ 
            break 
        }
        
} while ((mes<=0) || (mes>12))


let anho=-1
do {
    let anho =parseInt(prompt(`Introduzca un año `))
    if ((anho<0) || (anho>2020)) {
        console.log(`El año introducido es incorrecto ${anho}`)
        window.alert(`El año introducido es incorrecto`)
        
    } else {
        break
    }
    
} while ((anho<0) || (anho>2020));   

document.write(`el dia ${dia}`)


/*if ((mes===2)&&(dia=29)) {
    console.log(`Este mes no puede tener ${dia} dia `)
    window.alert(`Este mes no puede ${dia} dia`)*/