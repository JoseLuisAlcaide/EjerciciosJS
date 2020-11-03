/*Crea un script Javascript que determine cuantas vocales mayúsculas hay en una cadena
introducida por el usuario y muestre el resultado por consola.*/

let nLetras=0
let letras=["A","E","I","O","U"]
let user_Text=prompt(`Introduzca un texto`);//El usuario introduce un texto

function contar(cadena,letra) {
    let posicion=cadena.indexOf(letra);
    let cuenta=0
    while (posicion != -1) {
        cuenta++
        posicion=cadena.indexOf(letra, posicion+1)
    }
    return cuenta
}

for (i=0;i<letras.length;i++)
   nLetras+=contar(user_Text,letras[i])
//console.log("El numero de veces que aparece la letra A es "+contar("A"))

console.log(nLetras)
document.write(`<p style="color:green">${user_Text}</p>`)
document.write(`<p>La suma de todas la vocales Mayúsculas es ${nLetras}</p>`)