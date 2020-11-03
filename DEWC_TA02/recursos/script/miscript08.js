
let preguntas=parseInt(prompt(`Introduce el numero de preguntas `));
console.log(`El numero de preguntas ${preguntas} `);
let respuestas=parseFloat(prompt(`Introduce el numero de respuestas acertadas `)).toFixed(2);
console.log(`El numero de respuestas acertadas ${respuestas} `);
let operacion=((respuestas/preguntas)*100).toFixed(2);
console.log(`el porcentaje de acierto es ${operacion} %`);
if (operacion>=90){
    console.log(`La letra asignada es A`)
} else if (operacion>=80){
    console.log(`La letra asignada es B`)
} else if (operacion>=70){
    console.log(`La letra asignada es C`)
} else if (operacion>=60){
    console.log(`La letra asignada es D`)
} else if (operacion>0){
    console.log(`La letra asignada es E`)
}
