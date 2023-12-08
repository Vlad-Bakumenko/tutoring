//? Rest parameters and Default parameters

//? Rest parameters

 function sum(a,b) {
     return a+b;
 }

console.log(sum(1,2));// 3
console.log(sum(1)); // 1 + undefined = NaN
console.log(sum(1,2,3)); // 1+2 = 3  ,third argument is skipped/ignored

function sumAll(a,b, ...params) {
    let sum = a*b; // 4x5 = 20 
    for (let par of params) {
        sum += par; // 20 + 6 = 26+7 = 33 + 8 = 41 + 9 = 50 + 10 = 60
    }
    console.log(params); // [6,7,8,9,10]
    console.log(...params); // 6 7 8 9 10 (type - number)
    console.log(params[0]); // 6
    return sum 
    
}

console.log(sumAll(4,5,6,7,8,9,10)); // 60
         // adding operator
//             |   |
 console.log(2 + 3 + [4, 5, 6, 7, 8]); // 54,5,6,7,8


//? Default parameters 

 function multiply(a,b = 1) {
     return a*b;
 }

console.log(multiply(5,2)); // 10
console.log(multiply(5)); // 5x1 = 5

//? Link 3. Task 1

// Complete the function in task-1-twofer.js so that it returns:

// "Two for me and one for you": when no arguments are passed
// "Two for me and one for <name>": when we pass an argument. "" should be replaced by the passed argument

const twofer = (who = "you") => `Two for me and one for ${who}`;

console.log(twofer("Fran")); // -> "Two for me and one for Fran"
console.log(twofer()); // -> "Two for me and one for you"

//? Link 3. Task 2

// Complete the function in task-2-exponent.js so that it returns the result of an exponentiation depending on the arguments passed.

// if we pass 2 arguments, it returns the result of the first argument to the power of the second one
// if we pass only 1 argument, the second one should be set to 2 by default
// For example:

const exponent = (num,exp = 2) => {
    //let result = 1;
    //for (let i = 0; i < exp; i++) {
        //result *= num; //  result = result*num
    //  result = 1*2 = 2*2 = 4 * 2 = 8*2 = 16
    //           i=0    i=1    i=2    i=3
    //}
    let result = Math.pow(num, exp);
    return result
}



console.log(exponent(2, 4)); // 16
console.log(exponent(3, 3)); // 27
console.log(exponent(2, 3)); // 8 
console.log(exponent(3)); // 9
console.log(exponent(4)); // 16 

//? Link 3. Task 3

// Complete the function in task-3-howManyArgs.js.

// The function should return the total amount of arguments passed to it.

const howManyArgs = (...params) => params.length;


console.log(howManyArgs()); // 0
console.log(howManyArgs("hello", 1, false)); // 3
console.log(howManyArgs("better")); // 1

// Concatenation: "hot" + "dog" = "hotdog"

//? Link 3. Task 4 - sum
//Complete the function in task-4-sum.js.

//The function accepts any amount of numbers (arguments) and returns the total of their sum.

//const sum = (...num) => {
//    let result = 0;
//    for (let i = 0; i < num.length;i++) {
//        result += num[i] // result = result + num[i] = 25 = 25 + 25 = 50 + 20 = 70
//                 |
//               element of array        
//    }
//    return result
// }

const sum1 = (num1, ...numbers) => { // (num1, ...numbers) = (num1 = 25 - its number; ...numbers = [25,20,30] - its array)
     let result = num1; // declare variable "result" assign value of num1 = 25
     
 
     for (let i = 0; i < numbers.length; i++) { // Please go through my array "...numbers"
       result += numbers[i]; // for every iteration - add element of array with corresponding index (i = 0 - take element of array with index 0 (numbers[0]))
     }
   
     return result; 
 };

console.log(sum1(1)); // -> 1
console.log(sum1(1, 15)); // -> 16
console.log(sum1(25, 25, 20,)); // -> 70


//? Link 3. Task 5 

// Create a function in task-5-average.js.

