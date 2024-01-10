//#region 1

//? Callback function

// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action. (MDN)

//? Higher order function

// A higher-order function is a function that takes another function(s) as an argument(s) and/or returns a function to its callers. (MDN)

function calculate(num1, num2, callback) {
  // function calculate - higher order function
  return callback(num1, num2); // callback - placeholder for callback functions
}

function multiply(num1, num2) {
  return num1 * num2;
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

//    higher order function  callback function
//              |                |
console.log(calculate(10, 15, multiply)); // 10*15 = 150
console.log(calculate(15, 20, add)); // 15+20 = 35
console.log(calculate(30, 20, subtract)); // 30 - 20 = 10

//#endregion

//#region 2

// 3 syntaxes for :
// function declaration
function add1(num1, num2) {
  return num1 + num2;
}

// function expression
const add2 = function (num1, num2) {
  return num1 + num2;
};

// arrow function
const add3 = (num1, num2) => num1 + num2;
const elementExample = (element) => element * 2;

//? Array.prototype.map()

// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array. (MDN)

const array1 = [1, 4, 9, 16];

//New Variable
//   |   Declared Array
//   |         |     The current element being processed in the array.
//   |         |         |   A function to execute for each element in the array. Its return value is added as a single element in the new array.
//   |         |         |               |
const map1 = array1.map((element) => element * 2);

console.log(map1); // [2, 8, 18, 32]

// element
// The current element being processed in the array.

// index
// The index of the current element being processed in the array.

// array
// The array map() was called upon.

const map2 = array1.map((element, index) => element * index);

console.log(map2); // [1*0, 4*1, 9*2, 16*3]

//#endregion

//#region 3

//? Array.prototype.filter()

// The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function. (MDN)

//* syntax
// arrayToFilter.filter((element, index, array)=> {})

/* 
element: each element iterated from the array
index(optional): index of each element
array(optional): the array we make use of
*/

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

//#endregion

//#region 4

//? Array.prototype.find()

// The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned. (MDN)

// element
// The current element being processed in the array.

// index
// The index of the current element being processed in the array.

// array
// The array find() was called upon.

const array2 = [5, 12, 8, 130, 44];

const found = array2.find((element) => element > 10);

console.log(found); // 12

//! Breakfast example

const breakfasts = [
  {
    name: "Janna",
    style: "traditional",
    origin: "Turkey",
    carbs: ["bread", "pastries"],
    protein: {
      meat: { menu: "chicken" },
      other: { menu: "or something other" },
    },
    soup: false,
    drinks: ["water", "coffee", "milk", "tee"],
    perWeek: 1,
    rating: 5,
  },
  {
    name: "Andres",
    style: "traditional",
    origin: "France",
    carbs: ["brioche", "eggs", "cheese", "ham", "bechamel sauce", "dressing"],
    protein: { meat: { menu: "ham" }, other: { menu: "fish" } },
    soup: false,
    drinks: ["juice", "coffee", "milk", "water"],
    perWeek: 1,
    rating: 4.5,
  },
  {
    name: "Stefano",
    style: "traditional",
    origin: "Venezuela",
    carbs: ["arepa", "empanadas"],
    protein: {
      meat: {
        menu: "salsa",
      },
      other: {
        menu: "picante",
      },
    },
    soup: false,
    drinks: ["water", "coffee", "tea", "juice", "soda", "milk", "beer"],
    perWeek: 3,
    rating: 4.5,
  },
  {
    name: "Tomislav",
    style: "modern",
    origin: "Croatia",
    carbs: "bread",
    /* protein: ["gouda"], */
    protein: {
      meat: { menu: "salami" },
      other: { menu: "gouda" },
    },
    soup: false,
    drinks: ["juice"],
    perWeek: 3,
    rating: 4,
  },
  {
    name: "Musa",
    style: "traditional",
    origin: "Turkey",
    carbs: ["bread", "french fries", "pastry"],
    protein: {
      meat: { menu: "salami" },
      other: { menu: null },
    },
    soup: false,
    drinks: ["tea", "coffee", "water", "fruit juices", "milk"],
    perWeek: 2,
    rating: 5,
  },
  {
    name: "Vlad",
    style: "traditional",
    origin: "USA",
    carbs: ["bread", "muffin"],
    protein: { meat: { menu: "bacon" }, other: { menu: [Array] } },
    soup: false,
    drinks: ["coffee", "milk", "water"],
    perWeek: 3,
    rating: 4,
  },
  {
    name: "Victory",
    style: "traditional",
    origin: "Eastern Nigeria",
    carbs: [
      "bread",
      "akara",
      "cereals",
      "rice",
      "potatoes",
      "muffin",
      "pastries",
    ],
    protein: {
      meat: {
        menu: "chicken",
      },
      other: {
        menu: "goat",
      },
    },
    soup: false,
    drinks: ["water", "coffee", "tea", "juice", "soda", "milk"],
    perWeek: 3,
    rating: 4.5,
  },
  {
    name: "Alexis",
    style: "modern",
    origin: "France",
    carbs: ["bread", "pastries"],
    protein: {
      meat: { menu: "ham" },
      other: { menu: "eggs" },
    },
    soup: false,
    drinks: ["coffee", "tea", "juice"],
    perWeek: 3,
    rating: 5,
  },
  {
    name: "Ognjen",
    style: "traditional", // I guess it is traditional...
    origin: "Japan",
    carbs: ["rice", "miso soup", "pickles"],
    protein: {
      meat: {
        menu: "grilled fish",
      },
      other: {
        menu: "tamagoyaki",
      },
    },
    soup: true,
    drinks: ["green tea"],
    perWeek: 3,
    rating: 4.6,
  },
  {
    name: "Worlanyo",
    style: "modern",
    origin: "Ghana",
    carbs: ["bread"],
    protein: {
      meat: {
        menu: "fried eggs",
      },
      other: {
        menu: null,
      },
    },
    soup: false,
    drinks: ["water", "tea", "milk"],
    perWeek: 5,
    rating: 4,
  },
  {
    name: "Lucas",
    style: "traditional",
    origin: "Brazil",
    carbs: ["pasta", "bread"],
    protein: {
      meat: { menu: "picanha" },
      other: { menu: "eggs" },
    },
    soup: false,
    drinks: ["water"],
    perWeek: 4,
    rating: 5,
  },
  {
    name: "Mir",
    style: "traditional",
    origin: "Afghanistan",
    carbs: ["bread", "eggs", "olive", "dates", "honey"],
    protein: {
      meat: {
        menu: "Adana",
      },
      other: {
        menu: "beans",
      },
    },
    soup: false,
    drinks: ["water", "tea", "milk"],
    perWeek: 4,
    rating: 3,
  },
  {
    name: "Shinhee",
    style: "fusion",
    origin: "South Korea",
    carbs: ["rice", "pancakes"],
    protein: { meat: { menu: "bulgogi" }, other: { menu: null } },
    soup: true,
    drinks: ["water", "coffee", "juice", "iced tea"],
    perWeek: 1,
    rating: 4.1,
  },
  {
    name: "Poli",
    style: "modern",
    origin: "Brazil",
    carbs: ["tapioca"],
    protein: {
      meat: { menu: "eggs" },
      other: { menu: "tofu" },
    },
    soup: false,
    drinks: ["coffee"],
    perWeek: 4,
    rating: 4,
  },
  {
    name: "Adam",
    style: "traditional",
    origin: "polish",
    carbs: [],
    protein: {
      meat: { menu: "ham" },
      other: { menu: "eggs" },
    },
    soup: false,
    drinks: ["coffee"],
    perWeek: 3,
    rating: 5,
  },
];

let avgRating = 0;

for (let bfObj of breakfasts) {
  avgRating += bfObj.rating / breakfasts.length;
}

// The Array.isArray() static method determines whether the passed value is an Array.

function isAboveAvg(name, array) {
  if (typeof name !== "string" || !Array.isArray(array) || array.length === 0) {
    return "invalid input";
  }

  const passingObj = array.find((item) => item.name === name);
  if (!passingObj) {
    return "no name found";
  }

  return passingObj.rating > avgRating ? "above average" : "below average";
}

console.log(isAboveAvg("Andres", breakfasts));
console.log(isAboveAvg("Vlad", breakfasts));
console.log(isAboveAvg("Jamie", breakfasts));
console.log(isAboveAvg(NaN, breakfasts));

//#endregion

//#region 5

//? Tasks from Link 1

/* Exercise 1
 * The simpleMap() function below takes a number and a function in input
 *
 * It should return the result of applying that function to the number.
 * Complete the code below to get the correct output
 */

function simpleMap(number, callback) {
  let result = callback(number);

  return result;
}

function double(number) {
  return number * 2;
}

console.log(simpleMap(2, double)); // expected output: 4
console.log(simpleMap(3, double)); // expected output: 6
console.log(simpleMap(50, double)); // expected output: 100
console.log(simpleMap(0, double)); // expected output: 0

/** Exercise 2
 * The simpleMap() function below takes a number and a function in input
 *
 * It should return the result of applying that function to the number.
 *
 * Complete the code below by declaring the missing functions (double(), square(), triple())
 * to get the correct output
 */

function simpleMap(number, callback) {
  let result = callback(number);

  return result;
}

function double(number) {
  return number * 2;
}

function square(number) {
  //  return Math.pow(number,2)
  //    return number*number
  return number ** 2;
}

function triple(number) {
  return number * 3;
}

console.log(simpleMap(2, double)); // expected output: 4
console.log(simpleMap(3, square)); // expected output: 9
console.log(simpleMap(50, triple)); // expected output: 150
console.log(simpleMap(4, square)); // expected output: 16

/** Exercise 3
 * Complete the code for the function simpleMap():

 * - it should take a string and a function in input
 * - it should return the result of applying that function to the string
 *
 */

function simpleMap(string, callback) {
  return callback(string);
}

function greet(string) {
  return "Hey " + string;
}

function reverse(string) {
  return string.split("").reverse().join(""); // Here we convert our string into array of letters, reverse it, and after convert back to string
}

function capitalizeFirstAndLast(string) {
  return (
    string[0].toUpperCase() +
    string.slice(1, string.length - 1) +
    string[string.length - 1].toUpperCase()
  );
}

console.log(simpleMap("Mark", greet)); // expected output: "Hey Mark"
console.log(simpleMap("Lenny", reverse)); // expected output: "ynneL"
console.log(simpleMap("pizza", capitalizeFirstAndLast)); // expected output: "PizzA"

/** Exercise 4
 * The myMap() function below takes an array and a function in input
 *
 * Complete its code so that it returns the expected output
 */

function myMap(items, callback) {
  let result = [];
  for (let i = 0; i < items.length; i++) {
    // Here we iterate through array that we pass as an argument
    result.push(callback(items[i])); // Pushing into empty array items modified by callback function
  }

  return result;
}

function double(number) {
  return number * 2;
}

function square(number) {
  return number * number;
}

function greet(string) {
  return "Hey " + string;
}

function capitalizeFirstAndLast(string) {
  return (
    string[0].toUpperCase() +
    string.slice(1, string.length - 1) +
    string[string.length - 1].toUpperCase()
  );
}

console.log(myMap([1, 2, 3], double)); // expected output: [2, 4, 6]
console.log(myMap([2, 4, 10], square)); // expected output: [4, 16, 100]
console.log(myMap(["pizza", "broccoli", "ice cream"], capitalizeFirstAndLast)); // expected output: ["PizzA", "BroccolI", "Ice creaM"]
console.log(myMap(["Rufus", "Lisa", "July"], greet)); // expected output: ["Hey Rufus", "Hey Lisa", "Hey July"]

/** Exercise 5
 * The myMap() function below takes an array and a function in input
 *
 * Write the 3 functions and complete the calls to myMap() in order to get the expected output
 *
 */

function myMap(items, callback) {
  let result = [];
  for (let i = 0; i < items.length; i++) {
    result.push(callback(items[i]));
  }
  return result;
}

function plusNineHundred(num) {
  return num + 900;
}

function divideByTwo(num) {
  return num / 2;
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(myMap([1, 2, 3], plusNineHundred)); // expected output: [901, 902, 903]
console.log(myMap([2, 4, 10], divideByTwo)); // expected output: [1, 2, 5]
console.log(myMap(["Rufus", "Lisa", "July"], reverseString)); // expected output: ["sufuR", "asiL", "yluJ"]

/** Exercise 6
 * The myFilter() function takes an array and a function in input
 *
 * If the result of the callback is true, it pushes an item to the array, otherwise it ignores the item
 * It returns the filtered array
 *
 * Complete the code below to get the expected output
 */
function myFilter(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      // if after applying callback function to element of array that we pass as an argument we get truthy value
      result.push(array[i]); // then push original element into new array
    }
  }
  return result;
}

