/* Write a function to get the lowest, highest and average value in the array (with and without sort function).
a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx} */

// Input number of array
const arrayNum: number[] = [12, 5, 23, 18, 4, 45, 32];
let result: string[] = [];

// Write function to get the lowest
function findNum() {
    // Sort ascending
    arrayNum.sort((a, b) => a - b);

    // Find lowest number
    result.push(`Lowest number is ${arrayNum[0]}`);

    // Sort descending
    arrayNum.sort((a, b) => b - a);

    // Find highest number
    result.push(`Highest number is ${arrayNum[0]}`);

    // Calculate average value
    let i;
    for (i = 1; i < arrayNum.length; i++) {
        console.log(i);
    }

    console.log(i);
    
    let average: number = (arrayNum.reduce((a, b) => a + b))/i;
    console.log(average);
    result.push(`Average number is ${average}`);

    return console.log(result);
}

findNum(); // Calling function

// Without sort
function withoutSort() {
    let findMin = Math.min(...arrayNum);
    let findMax = Math.max(...arrayNum);
    let findAverage = (arrayNum.reduce((a, b) => a + b))/arrayNum.length

    return console.log(findMin, findMax, findAverage);
}

withoutSort();

// Suggestion with sort built-in
const sortFunction = (arr: number[]) => {
    arr.sort((a,b ) => a - b);
    const lowest: number = arr[0];
    const highest: number = arr[arr.length-1];
    const sum: number = arr.reduce((a, b) => a + b);
    const average: number = sum/arr.length;

    console.log(lowest);
    console.log(highest);
    console.log(sum);
    console.log(average);
    
    return {lowest: lowest, highest: highest, average: average}; // if the key and value name is similar, you can put only {lowest, highest, average}
} 

console.log(sortFunction([3, 2, 6, 5, 8, 1]));

// Suggestion without sort
const sortFunction2 = (arr: number[]) => {
    let lowest: number = arr[0];
    let highest: number = arr[0];
    let sum: number = 0;

    for(const num of arr) { // if (num < lowest) lowest = num;
        if (num < lowest) {
            lowest = num;
        }

        if (num > highest) { // if (num > highest) highest = num;
            highest = num;
        }

        sum+= num
    }
    const average = sum / arr.length;

    return {lowest, highest, average};
}

console.log(sortFunction2([3, 2, 6, 5, 8, 1]));

/* Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date” */

// Declare array
const arrayFruits: string[] = ["apple", "banana", "cherry", "date"];
let result1: string = "";

// Create function
function addWords () {
    for (let j = 0; j <= arrayFruits.length-1; j++ ) {
        if (j < arrayFruits.length-1) {
            result1 += `${arrayFruits[j]}, `;
        } else {
            result1 += `and ${arrayFruits[j]}`;
        }
    }

    return result1;
}

console.log(addWords());

// Suggestion 
const concatWords = (words1: string[]) => {
    if (words1.length === 1) {
        return words1[0];
    } else {
        const lastWord = words1.pop()
        return words1.join(", ") + " and " + lastWord;
    }
}

console.log(concatWords(["apple", "banana", "cherry", "date"]));

/* Write a function from a given array of numbers and return the second smallest number
a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2 */

// Declare array
const NumArray: number[] = [5, 3, 1, 7, 2, 6];

// Write function
function secondSmallest () {
    NumArray.sort((a, b) => a - b);
    let result2 = NumArray[1];

    return result2;
}

console.log(secondSmallest());

// Suggestion
const secondSmallest1 = (arr: number[]) => {

    if (arr.length < 2) {
        return "minimum array length is 2";
    }

    const sortedArr = arr.sort((a, b) => a - b);

    return sortedArr[1];
};

console.log(secondSmallest1([5, 3, 2, 1, 4]));

/* Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
of the same length.
a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4] */

// Declare Array
const array1: number[] = [1, 2, 3];
const array2: number[] = [3, 2, 1];
const resultArr: number[] = [];

// Create function
function addArray() {
    for (let k = 0; k < array1.length; k++) {
        resultArr.push(array1[k] + array2[k]);
    }
    return resultArr;
}

