/*Crea un script Javascript que determine cuantas vocales mayúsculas hay en una cadena
introducida por el usuario y muestre el resultado por consola.*/
let cuenta=0
let cuenta2=0
let cuenta3=0
let cuenta4=0
let cuenta5=0

let user_Text=prompt(`Introduzca un texto`);//El usuario introduce un texto

let posicion = user_Text.indexOf("A");
let posicion2 = user_Text.indexOf("E");
let posicion3 = user_Text.indexOf("I");
let posicion4 = user_Text.indexOf("O");
let posicion5 = user_Text.indexOf("U");

while (posicion != -1) {
    cuenta++
    posicion=user_Text.indexOf("A", posicion+1)
}
while (posicion2 != -1) {
    cuenta2++
    posicion2=user_Text.indexOf("E", posicion2+1)
}
while (posicion3 != -1) {
    cuenta3++
    posicion3=user_Text.indexOf("I", posicion3+1)
}
while (posicion4 != -1) {
    cuenta4++
    posicion4=user_Text.indexOf("O", posicion4+1)
}
while (posicion5 != -1) {
    cuenta5++
    posicion5=user_Text.indexOf("U", posicion5+1)
}
let total = cuenta+cuenta2+cuenta3+cuenta4+cuenta5;
    console.log(total)
    document.write(`<p style="color:green">${user_Text}</p>`)
    document.write(`<p>La suma de todas la vocales Mayúsculas es ${total}</p>`)