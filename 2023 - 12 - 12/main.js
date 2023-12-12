//? Bonus task 1 
/* Bonus Task 1 - durationInHoursAndMins
Write a function called durationInHoursAndMins that takes in input a number representing the duration of a movie in minutes (e.g. 92). The function should return a string containing the duration of the movie in an "hours and minutes" format (e.g. "1 hour and 32 minutes").

Your output should reflect single units - e.g. "1 hour" (not "1 hours") and "1 minute" (not "1 minutes"). */

function durationInHoursAndMins(time) {
    if (time < 60) {
        if (time%60 === 1) {
            return `0 hours and 1 minute`
        } else {
            return `0 hours and ${time} minutes`
        }
    } else if (time < 120) {
        if (time%60 === 1) {
            return `1 hour and 1 minute`
        } else {
            return `1 hour and ${time%60} minutes`
        }
    } else if (time >= 120) {
        if (time%60 === 1) {
            return `${Math.floor(time/60)} hours and 1 minute`
        } else {
            return `${Math.floor(time/60)} hours and ${time%60} minutes`
        }
    }
}


console.log(durationInHoursAndMins(59));  // "0 hours and 59 minutes"
console.log(durationInHoursAndMins(60));  // "1 hour and 0 minutes"
console.log(durationInHoursAndMins(121));  // "2 hours and 1 minute"
console.log(durationInHoursAndMins(140));  // "2 hours and 20 minutes"
console.log(durationInHoursAndMins(180));  // "3 hours and 0 minutes" 
console.log(durationInHoursAndMins(89));


//? Bonus task 2

/* Bonus Task 2 - sumEvenOdd
Write a function called sumEvenOdd that takes in input an array of numbers and returns a new array where:

at index 0 there is the sum of all the even numbers in the array
at index 1 there is the sum of all the odd numbers in the array */

function sumEvenOdd(array) {
    const newArr = [0,0]
    for (let char of array) {
        if (char%2 === 0) {
            newArr[0] += char
        } else {
            newArr[1] += char
        }
    }
    return newArr
}

console.log(sumEvenOdd([1, 2, 3, 4, 5, 6]));  // [12, 9]
console.log(sumEvenOdd([0, -2, 11]));  // [-2, 11]
console.log(sumEvenOdd([1, 3, 15]));  // [0, 19]

//? Loops use cases

// 1. for loops are commonly used to run code a set number of times. Also, you can use break to exit the loop early, before the condition expression evaluates to false.

// 2. The for...of loop iterates over each value in the iterable object, the code in the code block is executed.

// 3. While Loop.

// The while loop starts by evaluating condition. If condition evaluates to true, the code in the code block gets executed. If condition evaluates to false, the code in the code block is not executed and the loop ends.

let n = 0;

while (n < 3) { // 1) condition: 0 < 3; execution 0+1=1
    n++;        // 2) condition: 1 < 3; execution 1+1=2
}               // 3) condition: 2 < 3; execution 2+1=3
                // 4) condition: 3 < 3 (false, end and exit loop);
console.log(n);

//? Task 1: Sum of Digits
// Scenario:
// Write a function that calculates the sum of digits in a given number.

// Instructions:
// Create a function calculateDigitSum that takes a positive integer as an argument and returns the sum of its digits. Use a while loop to repeatedly extract the last digit and add it to a sum until all digits have been processed.

function calculateDigitSum(num) {
    let sum = 0;
//  while (num > 0)    
    while (num%10 !== 0) {
        sum += num%10; // 1) 123%10 = 3 ; 2) 12 % 10 = 2 ; 3) 1 % 10 = 1 ; 4) 0 % 10 = 0
    num = Math.floor(num/10); // 1) 123 / 10 = 12.3 = 12 ; 2) 12/10 = 1.2 = 1 ; 3) 1 / 10 = 0.1 = 0 ; 4) 0 / 10 = 0
    }
    return sum
}


// Test
console.log(calculateDigitSum(123)); // Output: 6
console.log(calculateDigitSum(99)); // 18 : 
// Sum:

// 1) sum += 99 % 10 = 9 ;                                            
// 2) sum += 9 % 10 = 9; 9 + 9 = 18