function isEven(number) {
  return number % 2 === 0;
}

function isOdd(number) {
  return number % 2 === 1;
}

console.log(myFilter([1, 2, 3, 4, 5], isEven)); // expected output: [2, 4]
console.log(myFilter([1, 2, 3, 4, 5], isOdd)); // expected output: [1, 3, 5]
console.log(
  myFilter(["pizza", "pasta", "ice cream", "potato", "broccoli"], (item) =>
    item.startsWith("p")
  )
); // expected output: ["pizza, "pasta", "potato"]
console.log(myFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (number) => number > 5)); // expected output: [6, 7, 8, 9, 10]

/** Exercise 7
 * The myFilter() function takes an array and a function in input
 *
 * If the result of the callback is true, it pushes an item to the array, otherwise it ignores the item
 * It returns the filtered array
 *
 * Complete the code below to get the expected output
 */
function myFilter(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

function longerThan5(string) {
  return string.length > 5;
}

console.log(myFilter(["house", "dog", "banana", "watermelon"], longerThan5)); // expected output: ["banana", "watermelon"]
console.log(
  myFilter(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    (number) => number % 3 === 0
  )
); // expected output: [3, 6, 9, 12]

/** Exercise 8
 * The myFilter() function takes an array and a function in input
 *
 * If the result of the callback is true, it pushes an item to the array, otherwise it ignores the item
 * It returns the filtered array
 *
 * Complete the code below to get the expected output
 */
function myFilter(array, callback) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArr.push(array[i]);
    }
  }
  return newArr;
}

