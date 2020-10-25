let fahrenheit = prompt(`Introduzca la temperatura en Fahrenheit `)
let conversor=parseInt((5/9)*(fahrenheit-32))
if (conversor>=25){
    console.log(`Hoy tenemos una temperatura calida`)
    window.alert(`Hoy tenemos una temperatura calida`)
}else if (conversor<10 || conversor<0){
    console.log(`Hoy tenemos un día frio`)
    window.alert(`Hoy tenemos un día frio`)
}
    console.log(`los grados Celsius ${conversor}`)
    document.write(`<h3>los grados Celsius ${conversor}</h3>`)