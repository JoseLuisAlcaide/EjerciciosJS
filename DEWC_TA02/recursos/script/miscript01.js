
/*Crea un script JavaScript que solicite el nombre a un usuario y su edad al abrir el página.
Tiene que mostrar esa información a través de la consola de depuración*/
let nombre = window.prompt("Introduzca su Nombre ");//la palabra window. no es necesaria
let edad=window.prompt("Introduzca su Edad");//la palabra window. no es necesaria
console.log(nombre,edad);
let saludo=`Encantado de conocerle ${nombre} con una edad de ${edad} años`;
console.log(saludo);
window.alert(`Bienvenido ${nombre} de ${edad} años`);