function endsWithP(string) {
  return string[string.length - 1].toLowerCase() === "p";
}

console.log(myFilter(["grasp", "clash", "laptop", "mouse", "dish"], endsWithP)); // expected output: ["grasp", "laptop"]

console.log(
  myFilter(["a", "b", "c", "d", "e", "f", "g", "h", "i"], (letter) =>
    "aeiou".includes(letter.toLowerCase())
  )
); // expected output: ["a", "e", "i"]

//#endregion

//#region 6

//? Link 2

// Task 1
// Create a function called myMap that takes an array and a callback function in input.

// Inside, it applies the callback function to every element of the array.

// It returns a new array containing the values from the original array modified depending on the result of the callback.

// The function should work with different kind of inputs and different callbacks.

// Also write the functions to use as callbacks so that in the examples below, given the input on the left we get the output on the right.

function myMap(array, callback) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i])) // Pushing into empty array elements of array that we pass as an argument modified by callback function
    }
    return newArr
}

function double(num) {
    return num*2
}

function upperCaseString(string) {
    return string.toUpperCase()
}

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase()
}

console.log(myMap([1, 2, 3], double)); // [1, 2, 3] => [2, 4, 6]
console.log(myMap(["dish", "fork", "table"], upperCaseString)); // ["dish", "fork", "table"] => ["DISH", "FORK", "TABLE"]
console.log(myMap(["pizza", "beer", "fries"], capitalize)); // ["pizza", "beer", "fries"] => ["Pizza", "Beer", "Fries"]


