let dia = parseInt(prompt("introduce tu dia de nacimiento "));
let mes = parseInt(prompt("introduce tu mes de nacimiento "));
let anho = parseInt(prompt("introduce tu año de nacimiento "));

let N = dia+mes+anho;
let d1 = parseInt(N/1000);
let d2 = parseInt((N-d1*1000)/100);
let d3 = parseInt((N-d1*1000+d2*100)/10);
let d4 = N-d1*1000+d2*100+d3*10;

console.log(d1+d2+d3+d4);
