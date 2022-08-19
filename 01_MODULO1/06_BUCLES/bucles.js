/*
Bucles: Los bucles ofrecen una forma rápida y sencilla de hacer algo repetidamente.     
Hay muchos diferentes tipos de bucles, pero esencialmente, todos hacen lo mismo: repiten una acción varias veces. (¡Ten en cuenta que es posible que ese número sea cero!).

Los diversos mecanismos de bucle ofrecen diferentes formas de determinar los puntos de inicio y terminación del bucle. Hay varias situaciones que son fácilmente atendidas por un tipo de bucle que por otros.

Las declaraciones para bucles proporcionadas en JavaScript son:

    Declaración while: Una declaración while ejecuta sus instrucciones siempre que una condición especificada se evalúe como true. Una instrucción while tiene la siguiente sintaxis

        while (condición){
            expresión
        }

    Si creamos un bucle infinito es muy malo ya que se queda ejecutando una acción para siempre, bloqueado el navegador.

    Declaración do while: La instrucción do...while se repite hasta que una condición especificada se evalúe como falsa. Es similar a la declaración while, pero esta se tiene que ejecutar por lo menos una vez, su sintaxis es: 

        do {
            expresión
        }
        while (condición)

    Declaración for: Un ciclo for se repite hasta que una condición especificada se evalúe como false. Una declaración for tiene el siguiente aspecto:

        for ([expresiónInicial]; [expresiónCondicional]; [expresiónDeActualización]){
            instrucción
        }

    Declaración for in: La instrucción for...in itera una variable especificada sobre todas las propiedades enumerables de un objeto. Para cada propiedad distinta, JavaScript ejecuta las instrucciones especificadas. Una declaración for...in tiene el siguiente aspecto:

        for (variable in objeto){
            instrucción
        }

    Declaración for of: La declaración for...of crea un bucle que se repite sobre objetos iterables (incluidos Array, Map, Set, objetos arguments y así sucesivamente), invocando un bucle de iteración personalizado con declaraciones que se ejecutarán para el valor de cada distinta propiedad.

        for (variable of objeto){
            instrucción
        }
        
    Declaración labaled: Un label proporciona una instrucción con un identificador que te permite hacer referencia a ella en otra parte de tu programa. Por ejemplo, puedes usar una etiqueta para identificar un bucle y luego usar las declaraciones break o continue para indicar si un programa debe interrumpir el bucle o continuar su ejecución.La sintaxis de la instrucción etiquetada es similar a la siguiente:
        label : instrucción

    Declaración break: Usa la instrucción break para terminar un bucle, switch o junto con una declaración etiquetada.

        - Cuando usas break sin una etiqueta, inmediatamente termina el while, do-while, for o switch y transfiere el control a la siguiente declaración.

        - Cuando usas break con una etiqueta, termina la declaración etiquetada especificada.

    Declaración continue: La instrucción continue se puede usar para reiniciar un while, do-while, for, o declaración label.

        - Cuando utilizas continue sin una etiqueta, finaliza la iteración actual del while, do-while o for y continúa la ejecución del bucle con la siguiente iteración. A diferencia de la instrucción break, continue no termina la ejecución del bucle por completo. En un bucle while, vuelve a la condición. En un bucle for, salta a la expresión-incremento.
        
        - Cuando usas continue con una etiqueta, se aplica a la declaración de bucle identificada con esa etiqueta.

*/ 

