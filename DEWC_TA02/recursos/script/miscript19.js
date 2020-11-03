
let propina=0
const factura=[124,48,268]
for ( i=0 ; i<factura.length ; i++)

if (factura[i]<50){
propina=((factura[i]*20)/100).toFixed(2)
console.log(`la factura ${factura[i]} y la propina es ${propina}`)
}
else if ((factura[i]>50)&&(factura[i]<200)){
propina=((factura[i]*15)/100).toFixed(2)
console.log(`la factura ${factura[i]} y la propina es ${propina}`)
}
else if (factura[i]>200){
 propina=((factura[i]*10)/100).toFixed(2)
console.log(`la factura ${factura[i]} y la propina es ${propina}`)
}

