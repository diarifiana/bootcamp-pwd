/* Write a code to check whether the number is odd or even 
Example: 25 → odd number, 2 → even number */

// Define inputNumber
// if (inputNumber%2) > 0 then it is odd number
// if (inputNumber%2) = 0 then it is even number
// Check whether inputNumber is odd or even

let inputNumber: number= 25;

if(inputNumber%2 > 0) {
    console.log("this is odd number");
} else {
    console.log("this is even number"); 
}

// Correction / suggestion
// console.log(inputNumber % 2 === 0 ? "genap" : "ganjil");

/* Write a code to check whether the number is prime number or not
Example: 7 → 7 is a prime number
Example: 6 → 6 is not a prime number
*/

let numInput: number = 7;
let isPrime: boolean = true;

if (numInput <= 1) {
    isPrime = false;
} else {
    for (let p = 2; p < numInput; p++) {
       if (numInput%p === 0) {
        isPrime = false;
        break;
       }
    }
}

console.log(isPrime);

/* Write a code to find the sum of the numbers 1 to N
Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
Example: 3 → 1 + 2 + 3 = 6
*/

let ourNum: number = 5;
let a: number = 0;

for (let i = 1; i<=ourNum; i++) {
    a = a + i;
    console.log(a);
}

console.log(a);

/* Correction / Suggestion
    for (let i = 1; i <= ourNum; i++) { 
    sum += i
    
    if (i === ourNum) {
        message += 1 + "";
        } else {
         message += i + " + "
        }
    }
*/

/* Write a code to find factorial of a number
Example: 4! → 4 x 3 x 2 x 1 = 24
Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720 
*/

// n = 4, 4! = n x (n-a) x (n-a) x (n-a)

let n: number = 4;
let b: number = 1;

function factorial(n) {

if (n === 0 || n === 1) {
    
    console.log(`Factorial of number ${n} is 1`);

} else {

    let result = 1;
    for (b = n; b > 0; b--) {
        result = result * b;
    }
    return result;
    }
}

console.log(factorial(n))

/* Correction / Suggestion
    const num: number = 4;
    let sum: number = 1;
    let message: string = "";

    for (let i = num; i >=1 ; i--) {
        sum *= i;
        
        if (i === 1) {
            message += i + "";
            } else {
             message += i + " x "
            }
        }
    console.log(message + " = " + sum);
*/

/* Write a code to print the first N fibonacci numbers
Example: 15 → 610 */

// Define n, n1, n2
// n = number input by user, n1 = 0, n2 = 1
// Create loop until n
// Define Un = (n + (n-1))

let nFibo = 15;
let n1 = 0;
let n2 = 1;
let Un = n2;

for (let i = 1; i < nFibo; i++) {
    let Un = n1 + n2;
    console.log(Un);
    
    n1 = n2;
    n2 = Un;
}

/* Correction / Suggestion
const n: number = 15;

let a: number = 0;
let b: number = 1;

for (let i = 0; i < n; i++) {
    let next: number = a + b;
    
    a = b
    b = next; 
    
    }

console.log(a);
*/