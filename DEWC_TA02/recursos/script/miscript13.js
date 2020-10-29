const numero1=[];
const  user_Text=[a,e,i,o,u,a,e,i,o,]; 
let elemento=(a);
let caja1= user_Text.indexOf(elemento);
while (caja1!= -1){
    numero1.push(caja1);
    caja1=user_Text.indexOf(elemento,caja1 +1)
}
console.log(numero1)
console.log(caja1)
// const  user_Text=prompt[`Introduzca un texto`];
// user_Text.indexOf(1);
// user_Text.indexOf(A,E,I,O,U)
// let contador=0
// for(contador=0 ; contador<user_Text.length ; contador++)

// const letra_A=user_Text("A")
//user_Text.slicer([" "])
// console.log(user_Text)
// console.log(user_Text.indexOf[user_Text])

