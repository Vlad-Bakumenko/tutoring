//? Link 2. Exercise 1

const isItemInArray = function(array, item) {
    if (array.includes(item)) {
        return true;
    } else {
        return false;
    }
}

console.log(isItemInArray(["apple", "pear", "banana"], "kiwi")); // false
console.log(isItemInArray(["apple", "pear", "banana"], "mango")); // false
console.log(isItemInArray(["apple", "pear", "banana"], "apple")); // true

//? Link 2. Exercise 2

const getIndexOf = function(array, item) {
    return array.indexOf(item);
}

console.log(getIndexOf(["apple", "pear", "banana"], "kiwi")); // -1
console.log(getIndexOf(["apple", "pear", "banana"], "banana")); // 2
console.log(getIndexOf(["apple", "pear", "banana"], "apple")); // 0

//? Link 2. Exercise 3

const reverseString = (string) => {
    let newStr = "";
    for (let i = 0; i < string.length;i++) {
        newStr = string[i] + newStr; // newStr = "t"; newStr = "a" + "t" = "at" ... newStr = "e" + "lbat"
    }
    
    return newStr;
}

console.log(reverseString("table")); // "elbat"
console.log(reverseString("blabla")); // "albalb"
console.log(reverseString("")); // ""
console.log(reverseString("tomato")); // "otamot"
console.log(reverseString("cat")); // "tac"

//? Link 2. Exercise 4

const repeatString = (string, n) => {
    let str = "";
    for (let i = 0; i < n;i++) {
        str += string;
    }
    return str;
}

// return string.repeat(n)

console.log(repeatString("table", 3)); // "tabletabletable"
console.log(repeatString("cat", 5)); // "catcatcatcatcat"
console.log(repeatString("dog", 0)); // ""
console.log(repeatString("", 5)); // ""
console.log(repeatString("+", 10)); // "++++++++++"

//? Link 2. Exercise 5

// const removeVowels = (string) => {
//     let vowels = "aeiouAEIOU";
//     let array = string.split("");
//     let newArray = [];
//     for (let i = 0; i < array.length;i++) {
//         if (!vowels.includes(array[i])) {
//             newArray.push(array[i]);
//         }
//     }
//     return newArray.join("");
// }

const removeVowels = (string) => {
    let vowels = "aeiou";
    let newStr = "";
    for (let char of string) {
        if (!vowels.includes(char.toLowerCase())) {
            newStr += char;
        }
    }
    return newStr;
}


console.log(removeVowels("table")); // "tbl"
console.log(removeVowels("JavaScript")); // "JvScrpt"
console.log(removeVowels("AEIOU")); // ""
console.log(removeVowels("ABCDe")); // "BCD"

//? Task 4 from Livecoding

const mixedArr = [
    "cd player",
    NaN,
    "",
    "guitarist",
    "doppelganger",
    undefined,
    "tire",
    "pianist",
    3,
    "character",
  ];

    //? 4. write a function `endingWithR`
// takes an array as an argument
// iterate the array and find the strings that ends with "r"
// collect them in an array

function endingWithR(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "string" && array[i].endsWith("r")) { // if (typeof array[i] === "string" && array[i].slice(-1) === "r")
            newArr.push(array[i]);
        }
    }
    
    return newArr;
    
}

console.log(endingWithR(mixedArr));


//? function declaration vs function expression

// The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions. 
// Function expressions in JavaScript are not hoisted, unlike function declarations. You can't use function expressions before you create them

// console.log(getNum(3,4)); // If i can call function before its declaration - it`s hoisted 

// function getNum(num1,num2) { // This is function declaration
//     statement;
//     return blabla;
// }


// const getNumber = function(num3,num4) { // This is function expression
//     statement;
// }

// console.log(getNumber(5,6)); // With Func.Expression i can`t call function before it`s declaration


//! Difference = Func.Decl. is hoisted + cant be anonymous; Func.Expression - isn`t hoisted, but can be anonymous


// const getNumber = function addNum(num3,num4) { //! When we are working with function expression and have name of function in it - we can`t call function with its name out of it, but with name of variable to which it assigned
//     return num3 + num4;
// }

// console.log(getNumber(3,5));

// const logMeExpressionNamed = function named() { // This function - recursive, because the act of a function calling itself
//     named(); 
//     return "I am logMe expression named";
// }

// console.log(logMeExpressionNamed()); 

//? Arrow function expression
// compact alternative for function expression 
// has limits (we learn this later)
// always anonymous, not hoisted

//! syntax
// const arrowExpression = (parameter,parameter) => {
//     return "Something";
//     return "I am arrow function expression";
// }

// if there's only one parameter, we can omit ()
// const arrowExpression1 = parameter => {
//     return "Something";    
//     return "I am arrow function expression1"
// }

// if there's one line in a function body, we can omit {} & return (if there's a return keyword)
// const arrowExpression2 = parameter => "I am arrow function expression2"

// if there's no parameter, we can just use _ instead
// const arrowExpression3 = _ => "I am arrow function expression3"