// Num:

// 1) num = 99/10 = 9.9 = 9
// 2) num = 9/10 = 0.9 = 0

// 4. do ... while loop.

// The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. In a do...while loop, condition is checked at the end of each iteration of the loop,

//let n = 0;

//do {
//    n++;
//} while (n < 3) 

              // 1) execution 0+1=1; condition: 1 < 3;
             // 2) execution 1+1=2; condition: 2 < 3; 
               //! 3) execution 2+1=3(executes statement, however condition is false, because execution is going first (over condition)); condition: 3 < 3; (false, end and exit loop)

//console.log(n);

let result = '';
let i = 0;

do {
    i++;
    result += i;
} while (i < 5)

console.log(result);
// Expected output: "12345"

/**
 * Task 2
 * 
 */

let pin = "65";

// We start from: while (2 < 6)
while (pin.length < 6) {
    const randomDigit = Math.floor(Math.random() * 10); // random digit 0 - 9
    pin += randomDigit; // 1) (2 < 6) : "65" + 7 = "657"
                        // 2) (3 < 6) : "657" + 0 = "6570"
                        // 3) (4 < 6) : "6570" + 8 = "65708"
                        // 4) (5 < 6) : "65708" + 0 = "657080"
                        // 5) (6 < 6) : condition is false, ends and exits the loop
}

console.log(pin);

//? Array.prototype.map()
//The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

const array1 = [1, 4, 9, 16];

      //New Array   
      //   |   Declared Array
      //   |         |     Parameter that will be element of New Array
      //   |         |         |   How to modify element in New Array in relation to element in Declared Array
      //   |         |         |     |
const arrayDouble = array1.map(x => x*2)

console.log(arrayDouble);

//? Task 1: Title Case Converter
//Scenario:
//You're working on a text utility and need to convert a string to title case (capitalize the first letter of each word). Create a function //convertToTitleCase that takes a string as input and returns the string in title case.

const sentence = 'this is a title case example';
function convertToTitleCase(str) {
    // return str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
    let newArray = str.toLowerCase().split(" ") // Declare an array which is input transformed to lower case and into array
    let transformedArray = newArray.map(word => word[0].toUpperCase() + word.slice(1)) // Declare new array which has transformed elements in relation to newArray
    let newStr = transformedArray.join(" "); // Convert transformedArray into string
    return newStr // return string
}

console.log(convertToTitleCase(sentence)); // Output: "This Is A Title Case Example"


//? Task 2: Calculate Factorial with Default Parameter

//Scenario:
//You need to calculate the factorial of a number using a recursive function with a default parameter. Create a function calculateFactorial //that takes a number as input and calculates its factorial using recursion. If no number is provided, assume the factorial is 1.
// Factorial is 5! = 1x2x3x4x5 = 120; 1! = 1

function calculateFactorial(num = 1) {
    if (num <= 1) {
        return 1;
    }

    return num*calculateFactorial(num-1)
 // Recursive function = when in function statement function call itself
    // function with parameter 5 {
    //    5*calculateFactorial(5-1=4) = 5*4*calculateFactorial(4-1=3) = 5*4*3*calculateFactorial(3-1=2) = 5*4*3*2*calculateFactorial(2-1=1) = 5*4*3*2*1*calculateFactorial(1-1=0)
//    }
}

 // Test
console.log(calculateFactorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)
console.log(calculateFactorial()); // 1 (default parameter)

//? Task 3: Generate Random Password with Rest Parameter

// Scenario:
// You're building a password generator that takes different parameters to generate a password. Create a function generateRandomPassword that // generates a random password with a specified length. It should also allow including optional special characters.

function generateRandomPassword(length, ...specialCharacters) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' + specialCharacters.join('');
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random()*charset.length);
        //* randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
        // randomIndex = Math.floor(Math.random()*(charset.length-1 - 0 +1)) + 0 = Math.floor(Math.random()*(charset.length))
        password += charset[randomIndex];
    }
    return password;
}

 // Test
 console.log(generateRandomPassword(8)); // Output: Random password of length 8
 console.log(generateRandomPassword(10, '@$#!')); // Output: Random password of length 10 with special characters