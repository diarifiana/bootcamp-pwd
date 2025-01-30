/* Create a function that can create a triangle pattern according to the height we provide like the following :
Parameters : height → triangle height
Example input: 5 */

// Make variable input
const inputNum: number = 5;
let triangle: string = "";

// Make a triangle with the same length as inputNum
for (let i = 1; i <= inputNum; i++) {
    triangle += i;
    console.log(triangle);
}

/* Create a function that can create a triangle pattern according to the height we provide like the following :
01
02 03
04 05 06
07 08 09 10
● Parameters : height → triangle height */

// Create function
function displayTriangle (height: number) {
    let a: string = "";
    let counter: number = 0;
    
    for (let row = 1; row <= height; row++) {
        a = "";
        for (let col = 1; col <= row; col++) {
            counter++
            a += `${((counter < 10) ? ` 0${counter}` : ` ${counter}`)}`;
        }
        console.log(a);
    } 
}

console.log("============== TRIANGLE EXERCISE ===============");
displayTriangle(5);

console.log("============== TRIANGLE EXERCISE ===============");
// Define inputNumber
// const inputNumber: number = 10;
// let triangle1: string = "";
// let triangle2: string = "";
// let triangle3: string = "";
// let triangle4: string = "";

// Display 0 - 10 in a triangle
// for (let j = 1; j <= 1; j++) {
//     triangle1 += `${((j < 10) ? ` 0${j}` : ` ${j}`)}`
// }

// for (let j = 2; j <= 3; j++) {
//     triangle2 += `${((j < 10) ? ` 0${j}` : ` ${j}`)}`
// }

// for (let j = 4; j <= 6; j++) {
//     triangle3 += `${((j < 10) ? ` 0${j}` : ` ${j}`)}`
// }

// for (let j = 7; j <= 10; j++) {
//     triangle4 += `${((j < 10) ? ` 0${j}` : ` ${j}`)}`
// }

// console.log(triangle1);
// console.log(triangle2);
// console.log(triangle3);
// console.log(triangle4);

/* Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
● Parameters : n → total looping
○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz */

// Define n
const n: number = 15;
let result: string = "";

// Display number from 1 to n
for (let k = 1; k <= n; k++) {
console.log(k);
    if (k % 3 == 0 && k % 5 == 0) {
        result += " FizzBuzz";
    } else if (k % 3 == 0) {
        result += " Fizz";
    } else if (k % 5 == 0){
        result += " Buzz";
    } else {
        result += ` ${k}`;
    }
}

console.log(result);

/*
Create a function to calculate Body Mass Index (BMI)
● Formula : BMI = weight (kg) / (height (meter))2
● Parameters : weight & height
● Return values :
○ < 18.5 return “less weight”
○ 18.5 - 24.9 return “ideal”
○ 25.0 - 29.9 return “overweight”
○ 30.0 - 39.9 return “very overweight”
○ > 39.9 return “obesity”z 
*/

// Define variable weight, height
const weight: number = 50; // in kg
const height: number = 150; // in cm
const conversion: number = height / 100; // height in m

// Create function BMI Calculation
function CalculationBMI() {
    if (weight/(conversion**2) < 18.5) {
        return "Less Weight";    
    } else if (weight/(conversion**2) < 24.9) {
        return "Ideal";
    } else if (weight/(conversion**2) < 29.9) {
        return "Overweight";
    } else if (weight/(conversion**2) < 39.9) {
        return "Very Overweight";
    } else {
        return "Obesity";
    }
};

CalculationBMI(); // Call a function
console.log(CalculationBMI()) // Display result

/* Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
○ Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10] */

// Define first array
const firstArray: number[] = [1,2,3,4,5,6,7,8,9,10];

// Make in a loop
for (let l = 1; l <= firstArray.length; l++) {
    if (firstArray[l] % 2 !== 0) {
        console.log(l);
    } else {
        continue;
    }
}

/* Write a function to split a string and convert it into an array of words 
Example : “Hello World” → [“Hello”, “World”] */

// Define string
const str: string = "Hello World";

// Create function
function SplitString () {
    return str.split(" ");
}

SplitString(); // Call function
console.log(SplitString());