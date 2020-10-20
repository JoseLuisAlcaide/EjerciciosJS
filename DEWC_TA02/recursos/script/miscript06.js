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

let segundos = tiempo
if (segundos>=60)
        {
            let minutos = parseInt(segundos/60)
            segundos= segundos%60
            console.log(`lleva confinado ${minutos} minutos ${segundos} segundos`)
        }
let minutos = parseInt(tiempo/60)
if (minutos>=60)
        {
            let horas=parseInt(minutos/60)
            minutos= (minutos % 60)
            console.log(`lleva confinado ${segundos} segundos ${minutos} minutos ${horas} horas`)
        }
let horas = parseInt(tiempo/3600)
if (horas>=24)
        {
            let dias=parseInt(horas/24)
            horas= (horas % 24)
            console.log(`lleva confinado ${segundos} segundos ${minutos} minutos ${horas} horas ${dias} días`)
        }
let dias = parseInt (tiempo/86400)
if (dias=>7)
        {
            let semanas=parseInt(dias/7)
            dias= (dias % 7)
            console.log(`lleva confinado ${segundos} segundos ${minutos} minutos ${horas} horas ${dias} días ${semanas} semanas`)
            window.alert(`lleva confinado A ${semanas}Semanas, B ${dias}Dias, C ${horas}Horas, D ${minutos}Minutos, E ${segundos}Segundos. `)
            document.write(`<p>Lleva confinado:
            <ul>
             <li>A: ${semanas}Semanas</li>
             <li>B: ${dias}Dias</li>
             <li>C:${horas}Horas</li>
             <li>D:${minutos}Minutos</li>
             <li>E:${segundos}Segundos</li>
            </ul>
             </p> `)
        
        }
