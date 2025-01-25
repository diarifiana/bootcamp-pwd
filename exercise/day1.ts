/* Write a code to find area of rectangle.
Example : length = 5, width = 3
Output : 15 */

// Define length, width, area
// Calculate area length * width
// Display value area

let length: number = 5;
let width: number = 3;
const area: number = length * width;
console.log(area);

/* Write a code to find perimeter of rectangle.
Example : length = 5, width = 3
Output : 16 */

// Define, length, width, perimeter
// Calculate perimeter length*2 + width*2
// Display value perimeter

const perimeter: number = ((length+width)*2);
console.log(perimeter);

/* Write a code to find diameter, circumference and area of a circle.
Example : radius = 5
Output : diameter = 10, circumference = 31.4159, area = 78.539 */

// Define radius, diameter, circumference, areaCircle
// Calculate diameter (2 * radius), circumference (pi * diameter), areaCircle (pi * radius ** 2)
// Display value areaCircle

let radius: number = 5;
const diameter: number = 2*radius;
const circumference: number = Math.PI*diameter;
const areaCircle: number = Math.PI*(radius**2);

console.log(diameter);
console.log(circumference);
console.log(areaCircle);

console.log(`diameter: ${diameter} circumference: ${circumference} area: ${areaCircle}`);

/* Write a code to find angles of triangle if two angles are given.
Example : a = 80, b = 65
Output : 35 */

// Define angleA, angleB, angleC
// Calculate angleC
// Display value of angleC

let angleA: number = 80;
let angleB: number = 65;
const angleC: number = 180-(angleA+angleB);
console.log(angleC);

/*Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days).
Example : 400 days → 1 year, 1 month, 5 days
Example: 366 days → 1 year, 0 month, 1 day */

// Define inputDays, fullYear, fullMonth, totalYear, totalMonth, totalDay, totalYearMonthDay
// Calculate totalYearMonthDay
// Display value of totalYearMonthDay

let inputDays: number = 366;
const fullYear: number = 365;
const fullMonth: number = 30;
// const tahun: number = Math.floor(hari / 365);
const totalYear: number = Math.floor(inputDays/fullYear);
const totalMonth: number = Math.floor(inputDays%fullYear/fullMonth);
const totalDay: number = Math.floor(inputDays%fullYear%fullMonth);
// const totalYearMonthDay = totalYear + " Year " + totalMonth + " Month " + totalDay + " Day"

console.log(totalYear);
console.log(totalMonth);
console.log(totalDay);
console.log(`${totalYear} Year ${totalMonth} Month ${totalDay} Day`);

/* Write a code to get difference between dates in days.
Example : date1 = 2022-01-20, date2 = 2022-01-22
Output : 2 */

// Define date1, date2, getDifference
// Calculate getDifference (date2 - date1)
// Display value getDifference

let date1: any = new Date(2022-1-23);
let date2: any = new Date(2022-1-22);
const getDifference = date1 - date2;
console.log(getDifference);

let dateA = 2022-1-20;
let dateB = 2022-1-22;
const dateAtoB = dateA - dateB;
console.log(dateAtoB);

/*
const date1: Date = new Date ("2022-1-20");
const date2: Date = new Date ("2022-1-22");
const bedaTanggal: number = Math.abs(date1.getTime() - date2.getTime());
const bedaHari: number = bedaTanggal / (1000 * 3600 * 24);
console.log(bedaHari);

get.fullMonth
get.fullYear
*/