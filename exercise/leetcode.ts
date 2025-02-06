function isPalindrome(x: number): boolean {
    let toString: string = x.toString();
    let reverse: string = ""
    
    for (let i = toString.length-1; i >= 0; i--) {
        reverse += toString[i];
    }

    return reverse == x.toString() ? true : false
};

console.log(isPalindrome(121));

//===========================================//

// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Example 2:
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

function strStr(haystack: string, needle: string): number {
    if (haystack.indexOf(needle) >= 0){
        return haystack.indexOf(needle);
    } else {
        return -1;
    };
};

console.log(strStr("leetcode", "leeto"));

//===========================================//

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

function searchInsert(nums: number[], target: number): number {
    let result;
    
    if (nums.includes(target)) {
        result = nums.indexOf(target);
    } else if (!nums.includes(target)) {
        nums.push(target);
        nums.sort((a,b) => a - b);
        result = nums.indexOf(target);
    }

    return result;
};

console.log(searchInsert([1,3,5,6],7));

//===========================================//
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

function singleNumber(nums: number[]): number {

    nums.sort((a, b) => a - b);
    let result: number = 0;

    for ( let i = 0; i < nums.length; i++ ) {
    if ( nums[i] === nums[i+1] || nums[i] === nums[i-1]) {
        continue;
    } else {
        result += nums[i]
    }
}
    return result;
};

console.log(singleNumber([4,1,2,1,2]));

//===========================================//
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true
// Explanation:
// The element 1 occurs at the indices 0 and 3.

function containsDuplicate(nums: number[]): boolean {
    let result: boolean = false;

    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i+1] || nums [i] === nums[i-1]) {
            return true;
        }
    }
    return result;
};

console.log(containsDuplicate([2,14,18,22,22]));

//===========================================//
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    } else {
    let s1 = s.split("").sort();
    let t1 = t.split("").sort();
    
    for (let i = 0; i < s.length; i++) {
        if (s1[i] !== t1[i]) {
            return false
        }
    }
}
    return true;
};

console.log(isAnagram("buku", "kubu"));

//=====================TIME LIMIT======================//
// Example 1:
// Input: n = 27
// Output: true
// Explanation: 27 = 33

function isPowerOfThree(n: number): boolean {
    for (let i = 0; i < n; i++) {
        if (3**i === n) {
            return true;
        }
    }
    return false;
};

console.log(isPowerOfThree(3));

//===========================================//
// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

function reverseString(s: string[]): void {
    s.reverse();
    return;
};

console.log(reverseString(["h","e","l","l","o"]));

//=====================TIME LIMIT======================//
// Input: num = 16
// Output: true
// Explanation: We return true because 4 * 4 = 16 and 4 is an integer.

function isPerfectSquare(num: number): boolean {
    for (let i = 1; i <= num; i++) {
        if (i * i == num) {
            return true;
        }
    }
    return false;
};

console.log(isPerfectSquare(1));

// Example 3:
// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

function fizzBuzz(n: number): string[] {
    let result: string[] = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(`${i}`);
        }
    }
    return result;
};

console.log(fizzBuzz(15));

// Example 1:
// Input: s = "Hello, my name is John"

// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

function countSegments(s: string): number {
    if (s === "") {
        return 0
    } else {
    return s.split(" ").length;
    }
};

console.log(countSegments("Hello, my name is John"));

// Example 1:
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

function findMaxConsecutiveOnes(nums: number[]): number {
    let result: number = 0;
    let temporary: number = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            result += nums[i];  
            console.log(result);

            if (result > temporary) { 
                temporary = result; }
                console.log(result);            
        } else {
            result = 0;
        }
    }
    return temporary;
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));
