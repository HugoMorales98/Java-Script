// Calcular el cuadrado de un numero

// function calcSquared(num){
//     return num * num;
// }

// console.log(calcSquared(78))

// // Convertir de F a C

// function calcCelcius(fahr) {
//     let celc = (fahr -32) * 5 / 9;
//     return celc
// }

// console.log(calcCelcius(100));

// Refactorización de función anterior

function calcCelcius2(fahr) {
    return `Los grados F ${fahr} a C son: ${(fahr - 32) * 5 / 9}`;
}


function calcCecius3(fahr) {
    return "Los grados F" + fahr + "a C son: " + (fahr - 32) * 5 / 9;
}

// console.log(calcCelcius3(255))
console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());


function calcSquared2(num) {
    const res = num * num;
    console.log(res);
    calcSquared2(res);
}

function recursiveString(x) {
    const res = x + x;
    console.log(res);
    recursiveString(res);
}

// recursiveData('x');

// Funciones flecha:

const recursive = () => {
    console.log(x)
    recursive(x + x);
}

// const suma = (a,b) => {
//     return a+b;
// }

const suma = (a,b) => a + b;

console.log(suma(1,2));

const squared = x => x * x;

console.log(squared(49))