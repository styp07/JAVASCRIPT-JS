/* 

Programación orientada a objetos: Es un estilo de programación orientada a objetos (POO), en el que la herencia se produce mediante la definición de clases de objetos, en lugar de que la herencia se produzca únicamente a través de los objetos.

    typeof = Muestra el tipo de dato

*/

// console.log(typeof 'Hello world');
// console.log(typeof 100);
// console.log(typeof true);

// console.log(typeof {});
// console.log(typeof []);


//--------------------------------------------------------


// const user = {
//     name: 'Jairo', // Properties
//     lastName: 'Rodriguez', // Properties
//     age: 18, // Properties
//     hobbies: ['Read', 'VideoGame', 'Football'],
//     addres: {
//         city: 'City city',
//         Country: 'Colombia'
//     }
//     showFullName(){     // Method
//      return 'Ryan Rey'
//     }
// }

// console.log(user)


// -----------------------------------------

const account = {
    number: '111540111441141',
    amount: 100,
    deposit (quantity){
        this.amount = this.amount + quantity;
    },
    withdraw (quantity){
        this.amount = this.amount - quantity;
    }
}

console.log(account.amount)

account.deposit(100);
account.deposit(10);
account.deposit(70);

account.withdraw(100);
account.withdraw(50);
console.log(account.amount)