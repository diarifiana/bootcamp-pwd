// .ts to create file typescript

// versi JS 
// const message = "Hello World";

// versi TS
// static typing : to define data type can be assigned to variable (usually used in golang)
const message2: string | number = "Hello World"; // | means or

// String Build in Method
const nama : string = "BudiB";
const message : string = "Hello World";
const nama1 : string = "Joko";
const nama2 : string = "Jake"; // 0,1,2,3
const nama3 : string = "ABC"

console.log(nama.toLowerCase());
console.log(nama.toUpperCase());
console.log(nama.replace("B","F")); // only replacing the first word B
console.log(nama.replaceAll("B","F"));
console.log(nama.split(""));
console.log(message.split("")); // split to array
console.log(message.split(" ")); // split per word
console.log(nama1.concat(nama2).concat(nama3));
console.log(nama1 + nama2 + nama3);
console.log(nama2.slice(0, 2)); // 2 is slicer

// Template literals / Template String

const nama4 : string = "Carlie";
console.log("Welcome" + nama4);

const message3 : string = `Welcome ${nama4}`; // template string using backtick (`)
console.log(message3);

// Number built in Method -- convert string to number using Number() and ParseInt()
const angka : string = "5000"
console.log(Number(angka));
console.log(parseInt(angka));
console.log(typeof Number(angka)); // to know the data type using typeof Number()
console.log(typeof parseInt(angka));
console.log(typeof(angka));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// String conversion
const angka1: number = 5
console.log(String(angka1));
console.log(angka1.toString());

// Boolean conversion 
// (selain angka 0 hasilnya true)
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(-1));
// empty string would be false
console.log(Boolean(""));
console.log(Boolean("A"));

// date data type
const now : Date = new Date();
console.log(now);

// get method
console.log(now.getFullYear());
console.log(now.getMonth()); // Javascript start counting month from 0
console.log(now.getDate());
console.log(now.getTime());

// set method
now.setDate(10);
now.setMonth(1);
now.setFullYear(2020);
console.log(now);

// basic operator
// % modulo (sisa bagi, untuk cek ganjil genap)
// ** pangkat

console.log(1 + 1);
console.log(2 - 1);
console.log(2 * 4);
console.log(4 / 2);
console.log(9 % 2);
console.log(3 ** 2);
console.log(10 / 5 ** 4);

// modify in place (n = n + 2)
let n: number = 2;
n += 2;
console.log(n);

// increment & decrement
let counter: number = 1;
counter++
console.log(counter);
counter--
console.log(counter);

// postfix & prefix
let counter2: number = 2;
console.log(counter2++); // postfix
console.log(++counter2); // prefix

// comparison operator (boolean true / false)
// <, >, >=, bisa digunakan untuk string (menghitung panjang string)
console.log("test" >= "test");
console.log("test" > "test");

// Math
// Math Ceil : membulatkan angka ke atas
console.log(Math.ceil(4,5));

// Math Floor : membulatkan angka ke bawah
console.log(Math.floor(4,3));

// Math Round : membulatkan angka ke bilangan bulat terdekat
console.log(Math.round(4,7));
console.log(Math.round(5,8));

// Math Max : mengembalikan angka terbesar dari sekumpulan angka
console.log(Math.max(1, 2, 3));

// Math Min : mengembalikan angka terkecil dari sekumpulan angka
console.log(Math.min(1,2,3));

// Math Abs : menghilangkan tanda negatif
console.log(Math.abs(-10));

// Math Random : menghasilkan angka acak antara 0 dan 1
console.log(Math.random());







