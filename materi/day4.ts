// Array -- menggunakan square bracket []
// Cara membuat array
// Cara 1
const myArray: string[] = ["A","B","C"]; // terhitung dari index 0
console.log(myArray[2])

// Cara 2: const arrayName = new Array();
const arrayOne: string[] = new Array("A","B","C")

// Javascript is different from Golang -> must be defined how many data will be stored
// Array biasanya digunakan untuk tipe data yang sama, namun bisa juga digunakan untuk storing berbagai macam data secara bersamaan 
// Array terbatas pada urutan index

// Modify index within Array
myArray[3] = "E";
console.log(myArray);

// Array of Object: data yang tidak terikat pada urutan
const students: { name: string; email: string}[] = [ // {} menentukan property yang ada pada array of objects
    { name: "Budi", email: "budi@gmail.com" }, // name: key, email: key -- key digunakan untuk mengambil data
    { name: "Joko", email: "joko@gmail.com" },
    { name: "Siti", email: "siti@gmail.com" }, ]

// Array bisa menggunakan const karena data yang diubah hanya yg ada di dalam array

// Interface --> digunakan untuk mendeklarasikan property data array (must be pascalcase (huruf pertama capital >< camelcase), singular)
interface StudentInt {
    name: string;
    email: string; } 

const studentClassA: StudentInt[] = [ // {} menentukan property yang ada pada array of objects
    { name: "Budi", email: "budi@gmail.com" }, // name: key, email: key -- key digunakan untuk mengambil data
    { name: "Joko", email: "joko@gmail.com" },
    { name: "Siti", email: "siti@gmail.com" }, ]

// Menggunakan "type" untuk alternatif dari interface (type and interface can be combined)
type Student = {
    name: string;
    email: string;
    hobby?: string; // ? --> marking the key is optional to be filled
    address?: {
        street: string;
        city: string; } 
    };

// Alternatif menggunakan "type"
type Address = {
    street: string;
    City: string; };

type typeForStudent = {
    name: string;
    email: string;
    hobby?: string;
    address?: Address; }

const studentsOfClassB: Student[] = [ // {} menentukan property yang ada pada array of objects
    { name: "Budi", email: "budi@gmail.com", hobby:"" }, // name: key, email: key -- key digunakan untuk mengambil data
    { name: "Joko", email: "joko@gmail.com" },
    { name: "Siti", email: "siti@gmail.com" }, ]

// camel case = helloWorld, pascalcase = HelloWorld, snake case = hello_world

// For Of -- cant be used to access / modify the index
const fruits: string[] = ["Apple","Banana","Orange"];

for (const fruit of fruits) {
    console.log(fruit);
}

// Exercise for of
// Hitung jumlah semua bilangan dalam array menggunakan for of
// ex input = [1,2,3,4,5,6] -> 21

const num: number[] = [1,2,3,4,5,6]
let result: number = 0;

for (const number of num) {
    result += number }

console.log(result);

// Function
// Function declaration
// Syntax: function namaFunction(parameter){ logic };
const myNumber: number = 6;
const userNumber: number = 5;

function square(myNumber: number, userNumber?: number) { // num: number --> parameter
return myNumber * myNumber; } // return to make function display the result (can only return one time, the function will stop)

console.log(square(6));

// Contoh
function mySquare(myNumber: number, userNumber?: number): number { // :number --> to display what type of data output on the function
    const hasil = myNumber * userNumber; // return to make function display the result (can only return 1, the function will stop)
    return hasil; }

console.log(mySquare(2, 10)); // 2--> variable myNumber, 10 --> variable userNumber

// Function expression -- tulis variable dan tulis function tanpa nama (anonymous function)
const squareAB = function(angka: number) {
    return angka * angka; }

const perkalian = squareAB(4)
console.log(perkalian);

// Function Scope
// Variable yang didefine dalam function hanya bisa diakses dalam function tsb

function greeting() {
    const hello = "Hello";
    console.log(hello); } // tidak muncul jika tidak ada pemanggilan function

greeting(); // pemanggilan function 
console.log(); // undefined since the variable is inside function

// Parameter & Argument
// Parameter = variable yang mewakili value dari argument yang dimasukan
// Argument = value yang dimasukkan saat pemanggilan function

function greetingA(namaA: string) { // Inside () is a parameter
    const hellow = "Hello";
    return hellow + " " + namaA; }

console.log(greetingA("AAA")); // "AAA" is argument

// Default Parameter
function multiply(a: number, b:number = 2) { // b:number = 2 --> is a default parameter, kalau tidak diisi akan bernilai 2 (default)
    return a * b;}

console.log(multiply (1,2));

// Rest Parameter
// Mewakili sisa argument ke dalam 1 variable parameter

function myFunction(a: number, b: number, ...manyMoreArgs:number[]) { //manyMoreArgs --> namanya bebas
    console.log(a);
    console.log(b);
    console.log(manyMoreArgs); }

myFunction(1,2,3,4,5,6)

// Nested Function: Fungsi yang ada di dalam fungsi
// inner function: bisa akses parameter dari outer function
// outer function: tidak bisa akses parameter dari inner function

function getMessage(firstName: string) { // outer function
    function sayHello() { // inner function
        return "Hello " + firstName + ","; }

    function welcomeMessage() { // inner function
        return "Welcome to Purwadhika"; }

    return sayHello() + " " + welcomeMessage();}

console.log(getMessage("Budi"));

// Closure: inner function selalu mempunyai akses ke variabel dari outer function bahkan setelah function tsb di return

// outer function
function greetingAB(name: string) {
    const defaultMessage: string = "Hello";

// inner function
        return function() {
            return defaultMessage + " " + name;}; 
        }; 

const displayMessage = greetingAB("Jack");
console.log(displayMessage());

// Recursive: function yang memanggil dirinya sendiri

function CountDown(num: number) {
    console.log(num);
    const nextNumber = num - 1;
        if (nextNumber > 0) { 
            CountDown(nextNumber); }
        }

CountDown(10);

// Arrow function: shortcut untuk menuliskan function expression
// contoh function expression

const square2 = function (angka: number) {
    return angka * angka; };

// syntax : () => {}
// contoh diubah ke arrow function
const square3 = (number: number) => {
    return number * number; };

// jika terdapat 1 line saja bisa disingkat
const square4 = (number:number) => number * number;

// Array Built-in Method
// Join --> menggabungkan value yang ada dalam array ke dalam bentuk string
const words: string [] = ["hello","world"];
console.log(words.join(" "));

// POP --> menghilangkan value paling akhir dalam array
const words2: string[] = ["test","hello","thanks"];
console.log(words2);
words2.pop();
console.log(words2);

// SHIFT --> menghilangkan value paling depan dalam array
words2.shift();
console.log(words2);

// UNSHIFT --> menambahkan value paling depan dalam array
words2.unshift("Example");
console.log(words2);

// PUSH --> menambahkan value paling akhir dalam array
words2.push("Last");
console.log(words2);

// CONCAT --> menggabungkan beberapa array menjadi 1 array
const words3: string[] = ["Hello"];
const words4: string[] = ["Hahaha"];
console.log(words2.concat(words3).concat(words4));

// Spread operator --> copy seluruh index array dan paste di array target
const mergeArr = [...words2, ...words3, ...words4];
console.log(mergeArr);