/*Crea un script JavaScript que solicite el valor de los dos catetos de un triángulo rectángulo y 
calcule la hipotenusa del triángulo. Ten en cuenta que
hipotenusa=raiz cuadrada (catetoA<sup>2</sup>+catetoB<sup>2</sup>).Debe mostrar el resultado por consola de
depuración.*/
let CatetoA = window.prompt("Introduce el valor del cateto A= ");
let CatetoB = window.prompt("Introduce el valor del cateto B= ");
console.log(`Cateto A= ${CatetoA}`);
console.log(`Cateto B= ${CatetoB}`);
let hipotenusa = Math.sqrt((CatetoA*CatetoA)+(CatetoB*CatetoB));
console.log(`La hipotenusa del triangualo con catetos A=${CatetoA} B=${CatetoB} es ${hipotenusa}`);
window.alert(`La hipotenusa del triangualo con catetos A=${CatetoA} B=${CatetoB} 
                        es ${hipotenusa}`);