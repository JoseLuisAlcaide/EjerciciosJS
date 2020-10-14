/*Crea un script JavaScript que solicite el número de libros y el número de personas, y calcule
cuantos libros tocan por personas y cuantos sobran. Debe mostrar el resultado por consola de
depuración*/
let libros = window.prompt("Introduzca Número de libros ");
let personas = window.prompt("Introduzca Número de personas ");
let division = parseInt(libros / personas);
let resto = libros % personas;
console.log(`El Número de libros por personas es: ${division}`);
console.log(`El Número de libros que sobran es: ${resto}`);
window.alert(`El Número de libros por personas es: ${division} 
El Número de libros que sobran es: ${resto}`)