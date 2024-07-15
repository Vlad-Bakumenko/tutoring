"use strict";
/*
1. npm init -y (initializes a new package.json file in your current directory with default values.)
2. npm i typescript (install the TypeScript npm package. This package adds TypeScript support to your Node.js project)
3. npx tsc --init ( initialize a tsconfig.json file in your current working directory )
4. Create file.ts
5. npm install -D ts-node (installs the ts-node package as a development dependency in your project.) || npm install -g ts-node (installs the ts-node package globally on your system.)
6. npx tsc --watch (to start the TypeScript compiler in watch mode)
7. ts-node your-file.ts (execute your TypeScript file directly, without compiling it to JavaScript first)
*/
/*

? Types of functions

* 1. Function Declarations

*/
function calcArea(radius) {
    return Math.PI * radius * radius;
}
console.log(calcArea(5));
// * 2. Function Expressions
// A function expression is a function that is defined as an expression, rather than a declaration. It is often used as an argument to a higher-order function or as a return value from a function.
const greet = function (name) {
    console.log(`Hello,${name}!`);
};
greet("Zhanna");
// * 3. Arrow Functions
// An arrow function is a concise way to define a function expression.
const double = (x) => x * 2;
console.log(double(5));
// * 4. Anonymous Functions
// An anonymous function is a function that is defined without a name. It is often used as an argument to a higher-order function or as a return value from a function.
setTimeout(function () {
    console.log("1 second ran out");
}, 1000);
// * 5. Higher-Order Functions + Callback Functions
// A higher-order function is a function that takes another function as an argument or returns a function as a result.
function filter(arr, predicate) {
    const result = [];
    for (const x of arr) {
        if (predicate(x)) {
            result.push(x);
        }
    }
    return result;
}
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filter(numbers, (x) => x % 2 === 0);
console.log(evenNumbers);
const oddNumbers = filter(numbers, (x) => x % 2 !== 0);
console.log(oddNumbers);
const gtOne = filter(numbers, (x) => x > 1);
console.log(gtOne);
async function fetchUser(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.json(); //! json() method returns a any type by default
}
fetchUser(1).then((user) => console.log(user));
/*
fetchUser(1).then((user) => console.log(user));
In TypeScript, when you define an interface, it only exists at compile-time and is erased at runtime. This means that interfaces don't have any impact on the actual runtime behavior of your code.

In our case, when you define an empty interface User {}, it's essentially a "dummy" interface that doesn't provide any type information. However, because the json() method returns a any type by default, the TypeScript compiler won't complain even if you assign the result to a variable with a type of User[].

At runtime, the fetch API will still return the JSON data, and the json() method will parse it into a JavaScript object. Because the User interface is empty, it won't provide any type checking or validation for the data.
*/
async function fetchUserAndConsoleLog(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    console.log(data);
}
fetchUserAndConsoleLog(1);
// * 7. Constructor Functions + Method
// A constructor function is a special type of function that is used to create objects. It is called with the new keyword, and it returns an object that is an instance of the constructor.
class Rectangle {
    width; // if we specify without "constructor" - //! Property 'width' has no initializer and is not definitely assigned in the constructor.
    height; // if we specify without "constructor" - //! Property 'height' has no initializer and is not definitely assigned in the constructor.
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const rect = new Rectangle(4, 5);
console.log(rect);
console.log(rect.getArea());
class Employee {
    username;
    #password;
    monthlyWages;
    constructor(username, password, monthlyWages) {
        this.username = username;
        this.#password = password;
        this.monthlyWages = monthlyWages;
    }
    getAnnualWages() {
        return this.monthlyWages * 12;
    }
    getEmployee() {
        return `${this.username} has password ${this.#password} and earn ${this.monthlyWages} per month`;
    }
}
const emplOne = new Employee("john", "j1234", 1800);
console.log(emplOne);
console.log(emplOne.getAnnualWages());
console.log(emplOne.getEmployee());
// Which property can we have:
// - public (by default - read and adjust)
// - private (it can only be accessed within the class itself, not from outside the class)
// - readOnly (only read)
