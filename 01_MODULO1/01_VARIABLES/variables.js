/*
Variable: Una variable es un la reservación de espacio en memoria para almacenar un dato.

    numero = '25'

Scope: El ámbito (Scope) se refiere a los lugares dentro de nuestro código en donde las variables están disponibles para su uso. Cuando una variable tiene un ámbito global, significa que está disponible en cualquier lugar de tu programa.

¿Como podemos crear una variable?

    var --> Al usar var, las variables pueden ser reasignadas y utilizadas en cualquier parte del código, con un alcance global.
    let --> Let tiene alcance de bloque y permite remplazar sus valores posteriormente.
    const --> Const al igual que Let tiene un alcance de bloque, pero esta no permite cambiar sus valores posteriormente.

Tipos de datos en javascript

    Tipos primitivos: Los valores primitivos son inmutables, no pueden ser cambiados. Los tipos primitivos no tienen métodos ni propiedades, aunque en los string, numbers y booleans podemos acceder a ellas gracias a los wrappers objects que veremos enseguida. Los tipos de datos primitivos son:

        String: Un string es una cadena de caracteres. A cada carácter de una cadena se le asigna una posición, empezando por el primer carácter en la posición 0, el segundo en la posición 1 y así sucesivamente.

            let nombre = 'Jairo';

        Number: JavaScript solo tiene un tipo de datos numérico. No hay un tipo específico para los números enteros y de coma flotante.

            numero1 = 45

        Boolean: representa una entidad lógica y puede tener dos valores: true, y false.

            let mayoredad = true;

        Null: Tiene como valor null

        Undefined: Una variable a la cual no se le haya asignado valor tiene el valor undefined.

            let compra;

alert: alert es una función del lenguaje de programación JavaScript que devuelve un cuadro de alerta. ​ Se usa para advertir al usuario del navegador de que algo está mal o de que algo debería mejorar, así como para dar información sobre algo concreto, por ejemplo, que se debe introducir un texto en vez de un número.

Prompt: prompt() es un método del objeto Window de JavaScript que se usa para mostrar un cuadro de diálogo con un mensaje que solicita al usuario que ingrese algún texto o información.

*/

let nombre = prompt('Por favor ingresa tu nombre')

alert('Hola ' + nombre + ', espero te encuentres bien')

let edad = prompt(nombre + ' dinos tu edad')

const mayoredad = 18

let entrada;

if(edad >= mayoredad){
    entrada = true
    alert('tu edad es ' + entrada + ', puedes pasar')
}

else{
    entrada = false
    alert('tu edad es ' + entrada + ', no puedes pasar')
}
