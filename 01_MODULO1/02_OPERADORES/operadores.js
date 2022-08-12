/*

CamelCase: CamelCase es un estilo de escritura que se aplica a frases o palabras compuestas. El nombre se debe a que las mayúsculas a lo largo de una palabra en CamelCase se asemejan a las jorobas de un camello. En javascript la primer letra después de la primer palabra debe ir en mayúscula.

    ejemplo: numeroUno

Operadores: Los operadores permiten manipular el valor de las variables, realizar operaciones matemáticas con sus valores y comparar diferentes variables. De esta forma, los operadores permiten a los programas realizar cálculos complejos y tomar decisiones lógicas en función de comparaciones y otros tipos de condiciones.

    Operadores de asignación: El operador de asignación es el más utilizado y el más sencillo. Este operador se utiliza para guardar un valor específico en una variable. El símbolo utilizado es = (no confundir con el operador ==)

    A la izquierda del operador, siempre debe indicarse el nombre de una variable. A la derecha del operador, se pueden indicar variables, valores, condiciones lógicas, etc:

        Let numero = 31;
        Let numero2 = 45;

        numero = numero2;

        Asignación de adición: x += y
        Asignación de resta: x -= y
        Asignación de multiplicación: x *= y
        Asignación de división: x /= y 
        Asignación de resto: x %= y
        Asignación de exponenciación: x **= y

    Operadores aritméticos: Los operadores aritméticos son operadores básicos que usamos para hacer operaciones.

        suma (+): x = 7 + 8
        resta (-): x = 9 - 2
        multiplicación (*): x = 5 * 6
        división (/): x = 20 / 4 
        resto (%): x = 25 % 4
        exponenciación (**): x = 7 ** 7
        Incremento (++) x++
        Decremento (--) x--
        Inversor de signo: -x

    Operadores lógicos: Los operadores lógicos comparan valores booleanos y devuelven respuestas booleanas. 

        Operador lógico AND (&&): Cuando solo se incluyen valores booleanos (true o false), se devuelve verdadero si las dos expresiones son verdaderas. Si una o ambas expresiones son falsas, la sentencia completa se devolverá como falsa.

            (true && true) = true
            (true && false) = false
            (false && false) = false

        Operador lógico OR (||): Cuando solo se incluyen valores booleanos (true o false), se devuelve como true si cualquiera de las dos expresiones son verdaderas. Ambas expresiones pueden ser verdaderas, pero solo se necesita una para que el resultado sea verdadero.

            (true || true) = true
            (true || false) = true
            (false || false) = false

        Operador lógico NOT (!): El operador lógico NOT no realiza ninguna comparación como lo hacen los operadores AND y OR. Además, se opera en solo un operando. Se utiliza un símbolo "!" (signo de exclamación) para representar un operador NOT.

            (!true) = false
            (!false) = true

        Comparación de igualdades:

            Igualdad débil (==): Debe tener el valor igual pero su tio de dato puede variar
            Igualdad estricta (===): Tanto el valor como el tipo de dato deben ser iguales
            Desigualdad débil (!=): Debe tener un valor distinto pero su tipo de dato puede ser igual
            Desigualdad estricta (!==): Debe tener un valor y tipo de dato distinto
            Mayor que (x > y): Debe ser mayor al otro dato comparado
            Menor que (x < y): Debe ser menor al otra dato comparado
            mayor o igual (x >= y): Debe ser mayor o igual al otro dato comparado
            Menor o igual (x <= y): Debe ser menor o igual al otro dato comparado

    document.write(): Escribe una cadena de texto dentro del cuerpo del hilo de un documento.

*/

let numero = 46;
let numero2 = 48;
let numero3 = 20;
let numero4 = 20;
let numero5 = 22;
let numero6 = 21;
let numero7 = 48;
let numero8 = 1;

// numero++;
// numero2--;

// document.write("" + numero + " " + numero2);

// numero += numero2;

// numero2 *= numero;

// alert(numero);
// alert(numero2);

// resultado = numero2 ** numero;

// document.write(resultado);

resultado = (numero2 == numero7 && (numero>numero8 || numero5<numero6) && numero3>=numero4 && !(!(numero7<=numero2)));

document.write(resultado);