console.log(addArray());

// Suggestion
const calculateArr = (array1: number[], array2: number[]) => {
    const result: number[] = [];

    for(let i = 0; i < array1.length; i++) {
        result.push(array1[i] + array2[i]);
    }

    return result;
};

console.log(calculateArr([1, 2, 3],[3, 2, 1]));

/* Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7] */

// Declare array
let array3: number[] = [1, 2, 3, 4];
const element: number = 7;

// Create function
function addElement() {
    if (array3.includes(element) == false) {
        array3.push(element);
    }

    return array3; 
}

console.log(addElement());

// Suggestion
const addNewElement = (arr: number[], newElement: number) => {
    if (!arr.includes(newElement)) {
        arr.push(newElement);
    }

    return arr;
}

console.log(addNewElement([1, 2, 3, 4], 7));
console.log(addNewElement([1, 2, 3, 4], 4));

/* Write a function from a given array of mixed data types and return the sum of all the number 
a. Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3 */

// Declare array
const mixedArray: any[] = ["3", 1, "string", null, false, undefined, 2];
let resultNumber: number = 0;

// Create function
function sumNumbers () {
    for (let num of mixedArray) {
        if (typeof num === "number") {
            resultNumber += num
        }
    }
    return resultNumber;
}

console.log(sumNumbers());

// Suggestion
const sumNumberDataTypes = (arr: any[]) => {
    let total: number = 0;

    arr.forEach((value) => {
        if (typeof value == 'number') {
            total += value;
        }
    })

    return total;
}

console.log(sumNumberDataTypes(["3", 1, "string", null, false, undefined, 2]));

/* Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements).
a. Example :
maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
The function will return [5, 10, 24, 3, 6] */

// Declare maximum length and array
const maxLength: number = 5;
const arrIntegers: number[] = [5, 10, 24, 3, 6, 7, 8];

// Create function
function displayArray() {
    return arrIntegers.slice(0, maxLength)
}

console.log(displayArray());

// Suggestion
const limitData = (maxSize: number, ...integers: number[]) => {
    console.log(maxSize);
    console.log(integers);
    
    const result: number[] = [];

    integers.forEach((integer) => {
        if(result.length === maxSize) {
            return;
        }

        result.push(integer);
    });

    return result;
};

console.log(limitData(5, 5, 10, 24, 3, 6, 7, 8));


/* Write a function that will combine 2 given array into one array
a. Example : arr1 = [1, 2, 3], arr2 = [4, 5, 6] → [1, 2, 3, 4, 5, 6] */

// Declare arrays
const array4: number[] = [1, 2, 3];
const array5: number[] = [4, 5, 6];

// Merge arrays
function merge() {
    return array4.concat(array5);
}

console.log(merge());

// Suggestion
const combineArr = (arr1: number[], arr2: number[]) => {
    return [...arr1, ...arr2];
};

console.log(combineArr([1, 2, 3],[4, 5, 6]));

/* Write a function to find duplicate values in an array
a. Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5] */ 

// Declare array
const array6: number[] = [1, 2, 2, 2, 3, 3, 4, 5, 5];
let check: number = 0;
let resultDupe: number[] = [];

// Create function
function findDupe() {
    for (let index of array6) {
        if (index == check) {
            resultDupe.push(index);
        }
        check = index;
    }
    return resultDupe
}

console.log(findDupe());

// Suggestion
const findDuplicates = (arr: number[]) => {
    const duplicates: number[] = [];

    // loop setiap elemen dalam array
    for(let i = 0; i < arr.length; i++) {
        const currentNumber = arr[i];

        // cek apakah angka ini sudah muncul sebelumnya dalam array
        let count: number = 0;

        for(let j = 0; j < arr.length; j++) {
            if(arr[j] === currentNumber) {
                count++;
            }
        }

        // jika angka muncul lebih dari sekali tambahkan ke variable duplicates
        if(count > 1 && !duplicates.includes(currentNumber)) {
            duplicates.push(currentNumber);
        }
    }
    return duplicates
};

console.log(findDuplicates([1, 2, 2, 2, 3, 3, 4, 5, 5]));

