/*Escribir un script en Javascript que imprima en la consola de depuración la suma de los
números enteros entre 1 y n, donde n es un dato solicitado al usuario. Comprobar si esa
suma coincide con n*(n+1)/2*/
let numUser=parseInt(prompt(`introduzca un numero `))
let suma=0;
for(i=0 ; i<=numUser ; i++){
    suma+=i;
    console.log(`esta es la suma de los elementos ${suma}`)
}
document.write(`<p>La suma de todos los elementos es ${suma}</p>`)

let resultado2=numUser*(numUser+1)/2;
document.write(`<p>La segunda forma es numUser*(numUser+1)/2=${resultado2}</p>`)