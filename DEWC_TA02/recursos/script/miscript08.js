
let preguntas=parseInt(prompt(`Introduce el numero de preguntas `));
console.log(`El numero de preguntas ${preguntas} `);
let respuestas=parseFloat(prompt(`Introduce el numero de respuestas acertadas `)).toFixed(2);
console.log(`El numero de respuestas acertadas ${respuestas} `);
let operacion=((respuestas/preguntas)*100).toFixed(2);
console.log(`el porcentaje de acierto es ${operacion} %`);
if (operacion>=90 && operacion<=100){
    console.log(`La letra asignada es A`)
}
if (operacion>=80 && operacion<=89){
    console.log(`La letra asignada es B`)
}
if (operacion>=70 && operacion<=79){
    console.log(`La letra asignada es C`)
}
if (operacion>=60 && operacion<=69){
    console.log(`La letra asignada es D`)
}
else if (operacion>0 && operacion<=59){
    console.log(`La letra asignada es E`)

}