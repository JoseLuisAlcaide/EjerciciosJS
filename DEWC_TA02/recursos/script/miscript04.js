/*Crea un script JavaScript que solicite tres números enteros al usuario y que le indique
cual es el mayor.*/
a =parseInt(prompt("Introduzca el primer Número: "));
b =parseInt(prompt("Introduzca el segundo Número: "));
c =parseInt(prompt("Introduzca el tercer Número: "));
console.log(`el primer número a= ${a}`);
console.log(`el segundo número b= ${b}`);
console.log(`el tercero número c= ${c}`);
if (a==b && a==c)
    {
        console.log(`El Número a= ${a}
        El número b= ${b}
        El Número c= ${c}
        es el mismo numero`)

        window.alert(`El Número a= ${a}
        El número b= ${b}
        El Número c= ${c}
        es el mismo numero`)
    }
if (a>b && a>c && b>c && b!=c)
    {
        console.log(`El Número a= ${a} 
        El número b= ${b}
        El Número c= ${c}
        El orden = ${a}>${b}>${c}`)

        window.alert(`El Número a= ${a} 
        El número b= ${b}
        El Número c= ${c}
        El orden = ${a}>${b}>${c}`)
    }
if (c>b && b>a && c>a && b!=a)
    {
        console.log(`El Número a= ${a} 
        El número b= ${b}
        El Número c= ${c}
        El orden = ${c}>${b}>${a}`)

        window.alert(`El Número a= ${a} 
        El número b= ${b}
        El Número c= ${c}
        El orden = ${c}>${b}>${a}`)
    }
if (a>b && a>c && c>b &&b!=c)
    {
        console.log(`El Número a= ${a} 
        El número b= ${b}
        El Número c= ${c}
        El orden = ${a}>${c}>${b}`)

        window.alert(`El Número a= ${a} 
        El número b= ${b}
        El Número c= ${c}
        El orden = ${a}>${c}>${b}`)
    }
if (c>a && c>b && a>b && a!=b) 
    {
        console.log(`El Número a= ${a} 
        El número b= ${b}
        El Número c= ${c}
        El orden = ${c}>${a}>${b}`)

        window.alert(`El Número a= ${a} 
        El número b= ${b}
        El Número c= ${c}
        El orden = ${c}>${a}>${b}`)
    }
if (b>a && b>c && a>c && a!=c)
    {
        console.log(`El Número a= ${a} 
        El número b= ${b}
        El Número c= ${c}
        El orden = ${b}>${a}>${c}`)

        window.alert(`El Número a= ${a} 
        El número b= ${b}
        El Número c= ${c}
        El orden = ${b}>${a}>${c}`)
    }
if (b>c && c>a && b>c && c!=a)
    {
        console.log(`El Número a= ${a} 
        El número b= ${b}
        El Número c= ${c}
        El orden = ${b}>${c}>${a}`)

        window.alert(`El Número a= ${a} 
        El número b= ${b}
        El Número c= ${c}
        El orden = ${b}>${c}>${a}`)
    }
if (a>b && b==c)
    {
        console.log(`El Número a= ${a} 
        El número b= ${b}
        El Número c= ${c}
        El orden = ${a}>${b} y ${c} ; b=${b} y c=${c} son el mismo Número`)

        window.alert(`El Número a= ${a} 
        El número b= ${b}
        El Número c= ${c}
        El orden = ${a}>${b} y ${c} ; b=${b} y c=${c} son el mismo Número`)
    }
if (b>a && a==c)
    {
        console.log(`El Número a= ${a} 
        El número b= ${b}
        El Número c= ${c}
        El orden = ${b}>${a} y ${c} ; a=${a} y c=${c} son el mismo Número`)

        window.alert(`El Número a= ${a} 
        El número b= ${b}
        El Número c= ${c}
        El orden = ${b}>${a} y ${c} ; a=${a} y c=${c} son el mismo Número`)
    }
if (c>a && a==b)
    {
        console.log(`El Número a= ${a} 
        El número b= ${b}
        El Número c= ${c}
        El orden = ${c}>${a} y ${b} ; a=${a} y b=${b} son el mismo Número`)

        window.alert(`El Número a= ${a} 
        El número b= ${b}
        El Número c= ${c}
        El orden = ${c}>${a} y ${b} ; a=${a} y b=${b} son el mismo Número`)
    }
if (a<b && b==c)
    {
        console.log(`El Número a= ${a} 
        El número b= ${b}
        El Número c= ${c}
        El orden = ${b} y ${c}> ${a} ; b=${b} y c=${c} son el mismo Número`)

        window.alert(`El Número a= ${a} 
        El número b= ${b}
        El Número c= ${c}
        El orden = ${b} y ${c}> ${a} ; b=${b} y c=${c} son el mismo Número`)
    }
if (b<a && a==c)
    {
        console.log(`El Número a= ${a} 
        El número b= ${b}
        El Número c= ${c}
        El orden = ${a} y ${c}>${b} ; a=${a} y c=${c} son el mismo Número`)
        
        window.alert(`El Número a= ${a} 
        El número b= ${b}
        El Número c= ${c}
        El orden = ${a} y ${c}>${b} ; a=${a} y c=${c} son el mismo Número`)
    }
if (c<a && a==b)
    {
        console.log(`El Número a= ${a} 
        El número b= ${b}
        El Número c= ${c}
        El orden = ${a} y ${b}>${c} ; a=${a} y b=${b} son el mismo Número`)
    
        window.alert(`El Número a= ${a} 
        El número b= ${b}
        El Número c= ${c}
        El orden = ${a} y ${b}>${c} ; a=${a} y b=${b} son el mismo Número`)
    }
