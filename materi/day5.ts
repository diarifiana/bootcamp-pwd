// OOP
// How to create an object in JS
const object1 = {};

const object2 = new Object();

// Interface hanya digunakan di typescript
interface User { // Kontrak yang digunakan untuk mengidentifikasi object
    name: string;
    greet: () => void; // void artinya tidak mereturn apapun
    greet2: () => void;
}

const user: User = {
    name: "Budi", // This line is called property
    greet: () => {
        console.log("Hello"); },
    greet2: () => {
        console.log("Hello"); },
}

// interface Person {
//     name: string;
//     age: number;
//     person?: string;
// }

const person: any = {
    name: "Adi",
    age: 20,
}

console.log(user);
console.log(person);

person.hobby = "Mancing"; // Menambahkan property pada object
console.log(person);

person["address"] = "Jogja"; // Menambahkan property pada object
console.log(person);

delete person.address; // Deleting a property
console.log(person);

console.log(person.name); // Accessing value
console.log(person["name"]); // Accessing value

console.log(Object.keys(person)); // Builtin Method from JS to access key properties

// Mutable & Immutable
/* Mutable: Merujuk pada tipe data yang bisa diubah setelah dibuat. Biasanya ini adalah objek dan array
dalam Javascript. Misalnya, kamu bisa mengubah isi array atau properti objext setelah diciptakan.

Immutable. Merujutk pada tipe data yang tidak bisa diubah setelah dibuat. Ini umumnya berlaku pada
tipe data primitif seperti string, number, boolean, null, undefined, dan symbol dalam Javascript.
Begitu nilai primitif ditetapkan, nilai tersebut tidak dapat diubah */

// Immutable
const count1: number = 4;
let count2: number = count1;

console.log(count1);
console.log(count2);

// Even if you change count2, it will not change the value of count1
count2 = 10;
console.log(count2);

// Mutable
let orang1: any = { name: "Jack" };
let orang2: any = orang1;

console.log(orang1);
console.log(orang2);

// The mutable orang1 is changed based on the modified orang2
orang2.age = 20;

console.log(orang1);
console.log(orang2);

let orang3: any = { ...orang1}; // Shallow copy untuk membatasi mutable data supaya tidak berubah
orang3.hobby = "traveling"

console.log(orang1);
console.log(orang3);

// Shallow Copy
let original1 = {
    name: "Udin",
    address: {
        city: "Jakarta",
    },
};

let copy1 = {...original1};

copy1.address.city = "Bandung";

console.log(original1);
console.log(copy1);

// Deep Copy (tidak mengubah objek pertama)
let original2 = {
    name: "Carla",
    address: {
        city: "Surakarta"
    },
};

let deepCopy = structuredClone(original2); // Structured Clone adalah fungsi built in

deepCopy.address.city = "Semarang";

console.log(original2);
console.log(deepCopy);

// Optional Chaining --> useful for frontend
let user2: any = {};

console.log(user2.address);
console.log(user2.address?.street); // Showing undefined but not error so the program wont stop

// FOR IN -> melakukan looping pada object
const person2 = {
    name: "Dino",
    age: 30,
}

// Object tidak bisa menggunakan for of
for (let key in person2) {
    console.log(key);
    console.log(person2[key]); // Tidak menggunakan (.) karena akan mencari key properties from object
};

// DESTRUCTURING ASSIGNMENT -> Mengeluarkan properti dalam object menjadi sebuah variable
// Used in frontend and backend
const animal = {
    name: "Jojo",
    age: 2,
};

const { name, age } = animal; // if using let then you can assign a new value to that variable

console.log(name);
console.log(age);

// Without destructuring 
console.log(animal.name);
console.log(animal.age);

// Desctructuring on array
const array = [10, 20];

const [a, b, c] = array;
console.log(a);
console.log(b);
console.log(c);

// Spread Operator -> digunakan untuk mereplace isi object / menggabungkan object
const objectOne = { name: "Rudi", password: "Admin123" };
const objectTwo = { email: "diana@gmail.com", name: "Diana" };

const result = {...objectOne, ...objectTwo}; // Jika dilakukan spread operator antara 2 object maka object kedua akan replace object pertama
console.log(result);

const result1 = {...objectOne, ...objectTwo, password: "Hash"};
console.log(result1);

// This Keyword -> mengakses properti lain di dalam sebuah object
const animal2 = {
    firstName: "Udin",
    lastName: "Blake",
    greet() {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    },
};