// The function accepts any (amount of numbers = ...params) and returns their mean average.The mean average of a set of numbers is calculated by adding them all up (I will need summary) and dividing // the result of the addition by the amount of numbers in the set ( by the amount of arguments)

const average = (...nums) => {
    let sum = 0;
    for (let char of nums) {
        sum += char / nums.length // sum = sum + char / nums.length
    }                             // sum = 0 + 12/3 = 4
                                  // sum = 4 + 14/3 = 4 + 4.66 = 8.66
                                  // sum = 8.66 + 16/3 = 8.66 + 5.33 = 13.99
    return sum;
}

console.log(average(0)); // -> 0 
console.log(average(1, 2)); // -> 1.5 
console.log(average(1, 3, 6, 10)); // -> 5
console.log(average(12, 14, 16)); // -> 14


                                  
//? For Loop
// The for statement is a type of loop that will use up to three optional expressions to implement the repeated execution of a code block. 
// Syntax: for (initial Point; conditional statement;afterthought)
// In this example we making sum of all elements with even indexes

const sumOfNumbers = (...nums) => {
    let sum = 0;
    for (let i = 0; i < nums.length; i+=2) {
        sum += nums[i]
    }                              
    return sum

}

console.log(sumOfNumbers(0)); // -> 0 
console.log(sumOfNumbers(1, 2)); // -> 1
console.log(sumOfNumbers(1, 3, 6, 10)); // -> 7
console.log(sumOfNumbers(12, 14, 16)); // -> 28

//? For…In Loop
// The for...in statement iterates over the properties of an object. To demonstrate, we will make a simple shark object with a few name:value pairs.

const shark = {
	species: "great white",
	color: "white",
	numberOfTeeth: Infinity
}

// Using the for...in loop, we can easily access each of the property names.

// Print property names of object
for (attribute in shark) {
	console.log(attribute);
}

//? For…Of Loop
// The for...in statement is useful for iterating over object properties, but to iterate over iterable objects like arrays and strings, we can use the for...of statement. 

// Initialize array of shark species
let sharks = [ "great white", "tiger", "hammerhead" ];

// Print out each type of shark
for (let shark of sharks) {
	console.log(shark);
}


//? map() - array method

// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

const array1 = [1,4,9,16];

//New Array   
//   |   Declared Array
//   |         |     New element of New Array
//   |         |         |   How to modify new element in New Array in relation to element in Declared Array
//   |         |         |      |
const map1 = array1.map((x) => x*2);

console.log(map1);

//? Task 1: Title Case Converter
//Scenario:
//You're working on a text utility and need to convert a string to title case (capitalize the first letter of each word). Create a function //convertToTitleCase that takes a string as input and returns the string in title case.


function convertToTitleCase(string) {
    // return string.toLowerCase().split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
    let newArray = string.toLowerCase().split(" ") // Declare an array which is input transformed to lower case and into array
    console.log(newArray);
    let transformedArray = newArray.map(word => word[0].toUpperCase() + word.slice(1)) // Declare new array which has transformed elements in relation to newArray
    console.log(transformedArray);
    let newStr = transformedArray.join(" "); // Convert transformedArray into string
    return newStr // return string
}


const sentence = 'this is a title case example';
console.log(convertToTitleCase(sentence)); // Output: "This Is A Title Case Example"

//? Task 2: Calculate Factorial with Default Parameter

//Scenario:
//You need to calculate the factorial of a number using a recursive function with a default parameter. Create a function calculateFactorial //that takes a number as input and calculates its factorial using recursion. If no number is provided, assume the factorial is 1. 
// Example of factorial  6! = 1x2x3x4x5x6

  // Test
console.log(calculateFactorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)
console.log(calculateFactorial()); // Output: 1 (default parameter)

//? Task 3: Generate Random Password with Rest Parameter

// Scenario:
// You're building a password generator that takes different parameters to generate a password. Create a function generateRandomPassword that // generates a random password with a specified length. It should also allow including optional special characters.

  // Test
console.log(generateRandomPassword(8)); // Output: Random password of length 8
console.log(generateRandomPassword(10, '@$#')); // Output: Random password of length 10 with special characters