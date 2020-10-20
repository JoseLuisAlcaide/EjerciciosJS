/* Realizar un script que al introducir un número entero positivo que representa ek número de
 segundos que estamos confinado por una pandemia, nos convierta ese número a semanas,
 dias, horas, minutos,  segundos. Debe mostrar un mensaje tal como A semanas,
 B días, C horas, D minutos, E segundos.*/

 let tiempo=0
 do {
   tiempo = parseInt(prompt(`Introduce el número de segundos que llevas confinado`))
   console.log(`El valor introducido es ${tiempo}`)
   if (tiempo<=0)
        {
            console.log("El número introducido no es un número valido")
            window.alert("El número introducido no es un número valido")

        }
    } while (tiempo<=0);


    let semanas=parseInt(tiempo/604800)
    let segundosSemana=parseInt(tiempo%604800)
    let dias=parseInt(segundosSemana/86400)
    let segundosDias=parseInt(segundosSemana%86400)
    let horas=parseInt(segundosDias/3600)
    let segundosHoras=parseInt(segundosDias%3600)
    let minutos=parseInt(segundosHoras/60)
    let segundosMinutos=parseInt(segundosHoras%60)
    let segundos=(segundosMinutos/1)
    // let segundos=parseInt(minutos%60)
    console.log(`${semanas} Semanas ${dias} Dias ${horas} Horas ${minutos} Minutos ${segundos} Segundos `)
   if (semanas>=1) {
     console.log(`${semanas} Semanas`)  
   } 
   if (dias>=1) {
     console.log(`${dias} Dias`)  
   } 
   if (horas>=1) {
     console.log(`${horas} Horas`)  
   } 
   if (minutos>=1) {
     console.log(`${minutos} Minutos`)  
   } 
   if (segundos>=1) {
     console.log(`${segundos} Segundos`)  
   } 

// let minutos=parseInt(horas%3600)
// let segundos=parseInt(minutos%60)

// let dias=parseInt(tiempo/86400)
/* }if (parseInt(tiempo%604800)|| tiempo<604800 && tiempo>=86400) {
    
    
}*/

/*let segundos=parseInt(tiempo/1);
if (segundos<60){
    console.log(`segundos ${segundos}`)
}else if ((segundos>=60) && (segundos<3600)) {
    minutos=parseInt(segundos/60)
    segundos=(segundos%60)
    console.log(` Minutos${minutos} Segundos ${segundos}`)
}else if ((segundos>=3600) && (segundos<86400))
    horas=parseInt(segundos/3600)
    minutos=parseInt(segundos%3600)*/

/*let minutos=parseInt(tiempo/60);
let horas=parseInt(tiempo/3600);
let dias=parseInt(tiempo/86400);
let semanas=parseInt(tiempo/604800)
if semanas>=1 {
    console.log(`Semanas ${semanas} Dias ${dias} Horas ${horas} Minutos ${minutos} Segundos ${segundos}`)
    
}*/