// Task 2
// Create a function called myFilter that takes an array and a callback function in input.

// The function returns a new array containing only certain items, depending on the result of the callback.

// Write also the functions to use as callbacks so that in the examples below, given the input on the left we get the output on the right.

function myFilter(array, callback) {
    let newArr = [];
    for (let element of array) {
        if (callback(element)) {
            newArr.push(element)
        }
    }
    return newArr
}

function checkGreen (string) {
    return string.includes("green")
}

function greaterThanHundred(num) {
    return num >= 100
}

function checkEven(num) {
    return num % 2 === 0
}

console.log(myFilter(["red t-shirt", "blue jeans", "green shirt", "green hat", "red glasses"], checkGreen)); // ["green shirt", "green hat"]

console.log(myFilter([9.99, 100, 299.99, 27.99, 2.99, 99.99], greaterThanHundred)); // [100, 299.99]

console.log(myFilter([1, 2, 3, 4, 5, 6], checkEven)); // [2, 4, 6]

//#endregion

//#region 7

//? Bonus task

let clients = [
    {
       'id': 1,
       'f_name': 'Abby',
       'l_name': 'Thomas',
       'gender': 'M',
       'married': true,
       'age': 72,
       'expense': 500,
       'purchased': ['Shampoo', 'Toys', 'Book']
    },
    {
       'id': 2,
       'f_name': 'Jerry',
       'l_name': 'Tom',
       'gender': 'M',
       'married': true,
       'age': 65,
       'expense': 100,
       'purchased': ['Stick', 'Blade', 'Shampoo']
    },
    {
       'id': 3,
       'f_name': 'Dianna',
       'l_name': 'Cherry',
       'gender': 'F',
       'married': true,
       'age': 22,
       'expense': 1500,
       'purchased': ['Lipstik', 'Nail Polish', 'Bag', 'Book']
    },
    {
       'id': 4,
       'f_name': 'Dev',
       'l_name': 'Currian',
       'gender': 'M',
       'married': true,
       'age': 82,
       'expense': 90,
       'purchased': ['Book']
    },
    {
       'id': 5,
       'f_name': 'Maria',
       'l_name': 'Gomes',
       'gender': 'F',
       'married': false,
       'age': 7,
       'expense': 300,
       'purchased': ['Toys']
    }
 ];

 // Get the information about all the clients 65+ years old
 // 1. display items they purchased in a 'single array' of strings
