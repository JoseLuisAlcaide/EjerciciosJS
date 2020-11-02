/*Adivina el número. Crea un script Javascript que escoja aleatoriamente un número entero
entre 1 y 100. Al abrir la página web debe ir solicitando números entre 1 y 100 hasta que el
usuario acierte el número. Debes tener en cuenta que si el número introducido no está entre
1 y 100 se debe mostrar una ventana de alerta avisando de los límites, y continuar con el
juego. Al finalizar el juego se indica mediante una ventana de alerta el número de intentos,
no teniendo en cuenta intentos en los que se introduce un dato incorrecto.*/
//et numUser=parseInt(prompt(`Introduzca el numero `));
let numAle=[]
let error=0
let intentos=0

for (let i=0 ; i<1 ; i++) {
    numAle.push(parseInt(Math.random()*99+1))
    //numAle[i]=parseInt(Math.random()*99+1)
    console.log(numAle)// Desactivar esta linea para no saber el número Aleatorio por consola
    
}
document.write(numAle) // Activar esta linea para ver el número Aleatorio en la ventana
let numUser=0
do {
    numUser=parseInt(prompt(`Introduzca el numero `))
    if ((numUser<=0) || (numUser>100)){
        error+=1
        console.log(`El numero introducido es incorrecto`)
        window.alert(`El numero introducido es incorrecto`)
        console.log(`error=${error}`)
    }
    if (numAle==numUser){
            document.write(`<P>Enhorabuena Adivinastes el número</P>`)
    }
    if(numUser!=numAle) {
            intentos+=1
            console.log(`intentos=${intentos}`)
        }
}while ((numUser<=0) || (numUser>100) ||(numUser!=numAle))


let intentosTotal=(intentos-error+1)
console.log(intentos)
document.write(`<p>Intentos=${intentosTotal}</p>`)
