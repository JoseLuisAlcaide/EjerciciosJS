const numEuler=Math.exp(1);
const mumE=Math.E;
//console.log(numEuler)
//document.write(numEuler)
/*
do{
    numE

}while (e<0.0001)
*/

function factorial(num) {
   let resultado=1
   for (let i=1;i<=num;i++)
      resultado*=i
   return resultado
}

let e=0
let i=0
do {
  termino=1/factorial(i)
  console.log(termino)
  e+=termino;
  i++
} while (termino>0.0001)

console.log(e);
