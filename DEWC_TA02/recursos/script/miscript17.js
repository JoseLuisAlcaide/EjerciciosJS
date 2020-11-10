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
let acierto=0

/*
for (let i=0 ; i<1 ; i++) {
    numAle.push(parseInt(Math.random()*99+1))
    //numAle[i]=parseInt(Math.random()*99+1)
    console.log(numAle)// Desactivar esta linea para no saber el número Aleatorio por consola
}*/

numAle=1+parseInt(Math.random()*99)
//document.write(numAle) // Activar esta linea para ver el número Aleatorio en la ventana

function pedir(cadena,numero1,numero2) {
    let dato;
    do {
        dato=parseInt(prompt("Introduzca un "+cadena))
        if (dato<numero1 || dato>numero2){
            document.write("<p>El "+cadena+" no es correcto</p>")
        }
    } while (dato<numero1 || dato>numero2);  
    return dato
}

let numUser=0
do {
    numUser=pedir("numero",1,100)

    if (numAle==numUser) {
            document.write(`<P>Enhorabuena Adivinastes el número</P>`)
    }
    intentos+=1
    console.log(`intentos=${intentos}`)
} while (numUser!=numAle)

/*
let numUser=0
do {
    let numUser;
    do {
        numUser=parseInt(prompt("Introduzca un numero "))
        if (numUser<1 || numUser>100){
            document.write("<p>El numero no es correcto</p>")
        }
    } while (numUser<1 || numUser>100);  

    if (numAle==numUser) {
            document.write(`<P>Enhorabuena Adivinastes el número</P>`)
    }
    intentos+=1
    console.log(`intentos=${intentos}`)
} while (numUser!=numAle)
*/

document.write(`<p>Intentos=${intentos}</p>`)
