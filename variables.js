// UpperCamelCase
// LoCameLCase
// Nombres relevantes
// No se usan guones
// Palabras reservadas
// _ $


// Declaracion con VarDate

// Numerico

var age = 25;
var height = 1.8;

// String
var name = 'Hugo';
var colorFav = 'fa67ff';

// awa = 2;

var water = '2';
var meassurement = 'L';

//Null
var ola = null;

//Undefined
var adios;

//NaN
var salu2 = NaN;

// Arrays
var michiNames = ['Margarito', 'Kitty patitas suaves', 'Gato con botas'];
var persona1 = ['Hugo', 'Morales', 24, true, 'Mexico', 'Cafe', 'Ingeniero', 'Peliculas de Terror'];
var persona2 = ['Sergio', 'Gil', 27, true, 'México', 'Whisky', 'Ingeniero'];
var persona3 = ['Rafael', 'Encinas', 28, true, 'Mexico', 'Cafe', 'Los angeles de evangelion'];



// console.log(isNaN(salu2));
// console.log(typeof(op1));
console.log(persona2[7]);

// Para saber la longitud de los arrays podemos utilizar .length
console.log(persona1[7][persona2.length - 1]);


// Diferencias entre VAR LET CONST

// let
// const

//Hoisting es la forma en que se ejecutan las instrucciones
// console.log(greeting);
// var greeting = 'hola';

// //Hoisting con let y cons have que falle la compilación

// let goodbye = 'bye';
// // console.log (goodbye);

// const goodnight = 'nighty nighty';
// console.log(goodnight);


// El scope para var es solo de forma local o global 

// function myFunction() {
//     var greeting = 'hola';
// }

// console.log(greeting);

// ligero problema con var

// var greeting = 'hola';
// var count = 4;

// if (count > 3) {
//     var greeting = 'hola de nuez';
// }

// console.log(greeting);


// scope con let

// let greeting = 'hola';
// let count = 4;

// if (count > 3) {
//     let greeting = 'hola de nuez';
//     if (count == 4) {
//         let greeting = 'hola en diferente bloque';
//     }
//     console.log(greeting)
// }

// console.log(greeting);


// redeclaracion y modificacion

// let saludo = 'hola';
// saludo = 'hello';

// const

// re Declaracion

// const saludo = 'hola';
// const saludo = 'hello';

// modificacion

// const saludo = 'hola';
// saludo = 'hello';

const indefinido = undefined;
console.log(indefinido);