animal2.greet()

// Class: a blueprint / template used to create an object
// Class Declaration - using pascal case

class User1 {
    greeting() { // Function declaration inside class
        console.log("Hello World");        
    }

    greeting2 = () => { // Declaring method with arrow function "=>"
        console.log("Hello World");
    }
}

// Class expression
const User2 = class {
    greeting() { // Function declaration inside class
        console.log("Hello World");        
    }

    greeting2 = () => { // Declaring method with arrow function "=>"
        console.log("Hello World");
    }
}

// Run / use the class
const human = new User2(); // Creating object 1 implementing class with prefix "new"
human.greeting();

const human1 = new User2(); // Creating object 2
human1.greeting(); // calling function greeting inside class for object "human1"

// Constructor: method bawaan dari class di javascript yang hanya bisa dituliskan 1 kali dalam class
class Person {
    name: string; // this is written for typescript
    email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}

const human2 = new Person("Diah", "abcd@mail.com"); // The function is dynamic

// Access Modifier (Public & Private)
// Declaring private property
class Person1 {
    name: string; // this is written for typescript
    #email: string; // declare private property with "#"

    constructor(name: string, email: string) {
        this.name = name;
        this.#email = email;
    }
}

const human3 = new Person1("Diah", "abcd@mail.com"); // The property is dynamic
human3; // email property will not be shown

// Declaring private method
class Person3 {
    name: string; // this is written for typescript
    #email: string; // declare private property with "#"

    constructor(name: string, email: string) {
        this.name = name;
        this.#email = email;
    }

    public greeting() { // declaring public method
        return `Hello ${this.name}`;   
    }

    private showEmail() {} // declaring private method with prefix "private"
}

const human4 = new Person3("Diah", "abcd@mail.com"); // The function is dynamic

// console.log(human4.showEmail()); -> will show error 
console.log(human4.greeting());

// Getter & Setter: metode khusus yang digunakan untuk membaca dan memodifikasi nilai properti tanpa method
const orang4 = {
    firstName: "udin",
    lastName: "blake",
  
    get fullName() {
      return this.firstName + " " + this.lastName;
    },
  
    set fullName(value){
      const split = value.split(" ")
      this.firstName = split[0];
      this.lastName = split[1];
      
    },
    register(value: string) { // method
      const split = value.split(" ")
      this.firstName = split[0];
      this.lastName = split[1];
    },
  
    showDetail(){ // method
      return this.firstName + " " + this.lastName
    }
  };
  
  console.log(orang4.firstName + " " + orang4.lastName);
  console.log(orang4.fullName); // menggunakan getter
  
  orang4.fullName = "Joko Siti"; // you can assign value with "=" (dont have to implement method)
  console.log(orang4.firstName);
  console.log(orang4.lastName);
  
  orang4.register("Joko Siti") // need to call the method first, you cant assign value using "="
  console.log(orang4.firstName);
  console.log(orang4.lastName);
  console.log(orang4.showDetail()); // need to call the method first

// Inheritance (pewarisan): pewarisan dari parent class to child class
class Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    work() {
        console.log(`${this.name} is working`);
    }
}

// you have to create another class because it needs other property
class Manager {
    name: string; // redundant 
    salary: number;
    department: string;

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    work() {
        console.log(`${this.name} is working`);
    }
}

/* Masalah jika tidak menggunakan inheritance 
1. Duplikasi kode: name, salary, dan metode work() harus ditulis ulang di Employee dan Manager 
2. Sulit dikelola: jika ada perubahan pada suatu method, kita perlu mengedit di banyak tempat */

// Using inheritance

// Parent class
class Employee1 {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    work() {
        console.log(`${this.name} is working`);
    }
}

// Child class
class Manager1 extends Employee1 { // use prefix "extends" to inherit from parent class
    department: string;

    constructor(name: string, salary: number, department: string) {
        super(name, salary); // Using prefix "super" to inherit constructor
        this.department = department;
    }
}

const manager = new Manager1("Siti", 4000000, "IT");

// these can be accessed eventhough its not available in class Manager1
manager.name;
manager.salary;
manager.department;
manager.work();

// Instance of: cek sebuah object memiliki hubungan ke kelas tertentu -> backend (error)
class Animal {}
class Rabbit extends Animal {}
class Tree {}

const rabbit = new Rabbit();

console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Tree);