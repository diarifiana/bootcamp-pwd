// IF Statement
// Syntax: if(condition){ code block }

const age: number = 20;
if (age >= 17) {
    console.log("Anda bisa buat KTP");  
}

// Else Statement
const age1: number = 10;
if (age1 >= 17) {
    console.log("Anda bisa buat KTP");  
} else {
    console.log("Anda belum bisa buat KTP");  
}

// Else If Statement
const grade: string = "A"

if (grade === "A") {
    console.log("Nilai bagus");
} else if (grade === "B") {
    console.log("Nilai lumayan");
} else if (grade === "C") {
    console.log("Nilai buruk");
} else {
    console.log("Nilai tidak diketahui");
}

// Switch Case
const hari: string = "senin";
switch(hari) {
    case "senin":
        console.log("Hari Senin");
        break; // menggunakan break supaya tidak memunculkan case berikutnya
    case "selasa":
        console.log("Hari Selasa");
        break;
    case "rabu":
        console.log("Hari Rabu");
        break;
    default:
        console.log("Hari tidak ditemukan");
        break;
}

// Opt + Arrow (switching between lines)

// Logical Operator (&& - and, || - or, ! - not)

// && (and) : harus keduanya bernilai true 
const umur: number = 19;
const punyaSim: boolean = true;

if (umur >= 17 && punyaSim === true) { // alt syntax: if (umur >= 17 && punyaSIM)
    console.log("Boleh bawa kendaraan");
} else {
    console.log("Belum boleh bawa kendaraan");
}

const umurA: number = 20;
const punyaA: boolean = false;


// || (or) : one of the condition is true
if (umurA >= 17 || punyaA) {
    console.log("Boleh membawa A");
} else {
    console.log("Tidak boleh membawa A");
}

const car: string = "bmw";

if (car === "mercy" || car === "bmw") {
    console.log("Mobil Jerman");
} else {
    console.log("Mobil Jepang");
}

// ! (not)
const isSunny: boolean = false;
const isRaining: boolean = !isSunny;

console.log(isSunny);
console.log(isRaining);

// Ternary Operation - Shortcut untuk if else condition (only with one condition)
// syntax: condition ? true : false
const str: string = "javascript";

// using IF
if (str === "javascript"){
    console.log("javascript");    
} else {
    console.log("not javascript");
}

// using Ternary Operation
console.log(str === "javascript" ? "javascript" : "not javascript");

// Ternaty Operation for multiple condition (not recommended)
console.log(
    str === "javascript" 
    ? "javascript" 
    : str === "typescript" 
    ? "typescript" 
    : "others");

// NaN : not a number
console.log(parseInt("aaaaa")); // NaN (cannot be converted to number)

// Loop statement (rangkaian instruksi yang berulang kali)
// Loop type: for loop, while loop, do while loop

/* For loop (mempunyai 2 statement)
 Statement 1: Menginisialisasi variable dari looping itu sendiri
 Statement 2: Mendefine kondisi dari looping
 Statement 3: Kode yang dieksekusi diakhir setiap iterasi

 Syntax:
    for(statement1;statement2;statement3) {
        code block yang akan diulang
        }

Looping while statement2 is true
Used when we know a certain number is required
*/

for(let i = 0; i < 5; i++) {
    console.log("Hello world");
    for(let j = 0; j < 5; j++) { // This called nested loop
        console.log("Hi there");
    }    
} 

// While loop : looping while the condition is true
// Used when you dont know how many times you should do the process
let i: number = 5;
while (i < 10) {
    console.log("Hello World");
    i++;
}

// Do While : do a situation first, then check condition
let count: number = 1;

do {
    console.log("ini iterasi ke: " + count);
    count++;
} while (count <= 5);

// Game suit and shooting (using while loop)

// Break : untuk menghentikan loop (bisa juga diganti dengan return)
let sum: number = 0;
while(true) {
    console.log("Sum: " + sum);  
    if(sum >=5) {
        break;
    }
sum++; // increment diletakkan di akhir (readable and total sum is correct)
}


// Continue : melakukan skip pada looping
for (let i = 0; i < 5; i++) {
    if (i === 2 || i === 3) // to skip more than 1 use or ||
        continue;

    console.log(i);
}