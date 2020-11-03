let numUser=0;
// for(let i=0 ; i<=100 ; i++)
do {
numUser=parseInt(prompt(`Intruduzca un numero entero entre 1 y 100`))
if ((numUser<=0) || (numUser>100)) {
    window.alert(`el número introducido es ${numUser}; número erroneo vuelva a introducir un numero entre 1 y 100`)
    console.log(numUser)
    }
}while ((numUser<=0) || (numUser>100))

do {
if (numUser%2==0) {
    numUser=numUser/2;
    console.log(`${numUser} `);
    document.write(` ${numUser} ->`)
} else {
    numUser=numUser*3+1;
    console.log(`${numUser} `);
    document.write(` ${numUser} ->`)
}
} while (numUser !=1)