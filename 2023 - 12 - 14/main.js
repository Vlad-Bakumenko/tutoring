//? Functions, properties, methods

//? Function
// A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value and return an output.

function square(number) {
    return number*number;
}

console.log(square(4)); // 16

const result = function square1(num) {
    return num*num;
}

console.log(result(5)); // 25

const result1 = numb => numb*numb;

console.log(result1(6));

//? Property
// A JavaScript property is a member of an object that //! associates a key with a value.

console.log(Math.PI); // Math - object, PI - property (key with a value)

//! Math.PI is actually:
// const Math = {
//     PI: 3.141592653589793
// };

console.log(Math.E);

//! Math.E is actually:
// const Math = {
//     E : 2.718281828459045
// }


//? Method
// A method is a function which is a property of an object.

// "Built-in" methods

let greeting = "Hello World";
console.log(greeting.length); // This is property
console.log(greeting.includes("l")); // This is method
console.log(greeting.slice(0, 5)); // This is method

//? We can make our own methods. There are different syntaxes how to do it inside object

// Old syntax

const person = {
    name: "John",
    age: 30,
    greet : function () { // This is the old syntax
        return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
    }
}

console.log(person.greet());

// Shorthand Method ES6

const person1 = {
    name: "Jane",
    age: 25,
    greet() { // Shorthand Method ES6
        return `ES6 shorthand method : Hello, my name is ${person1.name} and I am ${person1.age} years old.`;
    }
}

console.log(person1.greet());

// We can also use parameters in methods

const person2 = {
    name: "Jake",
    age: 36,
    calcChildren: function (param1 = 0, param2 = 0) { // Case when we are using parameters 
        return `He has ${param1} sons and ${param2} daughters. Total ${param1 + param2} children`;
    }
}

console.log(person2.calcChildren(2,3));
console.log(person2.calcChildren());

// Syntax for arrow function 

const person3 = {
    name: "Joshua",
    age: 45,
    // Syntax for arrow function
    calcChildrens : (param1, param2) => `He has ${param1} sons and ${param2} daughters. Total ${param1 + param2} children`
}

console.log(person3.calcChildrens(3, 8));

//? There are 2 ways how to define method outside of object, that we learnt so far

const obj = {}

obj.name = "Alex" // here i add name property with value "Alex"
obj.juice = function (mainIngredient, ...ingredients) { // here i add method "juice" to object
    if (ingredients.length === 0) { // if person not provide any additional ingredients
        return `Just eat your ${mainIngredient}`;
    } else { // if person provide additional ingredients
        const otherIngredients = ingredients.join(", ") // convert array into string
        return `If you combine ${mainIngredient} with ${otherIngredients} you will get ${mainIngredient}-${otherIngredients} juice.`;
    }
}


const obj2 = {}

obj2.juice = obj.juice // we create property for obj2 and refer to method of obj

console.log(obj.juice("orange", "apple"));
console.log(obj2.juice("pineapple", "mango"));




function calcFruits(a, b) { // We just create function declaration
    return a+b;
}

const obj3 = {
    calculationOfFruits : calcFruits // Refer function to method of object
}

console.log(obj3.calculationOfFruits(2,3));

//? “this” in methods

//? ## 1. Global Context
// In the global scope, `this` refers to the global object, which is usually `window` in a browser environment.

console.log(this); // {}

//? ## 2. Function Context

// Inside a function, `this` depends on how the function is called. If the function is a regular function, `this` will also refer to the global object. However, if the function is a method of an object, `this` will refer to that object.

function showGlobal() {
     return this;
}

console.log(showGlobal());

const myObject = {
    showObject : showGlobal
}

console.log(myObject.showObject());

//? ## 3. Object Context
// Inside an object, `this` refers to the object itself. It allows you to access and modify the object's properties and methods.
// Use case of "this"

const myCar = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
//    displayInfo : function () {
//        return `My car is a ${this.year} ${this.brand} ${this.model}`
//    }
//    displayInfo : function () {
//        return `My car is a ${myCar.year} ${myCar.brand} ${myCar.model}`
//    }
      displayInfo() {
            return `My car is a ${myCar.year} ${myCar.brand} ${myCar.model}`
        }
    
}

console.log(myCar.displayInfo());

const yourCar = {
    brand: "Porshe",
    model: "Cayenne",
    year: 2022,
}

yourCar.displayInfo = myCar.displayInfo // Copy method from "myCar"

console.log(yourCar.displayInfo());


let user = {
    name: "John",
    age: 30,
    sayHi() {
//        return user.name; 
          return this.name;
    }
}

let admin = user; // admin = { name: 'John', age: 30, sayHi: [Function: sayHi] } , user = { name: 'John', age: 30, sayHi: [Function: sayHi] }
console.log(admin); 
console.log(user); 

user = null;

console.log(user);

console.log(admin.sayHi()); // if we uncomment line 194 - Error, because we are referring to user.name ; and if we use line 195 - then we will refer to admin.name 

//? Destructuring an object with `this`:

const box = {
    height: 12,
    width: 50, 
    length: 10,
    volume: volumeCalculator
}

const box2 = {
    height: 40,
    width: 50,
    length: 25,
    volume: volumeCalculator,
}

// Example without parameters, we are referring to properties of object
function volumeCalculator() {
    const {height, length, width} = this // saying to function: if you will work with such property as length, width, height then refer to such properties of current object
//    return this.height*this.width*this.length;
    return height*width*length;
}

console.log(box.volume());
console.log(box2.volume());

// Example: Destructuring parameters with "this"
const person4 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    introduce: function ({ firstName, lastName, age }) {
      return `Hello, my name is ${firstName} ${lastName}, and I'm ${age} years old.`;
    },
  };
  
  // Call the object method with destructuring
  console.log(person4.introduce(person4));

  //? Arrow Function as a Method and `this`
  // Unlike regular functions, arrow functions DO NOT HAVE  their own `this` context. Instead, they inherit `this` from the surrounding scope, which in this case is the global context.

  const myCar1 = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
  
    displayInfo: function () {
      return `My car is a ${this.year} ${this.brand} ${this.model}.`;
    },
    displayYear : () => `The year of my car is ${this.year}.`
}; 

console.log(myCar1.displayInfo()); // My car is a 2020 Toyota Camry.
console.log(myCar1.displayYear()); // The year of my car is undefined.