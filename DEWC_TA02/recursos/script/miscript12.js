let numeros=[];

let maximo=0;
let minimo=101;
let suma=0;
for (i=0;i<50;i++) {
    x=parseInt(Math.random()*100);
    numeros.push(x);
    suma+=x;
    if (x>maximo)
       maximo=x;
    if (x<minimo)
       minimo=x;
}
let media=suma/50;

console.log(`Array:${numeros}`);
console.log(`Maximo:${maximo}`);
console.log(`Minimo:${minimo}`);
console.log(`Media:${media}`);

