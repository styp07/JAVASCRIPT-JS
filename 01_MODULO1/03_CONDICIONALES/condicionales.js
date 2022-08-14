/* 

Concatenación: Concatenar es una elegante palabra de la programación que significa: "unir". Para unir cadenas en JavaScript el símbolo de más (+), el mismo operador que usamos para sumar números, pero en este contexto hace algo diferente.

    let uno = 'soy: ';
    let dos = 'Jairo';
    let resultado = one + two;

Al combinar dos o más cadenas se creará una nueva cadena que podrás usar, asignar o almacenar. Podemos asignar las cadenas a constantes o a variables y luego concatenarlas con otras cadenas:

    resultado = '¿Como estas? ' + uno + dos + ', un gusto conocerte.'
    
También puedes usar el operador += para concatenar dos cadenas, agregando una cadena a otra:

    let vehculo = 'moto'
    vehiculo += ' azul'

Una funcionalidad especial de las plantillas literales es que aceptan la inserción de valores, variables o expresiones mediante la sintaxis ${variable}:

    const pelicula = "Alien";
    const director = "Ridley Scott"
    const favorita = 'Mi película preferida es ${pelicula} de ${director}.';


Condicionales: En cualquier lenguaje de programación, el código necesita realizar decisiones y llevar a cabo diferentes acciones acordes dependiendo de distintas entradas. Por ejemplo, en un juego, si el el numero de vidas del jugador es 0, entonces se termina el juego. En una aplicación del clima, si se observa en la mañana, se despliega una gráfica del amanecer; muestra estrellas y una luna si es de noche. 

    If ... Else: La sintaxis de if es la siguiente.

        if (condición) {
        código a ejecutar si la condición es verdadera
        } else {
        ejecuta este otro código si la condición es falsa
        }

    Se pueden repetir varios if después de un else pero siempre se deberá acabar con un solo else.

        if (condición) {
        código a ejecutar si la condición es verdadera
        } else if (condición){
        ejecuta este otro código si la condición es falsa
        }
        else{
            ejecuta si la condición sigue siendo falsa
        }

    También se pueden crear varios if unos después de otros.

        if (condición) {
        código a ejecutar si la condición es verdadera
        }
        if (condición){
        código a ejecutar si la condición es verdadera
        }


*/

let edad = prompt('Cuantos años tienes?')

let paso;

if(edad < 18){
    paso = `No puedes pasar, solo tienes ${edad} años. Eres menor de edad` 
}
else if(edad >= 90){
    paso = `Tienes ${edad} años. por tu seguridad no puedes pasar`
}
else{
    paso = `Tienes ${edad} años. Eres mayor de edad, puedes pasar`
}

document.write(paso)