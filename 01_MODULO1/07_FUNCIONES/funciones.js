/* 

Funciones: Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida. Para usar una función, debes definirla en algún lugar del ámbito desde el que deseas llamarla.

Para declarar una función utilizamos: 

    function square(number) {
        return number * number;
    }

Esta función puede ser anónima; no tiene por qué tener un nombre. Por ejemplo, la función square se podría haber definido como:

    const square = function(number) { return number * number }
    var x = square(4) // x obtiene el valor 16


Funciones flecha:  Hay otra sintaxis muy simple y concisa para crear funciones, que a menudo es mejor que las Expresiones de funciones.
Se llama “funciones de flecha”, porque se ve así:

    let func = (arg1, arg2, ..., argN) => expression;

*/

// function square(number){
//     return number * number
// }

// document.write(square(prompt('Ingresa un número para multiplicarlo al cuadrado')))


//--------------------------------------------------------------------------------------------



// function myFunc(theObject) {
//     theObject.make = 'Toyota';
//   }

// let mycar = { make: 'Honda', model: 'Accord', year: 1998 };
// let  x, y;
// x = mycar.make;

// myFunc(mycar);
// y = mycar.make;

// console.log(x);
// console.log(y);


//--------------------------------------------------------------------------------------


// const square = function(number) {return number * number * number}
// let x = square(prompt('Que número quieres elevar al cubo'));
// document.write(x)


//------------------------------------------------------------------------------------


// const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }

// console.log(factorial(prompt('Que número quieres factorizar')));

//--------------------------------------------------------------------------------------


// function map(f, a) {
//     let result = []; // Crea un nuevo arreglo
//     let i; // Declara una variable
//     for (i = 0; i != a.length; i++)
//       result[i] = f(a[i]);
//     return result;
//   }  

// const f = function(x) {
//     return x * x * x;
//  }

// let numbers = [0, 1, 2, 5, 10];
// let cube = map(f,numbers);
// console.log(cube);


//---------------------------------------------------------------------------------------

function suma(a, b){
    return parseInt(a) + parseInt(b);
}

let resta = (a,b)=> a-b;

const multiplicacion = function(a, b){
    return x * b
}

function division(a, b){
    return a/b
}

let d;
let continuar;

do{

do{
d = prompt('1: Suma, 2: Resta, 3: Multiplicación, 4: división')
}
while(d > 4 || d < 1)

if (d == 1){
    alert(suma(prompt('Ingresa el primer número'),prompt('Ingresa el segundo número')))
}
else if (d == 2){
    alert(resta(prompt('Ingresa el primer número'),prompt('Ingresa el segundo número')))
} else if (d == 3){
    alert(multiplicacion(prompt('Ingresa el primer número'),prompt('Ingresa el segundo número')))
} else{
    alert(division(prompt('Ingresa el primer número'),prompt('Ingresa el segundo número')))
}

continuar = prompt('¿Deseas repetir? Si: 1')

}
while(continuar == 1)
