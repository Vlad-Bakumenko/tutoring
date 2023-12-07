import readlineSync from 'readline-sync';
// Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions.

// console.log("text1\n" + "text2");
// console.log(`text1
// text2`);

// const apples = 5;
// const oranges = 6;
// const potatoes = 7;
// const cucumbers = 8;
// const isFruit = true;

// console.log("Jane has " + (apples+oranges) + " fruits");
// console.log(`Jane has ${isFruit} fruits, ${potatoes+cucumbers} vegetables`);

//String properties and methods

//A method is a function which is a property of an object.

// console.log(Math.ceil(2.5));

let sentence = "Hello world";
// including whitespaces
// length - property
console.log(sentence.length); // quantity of chars, counting from 1
console.log(sentence[6]); // position of char, counting from 0 
console.log(sentence[10]); 
console.log(sentence[sentence.length-1]); // sentence[11-1] = sentence[10]
console.log(sentence[sentence.length-2]); // targeting the char from backwards

//lowerCase, UpperCase - method

console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());

//slice(), substring() - methods

console.log(sentence.slice(3,5)); // slice(StartIndex, EndIndex)
console.log(sentence.slice(-5)); // counting from backwards

console.log(sentence.substring(9,4)); // auto swap to (4,9) and can`t use negative values. Result - o wor

//includes() - method

console.log(sentence.includes("o wor"));

let x = "Dawn of the Dead"
console.log(x.includes("d"));


//ReadlineSync

const myName = readlineSync.question(`What's your name?`);
console.log(`nice to meet you, ${myName}!`);