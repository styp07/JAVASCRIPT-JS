/*

Array: Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables. Dado que la longitud de un array puede cambiar en cualquier momento, y los datos se pueden almacenar en ubicaciones no contiguas, no hay garantía de que los arrays de JavaScript sean densos; esto depende de cómo el programador elija usarlos. En general estas características son cómodas, pero si, en su caso particular, no resultan deseables, puede considerar el uso de arrays con tipo.

Para crear un array se utiliza la siguiente sintaxis:

    let frutas =['Manzana','Pera']

Para leerlo se empieza a contar desde la posición 0

    console.log(frutas[1]) : devolverá pera y nop manzana

    Array asociativos: Un array asociativo es un array cuyos índices no son numéricos sinó cadenas de texto (claves). En JavaScript no existen realmente arrays asociativos pero podemos simularlos creando objetos y accediendo a sus propiedades.

        let carro = {
            marca: 'BMW',
            color: 'Azul',
            placas: '212ADV'
        }
*/

let manzana = [21,'rojo','12kg'];

alert(manzana[0]);

let computador ={
    procesador: 'ryzen 5',
    ram: '12GB',
    discoDuro: '1TB',
    TarjetaVideo: 'Integrada'
};

document.write(`Mi Pc tiene un procesador ${computador['procesador']}, ${computador['ram']} de ram, un dico duro de ${computador['discoDuro']} y una tarjeta de video ${computador['TarjetaVideo']}`);