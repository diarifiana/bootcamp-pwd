/* Write a code to display the multiplication table of a given integer.
Example : Number → 9
Output :
■ 9x 1
■ 9x 2 ■...
■ 9 x 10
*/

// const num: number = 9;

// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} x ${i}`); // for adding calculation ${num*i}
// }

/* Write a code to check whether a string is a palindrome or not.
Example : ‘madam’ → palindrome
*/

// const str: string = "madam";
// let reverse: string = "";
// let isPalindrom = "";

// for (let i = str.length-1; i >= 0; i--) {
//     reverse += str[i];
// }
//     if (reverse == str) { 
//         isPalindrom = "Palindrom";
//     } else {
//         isPalindrom = "Not a palindrom";
//     }

// console.log(isPalindrom);

/* Suggestion

const str: string = "mobil";
const isPalindrome: boolean = str === str.split("").reverse().join("");
console.log(isPalindrome);

[] = taking value from index
() = running a function

*/

/* Write a code to convert centimeter to kilometer. 
Example : 100000 → “1 km” */

// const num: number = 100000;
// let convert = num / 100000;

// console.log(`${convert} km`);

/* Write a code to format number as currency (IDR) 
Example : 1000 → “Rp. 1.000,00” */

// const num: number = 1000;
// console.log(`Rp. ${new Intl.NumberFormat('id-ID').format(num)},00`);

/* Suggestion
const price: number = 10_000;
const result: string = new Intl.NumberFormat("id-ID", {
style: "currency",
currency: "IDR", }). format(price);

console.log(price); */

/* Write a code to remove the first occurrence of a given “search string” from a string 
Example : string = “Hello world”, search string = “ell” → “Ho world” */

// const str: string = "Hello World";
// const search: string = "ell";

// console.log(str.replace(search,""));

/* Write a code to capitalize the first letter of each word in a string 
Example : “hello world” → “Hello World” */

// const str: string = "hello world";
// const words = str.split(" ");
// const first = words[0].charAt(0).toUpperCase() + words[0].substring(1);
// const second = words[1].charAt(0).toUpperCase() + words[1].substring(1);

// console.log(words.length);
// console.log(`${first} ${second}`);

/* Suggestion
const str: string = "Hello World";
let words = inputString.split("");

for (let i = 0; i < words.length; i++) {
words[i] = words[i][0].toUpperCase() + words[i].slice(1);
} 

slice = substring
slice(1,3) 1 -- start taking index, 3 -- end taking index (not included)
--> used when you want to take some chars within index
*/

/* Write a code to swap the case of each character from string 
Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’ */

// const str: string = "The QuiCk BrOwN Fox";;
// let result: string = "";
// for (let i = 0; i < str.length; i++) {
//     if (str[i] == str[i].toUpperCase()) {
//         result += str[i].toLowerCase()
//     } else {
//         result +=str[i].toUpperCase()
//     } 
// }

// console.log(result);

/* Write a code to find the largest of two given integers 
Example : num1 = 42, num2 = 27 → 42 */

// console.log(Math.max(42,27));

/* Suggestion
console.log(num1 > num2 ? num1 : num2); */

/* Write a conditional statement to sort three numbers 
Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42 */

// const num = [42, 27, 18];
// console.log(num.sort());

/* Suggestion
const num1: number = 42;
const num2: number = 27;
const num3: number = 18;

const smallest: number = Math.min(num1, num2, num3);
const largest: number = Math.max(num1, num2, num3);
const middle: number = num1 + num2 + num3 - smallest - largest;

console.log(`${smallest}, ${middle}, ${largest}); */

/* Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
Example : “hello” → 1 */

// const val: any = "hello";

// if (typeof val == 'string') { 
//     console.log(1); }
//     else if (typeof val == 'number') {
//        console.log(2);
//     } else {
//         console.log(3);
// }

/* Write a code to change every letter a into * from a string of input
Example : ‘An apple a day keeps the doctor away’ -> 
`*n *pple * d*y keeps the doctor *w*y` */

// const str: string = "An apple a day keeps the doctor away";
// console.log(str.toLowerCase().replaceAll("a","*"));

/* Suggestion
const str: string = "An apple a day keeps the doctor away";
const replaceChar: string = "a";
let modifiedStr: string = "";

for (let i = 0; i < str.length; i++) {
if (str[i] === replaceChar) {
    modifiedStr += "*";
    } else {
    modifiedStr += str[i]; 
        }
    } */