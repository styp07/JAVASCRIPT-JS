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

// const account = {
//     number: '111540111441141',
//     amount: 100,
//     deposit (quantity){
//         this.amount = this.amount + quantity;
//     },
//     withdraw (quantity){
//         this.amount = this.amount - quantity;
//     }
// }

// console.log(account.amount)

// account.deposit(100);
// account.deposit(10);
// account.deposit(70);

// account.withdraw(100);
// account.withdraw(50);
// console.log(account.amount)


//-------------------------------------------------

// function Person(){ // ------------------------------------------------------------- > Constructor
//     this.name = '';
//     this.lastName = ''; 
//     this.age = 0;
//     this.hobbies = [];
//     this.showFullName = function(){     // Method
//      return `${this.name} ${this.lastName}`
//     }
// }

// const user1 = new Person();
// user1.name = 'Jairo';
// user1.lastName = 'Rodriguez'
// user1.age = 18;
// user1.hobbies = ['Read', 'VideoGame', 'Football'];


// const user2 = new Person();
// user2.name = 'Carlos';
// user2.lastName = 'Torres'
// user2.age = 18;
// user2.hobbies = ['VideoGame', 'Football'];


// const user3 = new Person();
// user3.name = 'Carmen';
// user3.lastName = 'Romero'
// user3.age = 18;
// user3.hobbies = ['Read', 'VideoGame', 'Football'];

// console.log(user1.showFullName());
// console.log(user2.showFullName());
// console.log(user3.showFullName());

// console.log(user3.hobbies[1])

// -------------------------------------------------------------------------------

// const string = new Object('Hello World');
// string.name = 'Special String';
// string.test = function (){
//     return this + 'this'
// }

// console.log(string.test())

// const user = {
//     name: 'Jairo', // Properties
//     lastName: 'Rodriguez', // Properties
//     age: 18, // Properties
//     showFullName(){     // Method
//      return this.name
//     }
// }

// console.log(Object.keys(user)) // ------------------------- Object


// ---------------------------------------------------------------------------------


// function Person(){ // ------------------------------------------------------------- > Constructor
//     this.name = '';
//     this.lastName = ''; 
//     this.age = 0;
//     this.hobbies = [];
//     this.showFullName = function(){     // Method
//      return `${this.name} ${this.lastName}`
//     }
// }

// const user1 = new Person(); //----------------------> new: Muy importante para crearlo en una nueva instancia.
// user1.name = 'Jairo';
// user1.lastName = 'Rodriguez'
// user1.age = 18;
// user1.hobbies = ['Read', 'VideoGame', 'Football'];


// ---------------------------------------------------------------------------------


// function Person (name, lastname, age) {  // --------------------- Como una función normal le podemos agregar parámetros.
//     this.name = name;
//     this.lastname = lastname;
//     this.age = age;
//     this.showFullName = function(){
//         return `${this.name} ${this.lastName}`
//     }
// }

// const jairo = new Person('Jairo', 'Rodriguez', 18);
// const Camilo = new Person('Camilo', 'Castillo', 12);
// const Carlos = new Person('Carlos', 'Perez', 22);
// const Carmen = new Person('Carmen', 'Salasar', 19);

// Person.prototype.greeting = function(){ // ----------------------> prototype: Nos permite modificar nuestro constructor después de haberlo creado.
//     return `Hola los saluda ${this.name} ${this.lastname}, mucho gusto`;
// }

// console.log(jairo); // Mostramos todos los atributos del objeto y no vemos el método greeting.
// console.log(jairo.greeting()); // Pero de igual manera podemos utilizar el método greeting ya que lo agregamos al objeto Person con prototype.


//------------------------------------------------------------------------------------------------------------


class Person{
    constructor (name, lastname){
        this.name = name;
        this.lastname = lastname;
    }

    greet(){
        return `Hola, soy ${this.name} ${this.lastname}`
    }
}

const user = new Person('Jairo','Rodriguez');
const user2 = new Person('Carlos','Torres');

console.log(user.greet());
console.log(user2.greet());