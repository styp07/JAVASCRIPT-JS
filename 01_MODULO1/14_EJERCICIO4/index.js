// // Ejercicio A

// class Calculadora{
//     constructor(){
//     }
//     sumar(num1,num2){
//         return parseInt(num1) + parseInt(num2)
//     }
//     restar(num1,num2){
//         return parseInt(num1) - parseInt(num2)
//     }
//     multiplicar(num1,num2){
//         return parseInt(num1) * parseInt(num2)
//     }
//     dividir(num1,num2){
//         return parseInt(num1) / parseInt(num2)
//     }
//     potenciar(num1,num2){
//         return num1**num2 
//     }
//     raizCuadrada(num1){
//         return Math.sqrt(num1)
//     }
//     raizCubica(num1){
//         return Math.cbrt(num1)
//     }
// }

// const calculadora = new Calculadora();

// let operacion = parseInt(prompt('¿Que operación deseas realizar? 1:Suma 2:Resta 3:Multiplicación 4:División 5:Potenciación 6:Raiz Cuadrada 7: Raiz Cubica' ))

// let num1, num2;

// switch (operacion) {
//     case 1:
//         num1 = prompt('Ingresa el primer número')
//         num2 = prompt('Ingresa el segundo número')
//         alert(`El resultado de la suma es: ${calculadora.sumar(num1,num2)}`)
//         break;
//     case 2:
//         num1 = prompt('Ingresa el primer número')
//         num2 = prompt('Ingresa el segundo número')
//         alert(`El resultado de la resta es: ${calculadora.restar(num1,num2)}`)
//         break;
//     case 3:
//         num1 = prompt('Ingresa el primer número')
//         num2 = prompt('Ingresa el segundo número')
//         alert(`El resultado de la multiplicación es: ${calculadora.multiplicar(num1,num2)}`)
//         break;
//     case 4:
//         num1 = prompt('Ingresa el primer número')
//         num2 = prompt('Ingresa el segundo número')
//         alert(`El resultado de la división es: ${calculadora.dividir(num1,num2)}`)
//         break;
//     case 5:
//         num1 = prompt('Ingresa el número para potenciar')
//         num2 = prompt('Ingresa el exponente')
//         alert(`El resultado de la división es: ${calculadora.potenciar(num1,num2)}`)
//         break;
//     case 6:
//         num1 = prompt('Ingresa el número para sacar la raiz cuadrada')
//         alert(`El resultado de la división es: ${calculadora.raizCuadrada(num1)}`)
//         break;
//     case 7:
//         num1 = prompt('Ingresa el número para sacar la raiz cubica')
//         alert(`El resultado de la división es: ${calculadora.raizCubica(num1)}`)
//         break;
//     default:
//         break;
// }

// calculadora.sumar(2,5)



// ----------------------------------------------------------------------------------------------------


// Ejercicio B

const obtenerInfo = (materia) =>{
    materias = {
        fisica: ['Perez','Carlos','Maria','Karla','Cristian'],
        Quimica: ['Rodriguez','Carlos','Styp','Karla'],
        Español: ['Torres','Karla','Cristian'],
        Matematicas: ['Lopez','Luis','Doris','Cristian']
    }

    if (materias[materia] !== undefined){
        return [materias[materia],materia];
    }
    else {
        return false
    }
}

const mostrarInfo = (materia) =>{
    let info = obtenerInfo(materia);

    if (info !== false){
        let profesor = obtenerInfo(materia)[0][0];
        alumnos = obtenerInfo(materia)[0];
        alumnos.shift();
        document.write(`El profesor de <b>${info[1]}</b> es: <b style='color:red'>${profesor}</b><br>Los alumnos son: <b style='color:blue'>${alumnos}</b><br><br>`)
    }

}

mostrarInfo('fisica');
mostrarInfo('Quimica');
mostrarInfo('Español');
mostrarInfo('Matematicas');