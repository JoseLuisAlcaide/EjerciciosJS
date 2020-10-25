let dia = parseInt(prompt("introduce tu dia de nacimiento "));
let mes = parseInt(prompt("introduce tu mes de nacimiento "));
let anho = parseInt(prompt("introduce tu año de nacimiento "));
/*
let N = dia+mes+anho;
let d1 = parseInt(N/1000);
let d2 = parseInt((N-d1*1000)/100);
let d3 = parseInt((N-d1*1000+d2*100)/10);
let d4 = N-d1*1000+d2*100+d3*10;

console.log(d1+d2+d3+d4);
*/

let N = new String (dia+mes+anho);
let d1=parseInt(N[0])
let d2=parseInt(N[1])
let d3=parseInt(N[2])
let d4=parseInt(N[3])
let suma=(d1+d2+d3+d4)
if (suma>=10){
    let N2 = new String (suma);
    let dd1=parseInt(N2[0]);
    let dd2=parseInt(N2[1]);
    let suma2=(dd1+dd2);
    console.log(`El número de la suerte es ${suma2}`)
    window.alert(`Su número de la suerte es ${suma2}`)
    // la siguiente linea es para comprobar la validación
    // console.log(`longitud=${N2.length}, dd1=${dd1}, dd2=${dd2}, suma2=${suma2}`)
}else {
    console.log(`El número de la suerte es ${suma}`)
    window.alert(`Su número de la suerte es ${suma}`)
    // la siguiente linea es para comprobar la validación
    // console.log(`longitud=${N.length}, d1=${d1}, d2=${d2}, d3=${d3}, d4=${d4}, suma=${suma}`)
}