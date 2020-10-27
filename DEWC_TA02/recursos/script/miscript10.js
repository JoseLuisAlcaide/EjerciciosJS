//let fahrenheit = prompt(`Introduzca la temperatura en Fahrenheit `)

let txt_temp=document.getElementById("temperatura");
let btn_calc=document.getElementById("btn-calcular");
let txt_resultado=document.getElementById("resultado");

btn_calc.addEventListener("click",convertir)

function convertir() {
  let fahrenheit=parseFloat(txt_temp.value);
  let conversor=parseInt((5/9)*(fahrenheit-32))
  txt_resultado.innerHTML="<h2>La temperatura en grados Celsius es "+conversor+"</h2>"
}

//console.log(btn_calc);

/*
let conversor=parseInt((5/9)*(fahrenheit-32))
if (conversor>=25){
    console.log(`Hoy tenemos una temperatura calida`)
    window.alert(`Hoy tenemos una temperatura calida`)
} else if (conversor<10 || conversor<0){
    console.log(`Hoy tenemos un día frio`)
    window.alert(`Hoy tenemos un día frio`)
}
    console.log(`los grados Celsius ${conversor}`)
    document.write(`<h3>los grados Celsius ${conversor}</h3>`)
*/