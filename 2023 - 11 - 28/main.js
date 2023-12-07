//! Linear sequence

// let num = 0;
// num +=1;
// console.log(num);
// num +=1;
// console.log(num);
// num +=1;
// console.log(num);
// num +=1;
// console.log(num);
// num +=1;
// console.log(num);

//! "for" Loop

//              let i = 0;(counter variable)
//                    |
//                    |            i < 5 (if true - execute statement,if false - execution exits the loop)
//                    |              |
//                    |              |         i++ (executes at the end of each loop iteration and occurs before next evaluation of condition)
//                    |              |          |
// Syntax: for (initialization; condition; afterthought) {
//    statement
// }

//? let num = 0;

//? for (let i = 0; i < 5; i++) {
//?     console.log(num+=i); // num = num + i
//? }

// 1 step (i=0) : num = 0 + 0 = 0
// 2 step (i=1) : num = 0 + 1 = 1
// 3 step (i=2) : num = 1 + 2 = 3
// 4 step (i=3) : num = 3 + 3 = 6
// 5 step (i=4) : num = 6 + 4 = 10

/**
 * Task 01
 *
 * Fix the code below so that it prints the numbers from 0 to 10
 *
 */

//? for (let i = 0; i <=10; i++) {
//?    console.log(i);
//? }

// * Task 02
// *
// * Complete the code below so that it prints the numbers from 100 to 50
// */

//? for (let i = 100; i >=50; i--) {
//?     console.log(i);
//? }

/**
 * Task 03
 *
 * Complete the code below so that output will be a string with 5 +
 *
 * Expected output: +++++
 */

//? let output = "";

//? for (let i=0; i < 5; i++) {
//?     output += "+"
//? }
//? console.log(output);

/**
 * Task 04
 *
 * Complete the code below so that output will be the string: 12345
 *
 * Expected output: 12345
 */

//? let output = "";

//? for (let i = 1; i <= 5; i++) {
// //    output+=1  - output = output+1,  result "11111" : 1 step - "1", 2nd step "11", 3rd step "111"
//?       output+=i; // output = output + i;  result "12345" : 1 step - ""+1 = "1", 2nd step "1"+2="12", 3rd step "12"+3="123"
//? }
//? console.log(output);

/**
 * Task 05
 *
 * Complete the code below so that the numbers from 0 down to -10 are printed
 * to the console
 */

//? for (let i=0; i >=-10; i--) {
//?     console.log(i);
//? }

//! process.argv
// It`s array of command line
// In this array 1st element always - absolute path to Node and 2nd element - absolute path to running file

//? console.log(process.argv);

/**Task 1 (from 2nd link)
 *
 * Write a `for` loop that goes from 0 until `max` (not included) and prints every number
 * to the console.
 *
 * The value for `max` should be passed to the script from the command line
 *
 * **IMPORTANT**: the input coming from the command line is always a string. When you
 * need numbers, remember to convert it
 *
 * For example:
 *
 * process.argv[0]
 *  |   process.argv[1]
 *  |      |
 *  |      |  process.argv[2]
 *  |      |      |
 * node task-1.js 5
 *
 * Expected output:
 *
 * 0
 * 1
 * 2
 * 3
 * 4
 *
 */

//? let max = process.argv[2];

//? for (let i=0; i < max; i++) {
//?     console.log(i);
//? }

/**Task 2 (from 2nd link)
 *
 * write a `for` loop that goes from 0 until `max` (not included) with an increment
 * defined by the variable `step` and prints every number to the console.
 *
 * the values for `max` and `step` should be passed to the script from the command line
 *
 * **important**: the input coming from the command line is always a string. when you
 * need numbers, remember to convert it
 *
 * for example:
 *
 * count up to 10 with an increment of 2:
 * node task-2.js 10 2
 *
 * expected output:
 *
 * 0
 * 2
 * 4
 * 6
 * 8
 *
 * count up to 50 with an increment of 5:
 * node task-2.js 50 5
 *
 * 0
 * 5
 * 10
 * 15
 * 20
 * 25
 * 30
 * 35
 * 40
 * 45
 *
 */
//? let max = parseInt(process.argv[2]);
//? let step = parseInt(process.argv[3]);

//? for (let i=0; i < max; i+=step) {
//?         console.log(i);
//?  }

/**Task 3(from 2nd link)
 *
 * Similar to previous task, Write a `for` loop that goes from 0 until `max` (not included) with an increment
 * defined by the variable `step` and prints every number to the console.
 *
 * If the value of `step` is greater than the value of `max`, print a message to the console
 * warning the user that the first argument should always be greater than the second
 *
 * **IMPORTANT**: the input coming from the command line is always a string. When you
 * need numbers, remember to convert it
 *
 * For example:
 *
 * node task-3.js 10 2
 *
 * Expected output:
 *
 * 0
 * 2
 * 4
 * 6
 * 8
 *
 * But:
 * node task-3.js 2 5
 *
 * Expected output:
 * Attention: the first number must be greater than the second!
 */

//? let max = parseInt(process.argv[2]);
//? let step = parseInt(process.argv[3]);

//? for (let i=0; max > i; i+=step) {
//?     if (step > max) {
//?         console.log(`Attention: the first number must be greater than the second!`);
//?     } else {
//?         console.log(i);
//?     }
//? }

