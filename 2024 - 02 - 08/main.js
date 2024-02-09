//? What is module?

// A module in JavaScript is just a file containing related code. (freeCodeCamp)

//? ES modules

// ESmodules is a standard that was introduced with ES6 (2015). The idea was to standarize how JS modules work and implement this features in browsers (which didn't previously support modules).

// ESmodules is a more modern approach that is currently supported by browser and server-side apps with Node.

//? How to implement ES modules in project

// 1) npm init -y ;
// 2) Now we go to our "package.json" and add "type": "module" ;
// 3) In HTML file in <script>: type = "module" ;

//? Purpose

// You create modules to better organize and structure your codebase. 
// You can use them to break down large programs into smaller, more manageable, and more independent chunks of code which carry out a single or a couple of related tasks.

//? Basic example structure

// index.html
// main.js
// modules/
//     canvas.js
//     square.js

//? Link to check examples - (https://github.com/mdn/js-examples/tree/main/module-examples)
 

//? How we get access to module(JS file) variables/functions/classes?

// This is done using the export statement.
// The export declaration is used to export values from a JavaScript module. 
//! With export you take function, variable, class and it's ready for importing(inserting) somewhere

//? Why in HTML-file in <script> we need to set: "type = module"?

// In order to use the export declaration in a source file, the file must be interpreted by the runtime as a module. In HTML, this is done by adding type="module" to the <script> tag, or by being imported by another module.

//? What we can export?

// You can export functions, var, let, const, and classes. They need to be top-level items; you can't use export inside a function.

//export function sayHi(name) { // I can export sayHi, because it's top-level item
//    return `Hello,${name}`
//export    function sayBye(name) { // but i can't export saynBye, because it's NOT top-level item
//        return `Bye,${name}`
//    }
//}

//? There are 2 types of export: default and named

// Every module can have two different types of export, named export and default export. 
// You can have multiple named exports per module but only one default export.

// if you export a single value from the module, or the module represents a main feature, then use default export

// if several variables - use named export


//? How we export?

// 1st way:

export function sayHi(name) {
    return  `Hello, ${name}!`;
}

//OR 2nd way - at the end of js-file:

function sayBye(name) {
    return  `Bye, ${name}!`;
}
function thankYou(name) {
    return  `Thank you, ${name}!`;
}
function bitte(name) {
    return  `bitte, ${name}!`;
}

export {sayBye, thankYou};

export default bitte;

//? How we import?

// Syntax for importing named variables: 
// import {name(-s) of function/variable/class} from "path to js-file where function/variable/class stored"

import { sayHi, thankYou } from ".index.js";

import { sayHi , thankYou } from ".index.js";
import { sayHi, thankYou, bitte} from ".index.js";


// Syntax for importing default variable: 
// import name(-s) of function/variable/class from "path to js-file where function/variable/class stored"
import bitte from ".index.js";

//! It's important - if you export as default, then import as default
//! If you export as named, then import as named


//? 3 special cases to remember:

//1) you can change the default export's name
import bitteMsg from ".index.js"

//2) you can change the named export's name with the keyword `as`
import { sayHi as hi } from ".index.js";

//3) import * `as` something - import everything from the module as an object

export  { sayHi, sayBye, thankYou };

// in new file where we imported

import * as dataIndexJs from ".index.js";

dataIndexJs.sayBye()

//? commonJS

// CommonJS is a set of standards used to implement modules on JavaScript.

// Node used to only support CommonJS to implement modules, but nowadays it also supports ESmodules which is a more modern approach.

// To implement modules and 
//! if you want to use commonJS standard, 
// you need a Node app on your computer first. So create one by running:
//1) npm init -y. 
//2) In package.json "type" : "commonjs" - by default, but if you see "type" : "module" , then change "module" on "commonjs"