/* 

Métodos string

    concat() - Junta dos o mas cadenas de texto

    starWith() - Valida si una cadena comienza con los caracteres de otra cadena y devuelve true o false
    endsWith() - Valida si una cadena termina con los caracteres de otra cadena y devuelve true o false
    includes() - Valida si una cadena esta con los caracteres de otra cadena y devuelve true o false
    indexOf() - Devuelve el indice del primer carácter de la cadena, si no existe devuelve -1
    lastIndexOf() - Devuelve el ultimo indice del primer carácter de la cadena, si no existe devuelve -1

    padStard() - Rellena una cadena al principio con caracteres deseados
    padEnd() - Rellena una cadena al final con caracteres deseados
    repeat() -Devuelve la misma cadena, pero repetida la cantidad de veces deseada

    split() - Divide la cadena como lo pidamos
    substring() - Nos retorna un pedazo de la cena que seleccionamos
    toLowerCase() - Convierte una cadena a minúscula
    toUpperCase() - Convierte una cadena a mayúscula
    toString() - Método que devuelve una cadena que representa al objeto especificado
    trim() - Elimina los espacios en blanco al principio y al final de una cadena 
    trimStart() - Elimina los espacios en blanco al comienzo de un cadena
    trimEnd() - Elimina los espacios en blanco al final de una cadena
    valueOf() - Retorna el valor primitivo de un objeto String


Métodos arrays

    pop() - Elimina el ultimo elemento de un array y lo devuelve
    shift() - Elimina el primer elemento de un array y lo devuelve
    push() - Agrega un elemento al array al final de la lista
    reverse() - Invierte el orden de los elementos de un array
    unshift() - Agrega uno o mas elementos al inicio del array, y devuelve la nueva longitud del array
    sort() - Ordena los elementos de un arreglo localmente
    splice() - Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos

    join() - Une todos los elementos de una matriz en una cadena y lo devuelve
    slice() - Devuelve una parte del array dentro de un nuevo array empezando por el inicio hasta el fin

    filter() - Crea un nuevo array con todos los elementos que cumplan la condición 
    forEach() - Ejecuta la función indicada una vez por cada elemento del array

*/

// // concat -----------------------------------------------------------
// let texto1 = 'Hola soy '
// let texto2 = 'Jairo'
// let resultado = texto1.concat(texto2)
// console.log(resultado)


// // startWith

// let texto1 = 'Hola soy Jairo y estudio Javascript'
// let texto2 = 'Hola'
// let resultado = texto1.startsWith(texto2)
// console.log(resultado);

// // endsWith

// let texto1 = 'Hola soy Jairo y estudio Javascript';
// let texto2 = 'Javascript'
// let resultado = texto1.endsWith(texto2)
// console.log(resultado)

// // includes

// let texto1 = 'Hola soy Jairo y estudio Javascript'
// let texto2 = 'Jairo'
// let resultado = texto1.includes(texto2)
// console.log(resultado)

// // indexOf

// let texto1 = 'Hola soy Jairo y estudio Javascript'
// let resultado = texto1.indexOf('estudio')
// console.log(resultado)

// // lastIndexOf

// let texto1 = 'Hola soy Jairo y estudio Javascript'
// let resultado = texto1.lastIndexOf('estudio')
// console.log(resultado)

// // padStart

// let texto1 = 'Hola'
// let resultado = texto1.padStart('20', 'xd ')
// console.log(resultado)

// // padEnd

// let texto1 = 'Hola'
// let resultado = texto1.padEnd('20', ' xd')
// console.log(resultado)

// // repeat
// let texto1 = 'Hola '
// let resultado = texto1.repeat('5')
// console.log(resultado)

// // split
// let texto1 = 'Hola,mucho,gusto'
// let resultado = texto1.split(',');
// console.log(resultado[1])

// // substring
// let texto1 = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
// let resultado = texto1.substring(2,10);
// console.log(resultado)

// // toLowerCase
// let texto1 = 'ABcDeFGHIjkLMnÑOpqRSTuVWxyZ'
// let resultado = texto1.toLowerCase();
// console.log(resultado)

// // toUpperCase
// let texto1 = 'ABcDeFGHIjkLMnÑOpqRSTuVWxyZ'
// let resultado = texto1.toUpperCase();
// console.log(resultado)

// // toString
// let texto1 = 245;
// console.log(typeof(texto1));
// let resultado = texto1.toString();
// console.log(typeof resultado);

// // trim
// let texto1 = '          xd          '
// console.log(texto1.length)
// let resultado = texto1.trim();
// console.log(resultado.length) 

// // trimStart
// let texto1 = '          xd          '
// console.log(texto1.length)
// let resultado = texto1.trimStart();
// console.log(resultado.length) 

// // trimEnd
// let texto1 = '          xd          '
// console.log(texto1.length)
// let resultado = texto1.trimEnd();
// console.log(resultado.length) 


// // valueOf
// var Student = { Name: 'Ali',  RollNo: '234' }
// console.log(Student.valueOf()) 


// --------------------------------------------------------------------------------


// // pop

// let nombres = ['Jairo','Danna', 'Paula'];
// let resultado = nombres.pop();

// console.log(resultado);
// console.log(nombres);


// // shift

// let nombres = ['Jairo','Danna', 'Paula'];
// let resultado = nombres.shift();

// console.log(resultado);
// console.log(nombres);


// // push

// let nombres = ['Jairo','Danna', 'Paula'];
// let resultado = nombres.push('Styp');

// console.log(resultado);
// console.log(nombres);


// // reverse

// let nombres = ['Jairo','Danna', 'Paula'];
// let resultado = nombres.reverse();

// console.log(resultado);
// console.log(nombres);


// // unshift

// let nombres = ['Jairo','Danna', 'Paula'];
// let resultado = nombres.unshift('Styp', 'Mile', 'Jhon');

// console.log(resultado);
// console.log(nombres);


// // sort

// let nombres = ['Perro','Gato', 'Conejo', 'Abeja', 'Leon'];
// let resultado = nombres.sort();

// console.log(resultado);
// console.log(nombres);


// // splice

// let nombres = ['Perro','Gato', 'Conejo', 'Abeja', 'Leon'];
// let resultado = nombres.splice(1,3, 'Dinosaurio');

// console.log(resultado);
// console.log(nombres);


// // join

// let nombres = ['Perro','Gato', 'Conejo', 'Abeja', 'Leon'];
// let resultado = nombres.join(' | ');

// console.log(resultado);
// console.log(nombres);


// // join

// let nombres = ['Perro','Gato', 'Conejo', 'Abeja', 'Leon'];
// let resultado = nombres.join(' | ');

// console.log(resultado);
// console.log(nombres);


// // slice

// let nombres = ['Perro','Gato', 'Conejo', 'Abeja', 'Leon'];
// let resultado = nombres.slice(1,4);

// console.log(resultado);
// console.log(nombres);


// // filter

// let nombres = ['Perro','Gato', 'Conejo', 'Abeja', 'Leon'];

// let resultado = nombres.filter(nombres => nombres.length > 4)

// document.write(resultado)


// // forEach

// let nombres = ['Perro','Gato', 'Conejo', 'Abeja', 'Leon'];

// nombres.forEach(nombres => document.write(nombres + '<br>'))