/** Task 4 (fm 2nd link)
 *
 * Similar to previous task, Write a `for` loop that goes from 0 until `max` (not included) with an increment
 * defined by the variable `step` and prints every number to the console.
 *
 * If the value of `step` is greater than the value of `max`, print a message to the console
 * warning the user that the first argument should always be greater than the second
 *
 * If the user doesn't pass any value in the command line, use the following default values:
 * - default value for `max`: 10
 * - default value for `step`: 1
 *
 * **IMPORTANT**: the input coming from the command line is always a string. When you
 * need numbers, remember to convert it
 *
 * For example:
 *
 * node task-4.js
 *
 * Expected output:
 *
 * 1
 * 2
 * 3
 * 4
 * 5
 * 6
 * 7
 * 8
 * 9
 *
 *
 *
 *
 *
 * But:
 * node task-3.js 2 5
 *
 * Expected output:
 * Attention: the first number must be greater than the second!
 */

//? let max = parseInt(process.argv[2]) || 10;
//? let step = parseInt(process.argv[3]) || 1;


//? for (let i = 0; i < max; i += step) {
//?   if (step > max) {
//?     console.log(`Attention: the first number must be greater than the second!`);
//?   } else {
//?     console.log(i);
//?   }
//? }

/**
 * Task 1
 * 
 * Use a loop to calculate the sum of the first 10 numbers and print the result
 * to the console
 * 
 */

//? let sum = 0;

//? for (let i = 0; i<=10; i++) {
//?     sum = sum + i; // sum+=i : 0 + 1 + 2 + 3 + 4 + 5 ..... + 10
//? }
//? console.log(sum);

/**
 * Task 2 
 * 
 * Use a loop to create a string with the numbers from 0 to 9, then print it to
 * the console
 * 
 * Expected output:
 * 0123456789
 */

//? let output = "";

//? for (i=0; i<10; i++) {
//?     output+=i;
//? }
//? console.log(output);

/**
 * Task 3 
 * 
 * Use a loop to create a string with only the even numbers between 0 to 9, then print it to
 * the console
 * 
 * Expected output:
 * 02468 
 */

//? let output = "";
//? for (i=0;i<10;i++) {
//?     if (i%2===0) {
//?         output+=i;
//?     }
//? }

//? console.log(output);

/**
 * Task 4
 *
 * Use a loop to create an array containing the numbers from 0 to 100, then print
 * the whole array to the console
 *
 * Expected output:
 * [0, 1, 2, 3, 4, 5, 6, ..., 98, 99, 100]
 *
 */

//? let output = [];

//? for (i=0;i<=100;i++) {
//?     output.push(i);
//? }

//? console.log(output);

/**
 * Task 5
 * 
 * Use a loop to create an array containing the even numbers between 0 to 100, 
 * then print the whole array to the console
 * 
 * Expected output:
 * [0, 2, 4, 6, 8, 10, 12, ..., 96, 98, 100]
 *
 */

//? let output = [];

//? for (let i = 0; i <=100; i++) {
//?     if (i%2 === 0) {
//?         output.push(i)
//?     }
//? }
//? console.log(output);

/**
 * Task 6
 *
 * Use a loop to calculate the sum of the even numbers between 0 and 100 (including 100),
 * the print the result to the console
 * 
 * Expected output:
 * 2550
 *
 */

//? let sum = 0;
 
//? for (let i=0; i <=100; i++) {
//?     if (i%2 === 0) {
//?         sum+=i;
//?     }
//? }

// console.log(sum);

/**
 * Task 7
 *
 * Use a loop to calculate the sum of the odd numbers between 0 and 100 (including 100),
 * the print the result to the console
 * 
 * Expected output:
 * 2500
 *
 */

//? let sum = 0;
 
//? for (let i=0; i <=100; i++) {
//?     if (i%2 !== 0) {
//?         sum+=i;
//?     }
//? }

//? console.log(sum);

/**
 * Task 8
 * 
 * Create an empty string and a loop that goes from 0 to 50.
 * Inside the loop, check if the current index is divisible by 2, 3 or 5:
 * - if it's divisible by 2, add a 2 to the string
 * - if it's divisible by 3, add a 3 to the string
 * - if it's divisible by 5, add a 5 to the string
 * - otherwise, add an underscore `_` to the string 
 * 
 * At the end, print the string to the console
 * 
 * Expected output:
 * 2_23252_232_2_232_2_232_25232_2_23252_232_2_232_2_2
 */

//? let output = "";

//? for (let i=0; i <=50; i++) {
//?     if (i%2 === 0) {
//?         output+=2;
//?     } else if (i%3 === 0) {
//?         output+=3;
//?     } else if (i%5 === 0) {
//?         output+=5; 
//?     } else {
//?         output+="_"
//?     }
//? }

// console.log(output);

/**
 * Task 9
 * 
 * Use a loop to create a string containing all numbers from 0 to 10, separated
 * by a dash `-`
 * 
 * 
 * Expected output:
 * 0-1-2-3-4-5-6-7-8-9-10
 * 
 */

//? let output = "";
//? for (i=0;i>=-10;i--) {
//?     output+=i; // "","0","0-1","0-1-2","0-1-2-3".......
//? }

//? console.log(output);

/**
 * Task 10
 * 
 * Use a loop that goes from 0 to 10 and adds, multiplies every number by 2 and
 * adds the result in an array. Print the array tot he console
 *
 *
 * Expected output:
 * [ 0,  2,  4,  6,  8, 10, 12, 14, 16, 18, 20 ]
 */

let output = [];

for (i=0;i<=10;i++) {
    output.push(i*2); // i=0 -> 0*2=0, i=1 -> 1*2 = 2, i=2 ->2*2 = 4
}

console.log(output);