/* Write a function to find the difference in 2 given array
a. Example : arr1 = [1, 2, 3, 4, 5], arr2 = [3, 4, 5, 6, 7] → [1, 2, 6, 7] */

// Declare arrays
const array7: number[] = [1, 2, 3, 4, 5];
const array8: number[] = [3, 4, 5, 6, 7];
let cekResult: number[] = [];

// Check index of array7 in array8 and vice versa
function findDiff() {

for (let index of array7) {
    if (array8.includes(index)) {
        continue;
    } else {
        cekResult.push(index);
    }
}

for (let index1 of array8) {
    if (array7.includes(index1)) {
        continue;
    } else {
        cekResult.push(index1);
    }
}

return cekResult;
}

console.log(findDiff());

// Suggestion
const findDifferences = (arr1: number[], arr2: number[]) => {
    const difference: number[] = [];

    for (const item of arr1) {
        if(!arr2.includes(item) && !difference.includes(item)) {
            difference.push(item);
        }
    }

    for (const item of arr2) {
        if(!arr1.includes(item) && !difference.includes(item)) {
            difference.push(item);
        }
    }

   return difference;
} 

console.log(findDifferences([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

/* Based on the array below write a function that will return primitive data types only. 
let arr = [1, [], undefined, {}, "string", {}, []];
a. The function will return [1, undefined, “string”] */

// Declare array
let array9: any[] = [1, [], undefined, {}, "string", {}, []];
let arrayResult: any[] = [];

// Create function
function primitive() {
    for (let index of array9) {
        if (typeof index === 'number' || index == 'string' || index == undefined) {
            arrayResult.push(index);
        } else {
            continue;
        }
    }
    return arrayResult;
}

console.log(primitive());

// Suggestion
const filterPrimitive = (arr: any[]) => {
    return arr.filter((value) => {
        return typeof value !== "object" || value === null;
    });
}

console.log((filterPrimitive([1, [], undefined, {}, "string", {}, []])));

/* Write a function from the below array of number that will return sum of duplicate values. 
letarr = [10, 20, 40, 10, 50, 30, 10, 60, 10]; a. The function will return 40 */

// Declare array
const array10: number[] = [10, 20, 40, 10, 50, 30, 10, 60, 10];
let resultSum: number = 0;

// Create function
function returnSum() {
    array10.sort((a, b) => a - b);
    console.log(array10);
    
    for (let l = 0; l < array10.length; l++) {
        if (array10[l] == array10[l-1] || array10[l] == array10[l+1]) {
            
            console.log(array10[l]);
            
            resultSum += array10[l]
        }      
    }
    return resultSum;
    
}

console.log(returnSum());

// Suggestion
const sumDuplicateValues = (arr: number[]) => {
    const seen: number[] = [];
    const duplicate: number[] = [];
    let result: number = 0;

    for (const value of arr) {
        if (seen.includes(value)) {
            if (!duplicate.includes(value)) {
                duplicate.push(value);
            }
        } else {
            seen.push(value);
        }
    }

    for(const value of arr) {
        if (duplicate.includes(value)) {
            result += value;
        }
    }

    return result;
};

console.log(sumDuplicateValues([10, 20, 40, 10, 50, 30, 10, 60, 10]));

/* Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor.
a. Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win' */

// Suggestion
const rockPaperScissor = (player: "rock" | "paper" | "scissor") => { // Membatasi pilihan input yang dimasukan oleh user
    // "|" hanya ada di typescript

    const choices: ("rock" | "paper" | "scissor")[] = ["rock", "paper", "scissor"];

    const computer = choices[Math.floor(Math.random() * 2.9)]; // Math floor hanya memunculkan antara angka 0 dan 1

    if (player === computer) {
        return {result: "Draw", computer: computer, player: player}; // "Draw"; // {result: "Draw", computer: computer, player: player}
    }

    if (
        (player === "rock" && computer === "scissor") ||
        (player === "scissor" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ) {
        return { result: "Win", computer, player };
    }

    return { result: "Lose", computer, player };
};

console.log(rockPaperScissor("paper"));