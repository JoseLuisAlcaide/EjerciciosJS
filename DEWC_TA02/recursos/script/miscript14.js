let numeros=[]

for (let i=0 ; i<20 ; i++) {
   //numeros.push(parseInt(Math.random()*10))
   numeros[i]=parseInt(Math.random()*10)
}

let suma=0
let producto=0;
for (i=0 ; i<numeros.length ; i++) {
    if (numeros[i]%2==0) {
       //suma=suma+numeros[i]
       suma+=numeros[i]
    } else {
       // producto=producto*numeros[i]
       producto*=numeros[i];
    }
}

/*
let suma=0
let producto=0;
let numero;
for (let i=1 ; i<=20 ; i++) {
    numero=parseInt(Math.random()*10)
    if (numero%2==0) {
       //suma=suma+numero
       suma+=numero
    } else {
       // producto=producto*numero
       producto*=numero;
    }
}
*/
console.log(``)

