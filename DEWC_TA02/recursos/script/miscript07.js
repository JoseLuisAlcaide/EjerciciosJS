

let numero=(1)
let mayor=(0)
/*
while (numero!=0){
    let numero=parseInt(prompt(`Introduzca un numero `))
    console.log(` el numero introducido es ${numero}`)
    if (mayor<numero){
        mayor=numero
        //la siguiente linea es para comprobar que esta comparando los numeros
        // console.log(`el numero mayor introducido es ${mayor}`)
    }
    
    if (numero==0){
        console.log(`el numero mayor introducido es ${mayor}`)
        break
    }  
    
}
*/
//Otra forma de hacer el escript
do{
    let numero=parseInt(prompt(`Introduzca un numero `))
    console.log(` el numero introducido es ${numero}`)
    
    
    if (mayor<numero){
        mayor=numero
        //la siguiente linea es para comprobar que esta comparando los numeros
        // console.log(`el numero mayor introducido es ${mayor}`)
    }
    
    if (numero==0){
        console.log(`el numero mayor introducido es ${mayor}`)
        break
    }
} while (numero!=0)