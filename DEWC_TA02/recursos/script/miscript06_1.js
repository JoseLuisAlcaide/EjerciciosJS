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
   

  