/*Crea un script JavaScript que solicite tres números enteros al usuario y que le indique
cual es el mayor.*/
a=parseInt(prompt("Introduzca el primer Número: "));
b=parseInt(prompt("Introduzca el segundo Número: "));
c=parseInt(prompt("Introduzca el tercer Número: "));
console.log(`el primer número a= ${a}`);
console.log(`el segundo número b= ${b}`);
console.log(`el tercero número c= ${c}`);

let mayor;
//mayor=Math.max(a,b,c)

if (a>b && a>c) {
    mayor = a;
} else if (a<b && b>c){
    mayor = b;
} else {
    mayor=c;
}
console.log(`El número Mayor es ${mayor}`)

//De esta forma no funciona 
/*let mayor=a;
if (b>mayor){
    mayor = b;
}
if (c>mayor){
    mayor = c;
}
console.log(`El número Mayor es ${mayor}`)
*/