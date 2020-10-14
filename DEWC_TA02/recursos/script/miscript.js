
/*Crea un script JavaScript que solicite el nombre a un usuario y su edad al abrir el página.
Tiene que mostrar esa información a través de la consola de depuración*/
let nombre = window.prompt("Introduzca su nombre ");//la palabra window. no es necesaria
let apellido= window.prompt("Introduzca su apellido");//la palabra window. no es necesaria
console.log(nombre,apellido);
let saludo=(`Encantado de conocerle ${nombre} ${apellido}`);
console.log(saludo);
window.alert(`Bienvenido ${nombre} ${apellido}`);