//  2. remove duplicates from the array, use filter()

// 1 way without .filter() method 

function myFunc(array) { 
    const finalArr = [];
    for (let item of array) { // iterating through array that we pass as an argument (in our case array of objects)
        if (item['age'] >= 65) { // condition for prop-ty "age" of every element of array
            for (let element of item['purchased']) { // iterating through array "purchased" of every object that pass condition above 
              if (!finalArr.includes(element)) { // if in my finalArr there is no such element of "purchased" array of object that pass condition
                finalArr.push(element) // Push this element into finalArr
              }
            }
        }
    }
    
    return finalArr

}

console.log(myFunc(clients));


// 2 way with .filter() method

function getInfo(array) {
    let output = [];
    for (let object of array) {
      if (object.age >= 65) { // if prop-ty "age" of element of array (of object) passing condition
        output.push(...object.purchased) //! push in array "output" VALUES of "purchased" array of object that pass the condition 
        // our output on this stage ['Shampoo', 'Toys','Book','Stick','Blade','Shampoo','Book']
      }
    }
     output = output.filter((item, index) => output.indexOf(item) === index) // applying .filter() method with condition "output.indexOf(item) === index)" to ['Shampoo', 'Toys','Book','Stick','Blade','Shampoo','Book']
     // 1. 'Shampoo': indexOf = 0 === index = 0 - pass
     // 2. 'Toys': indexOf = 1 === index = 1 - pass
     // 3. 'Book': indexOf = 2 === index = 2 - pass
     // 4. 'Stick': indexOf = 3 === index = 3 - pass
     // 5. 'Blade': indexOf = 4 === index = 4 - pass
     //! 6. 'Shampoo': indexOf = 1 === index = 5 - not passing
     //! 7. 'Book': indexOf = 3 === index = 6 - not passing
  
    return output;
   }
  
  console.log(getInfo(clients));

// How indexOf works :

const arr1 = ["a", "b", "c", "d", "b"]

console.log(arr1.indexOf("b"));

// Worlanyo Solution
const anotherSolution = clients
.filter((obj) => obj.age >= 65) // filtering objects with prop-ty age >=65 from array "clients"
.map((obj) => obj.purchased); // fill "anotherSolution" array with arrays "purchased" of filtered objects 

const arr = [].concat(...anotherSolution); // takes all the elements from the nested arrays in anotherSolution and creates a new array (arr) containing these elements as a single flat array.

const removeDuplicates = arr.filter((item, index) => arr.indexOf(item) === index); // creating new array that contain filtered values
console.log(removeDuplicates);

//#endregion