/* Create a function that can create a triangle pattern according to the height we provide like the following :
Parameters : height → triangle height
Example input: 5 */

// Make variable input
const inputNum: number = 5;
let triangle: string = "";

// Make a triangle with the same length as inputNum
for (let i = 1; i <= inputNum; i++) {
    triangle += `${i} `;
    console.log(triangle);
}

// Resources: https://jsstarpattern.onrender.com
// Suggestion / Correction
function segitiga(height: number) {
    for(let ii = 1; ii <= height; ii++) {
        let row: string = "";

        for(let jj = 1; jj <= ii; jj++) {
            row += jj + " "
        }
        
        console.log(row);
        
    }
}

segitiga(5);

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

// Suggestion
function segitiga2(height: number) {
    let currentNumber: number = 1;

    for(let ii = 1; ii <= height; ii++) {
        let row: string = "";

        for(let jj = 1; jj <= ii; jj++) {
            row += (currentNumber < 10 ? "0" : " ") + currentNumber + " ";
            currentNumber++
        }

        
        console.log(row);
    }
}

segitiga2(5);

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

// Suggestion
function fizzBuzz(n: number) {
    let message: string = "";

    for(let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            message += "FizzBuzz ";
        } else if (i % 3 === 0) {
            message += "Fizz ";
        } else if (i % 5 === 0) {
            message += "Buzz ";
        } else {
            message += i + " ";
        }
    }

    console.log(message);
    
}

fizzBuzz(15);

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

// Suggestion
function bmi(weight: number, height: number) {
    const result = weight / (height * height);

    if (result < 18.5) {
        return "less weight";
    } else if (result >= 18.5 && result < 24.9) {
        return "ideal";
    } else if (result >= 25.0 && result < 29.9) {
        return "overweight";
    } else if (result >= 30.0 && result < 39.9) {
        return "very overweight";
    } else {
        return "obesity";
    }
}

const weight1: number = 70; // in kg
const height1: number = 1.75 // in meters

console.log(bmi(weight, height));

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

// Suggestion (with Filter)
function removeOddNum(numbers: number[]) {
    const result1 = numbers.filter((number) => number % 2 === 0);
    return result1;
}

console.log(removeOddNum([1,2,3,4,5,6,7,8,9,10]));

// Suggestion (for loop)
function removeOddNum1(numbers: number[]) {
    const result2: number[] = [];

    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 === 0) {
            result2.push(numbers[i]);
        }
    }

    return result;
}

console.log(removeOddNum1([1,2,3,4,5,6,7,8,9,10]));

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

// Suggestion - using for loop
function SplitString2 () {
    const kata: string[] = [];
    let tempStr: string = "";

    for(let m = 0; m < str.length; m++) {
        if (str[m] === " ") {
            kata.push(tempStr);
            tempStr = "";
            continue;
        }

        tempStr += str[m];
    }

    kata.push(tempStr);

    console.log(kata);
}

SplitString2(); // Call function
console.log(SplitString2());