//? .map()

//! Main purpose: transformation of elements of given array and storing them in new array

//* Syntax
// arrayToMap.map((element, index, array)=> {})

/* 
element: each element iterated from the array
index(optional): index of each element
array(optional): the array we make use of
{} - function (how transform element)
*/

const array1 = [1, 4, 9, 16];

//New Variable
//   |   Declared Array
//   |         |     The current element being processed in the array.
//   |         |         |   A function to execute for each element in array. Its return value is added as a single element in new array.
//   |         |         |               |
const map1 = array1.map((element) => element * 2);

console.log(map1); // [2, 8, 18, 32]



//? Array.filter()

//! Main purpose: filter elements from the given array that pass the test implemented by the provided function. (MDN)

//* syntax
// arrayToFilter.filter((element, index, array)=> {})

/* 
element: each element iterated from the array
index(optional): index of each element
array(optional): the array we make use of
{}: function that implements test condition
*/

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: ["exuberant", "destruction", "present"]


//? .find()

//! Main purpose: finds and returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

//* syntax
// arrayToFind.find((element, index, array)=> {})

// element: The current element being processed in the array.

// index: The index of the current element being processed in the array.

// array: The array find() was called upon.

// {}: function that implements test condition


const array2 = [5, 12, 8, 130, 44];

const found = array2.find((element) => element > 10);

console.log(found); // 12



//? reduce()

//! Main purpose: build and return *single value*

// * 1. reduce() syntax:

// arrayToReduce.reduce(callbackFunction, [initialValue]);

// initialValue: If initialValue is specified, callbackFn starts executing with the first value in the array as currentValue. If initialValue is not specified, accumulator is initialized to the first value in the array, and callbackFn starts executing with the second value in the array as currentValue.

// * callbackFunction syntax:

// (accumulator, currentValue, [index], [array] => {})

// accumulator: a value which is updated after each iteration, and returned once all iterations are complete
// currentValue: a placeholder for the current element from the original array
// {} - a function in which we indicate how the current value will affect the accumulator 

const basicArray = [ 1, 2, 3, 4, 5 ];

const sum = basicArray.reduce((accumulator, currentValue) => accumulator + currentValue); // in this example initialValue = basicArray[0], first iteration: accumulator + basicArray[1]
console.log(sum); //15

const sum1 = basicArray.reduce((accumulator, currentValue) => accumulator + currentValue, 10) // in this example initialValue = 10, first iteration: accumulator + basicArray[0]
console.log(sum1);

const concat1 = basicArray.reduce((accumulator, currentValue) => accumulator + currentValue, "") // in this example initialValue = "", first iteration: accumulator + basicArray[0] (""+1 = "1"), second iteration: accumulator + basicArray[1] ("1"+2 = "12")
console.log(concat1);

//? forEach()

//! Main purpose: to modify elements of current array but without returning new array 
//! Always return undefined
// - its callback accepts 3 arguments:
//     - element
//     - (optional) index
//     - (optional) array

const output = [];
const animals = ["tiger", "cat", "lion"];

console.log(animals.forEach((animal) => output.push(animal+ "s")));
console.log(output);
console.log(animals);

//? sort()

//! Main purpose: sort 

// - with or without callback
// * unlike other array methods such filter() and map(), it mutates the original array
// - make a copy and apply sort() if you don't want the original array changed

// compareFn(a, b) return value	           sort order
//  |                                          |
// > 0	                           sort a after b, e.g. [b, a]
// < 0	                           sort a before b, e.g. [a, b]
// === 0	                        keep original order of a and b


// function compareFn(a, b) {
//     if (a is less than b by some ordering criterion) {
//         return -1;
//       } else if (a is greater than b by the ordering criterion) {
//         return 1;
//       } else {
//         //a must be equal to b
//         return 0;
//       }
//     }


const numbers = [109, 33, 6, 7, 22, 1, 5, 83, 42];

//! working with strings, numbers
console.log(numbers.sort((a, b) => a < b ? -1 : a > b ? 1 : 0)); // ascending order
console.log(numbers.sort((a, b) => a < b ? 1 : a > b ? -1 : 0)); // descending order

//! when working with numbers, we can use - operator
console.log(numbers.sort((a,b) => a - b)) // ascending
console.log(numbers.sort((a,b) => b - a)) // descending



//Scenario: Given an array of product objects, increase the price of each product by 20%, and then filter out products with a price less than $100.

const products = [
    { name: "Laptop", price: 1200 },
    { name: "Phone", price: 80 },
    { name: "Tablet", price: 75 },
    { name: "Speaker", price: 300 },
    { name: "Samsung", price: 500 },
    { name: "Headphones", price: 200 }
  ];

//const increasedPrice = products.map(element => element.price*1.2).filter(item => item < 100);
const increasedPrice = products.map(element => ({...element, price: element.price*1.2})).filter(item => item.price < 100);

console.log(increasedPrice);

//Scenario: Given an array of employee objects, calculate the average salary of all employees and create a new array with their names and salaries.

const employees = [
    { name: "Alice", salary: 50000, position : "principal" },
    { name: "Bob", salary: 60000, position : "principal" },
    { name: "Charlie", salary: 75000, position : "principal" },
    { name: "John", salary: 78000, position : "principal" },
    { name: "Bob", salary:  71000, position : "principal" },
    { name: "Mike", salary: 62000, position : "principal" }
  ];

const avgSalary = employees.reduce((accumulator,employee)=> accumulator + employee.salary, 0) / employees.length

console.log(avgSalary);

const namesAndSalaries = employees.map(employee => ({name : employee.name , salary: employee.salary}))

console.log(namesAndSalaries);

//Scenario: Given an array of book objects, filter out books published before 2000 and sort the remaining books alphabetically by title.

const books = [
    { title: "The Great Gatsby", year: 1925 },
    { title: "To Kill a Mockingbird", year: 1960 },
    { title: "1984", year: 1949 },
    { title: "Blabla", year: 2005 },
    { title: "Yoohoo", year: 2023 },
    { title: "Lala", year: 1949 },
  ];

const filterBook = books.filter(book => book.year < 2000).sort((a, b) => (a.title < b.title ? 1 : a.title > b.title ? -1 : 0));

console.log(filterBook);

//Scenario: Given an array of employee objects, use forEach to increase the salary by 15% and then create a new array with their names and updated salaries.

const employees1 = [
    { name: "Alice", salary: 50000, position: "principal" },
    { name: "Bob", salary: 60000, position: "principal" },
    { name: "Charlie", salary: 75000, position: "principal" },
    { name: "Danny", salary: 72000, position: "principal" },
    { name: "George", salary: 76000, position: "principal" },
  ];

employees1.forEach((employee) => employee.salary*=1.15)// employee.salary = employee.salary*1.15

console.log(employees1);


const updSalaries = employees1.map(item => ({name : item.name, salary : item.salary}))

console.log(updSalaries);

// Tasks from Livecoding

const clients = [
    {
      id: 1,
      f_name: "Abby",
      l_name: "Thomas",
      married: false,
      age: 72,
      isMember: true,
      expense: 500,
      purchased: ["Shampoo", "Toys", "Book", "Hand creme"],
    },
    {
      id: 2,
      f_name: "Jerry",
      l_name: "Tom",
      married: true,
      age: 65,
      isMember: false,
      expense: 100,
      purchased: ["Stick", "Blade", "Shampoo"],
    },
    {
      id: 3,
      f_name: "Dianna",
      l_name: "Cherry",
      married: true,
      age: 22,
      isMember: true,
      expense: 1500,
      purchased: [
        "Lipstick",
        "Sunblock",
        "Nail Polish",
        "Bag",
        "Airtight container",
      ],
    },
    {
      id: 4,
      f_name: "Dev",
      l_name: "Currian",
      married: true,
      isMember: false,
      age: 82,
      expense: 90,
      purchased: ["Book"],
    },
    {
      id: 5,
      f_name: "Maria",
      l_name: "Gomes",
      married: false,
      isMember: true,
      age: 18,
      expense: 300,
      purchased: ["Toys", "Book", "Aftershave"],
    },
  ];
  
  //? 1-1. list the first names of clients from A to Z (e.g Abbey, Dev ...)
 
  const mappedClients = clients.map((client) => {
    return client.f_name;
  });
  
  console.log(mappedClients.sort());
  //? 1-2. list the last names of clients who are member of service
  
  const lastNameMembers = clients.filter(item => item.isMember === true).map(item => item.l_name);
  console.log(lastNameMembers);


  //? 2-1. get the sum of expenses from all clients

  const sumOfExpenses = clients.reduce((acc, client) => acc + client.expense, 0 );
  console.log(sumOfExpenses);
  
  //? 2-2. get the youngest client's name

  // const youngestClient = clients.reduce((acc,client) => acc.age < client.age ? acc.f_name : client.f_name)    
  // console.log(youngestClient);

  const sortedClients = [...clients].sort((a, b) => (a.age < b.age ? -1 : a.age > b.age ? 1 : 0)).map(client => client.f_name); // we creating ascending order of objects according to age and then transform object, take fname prop-ty from it and store in new array
  
  //? 3-1. say, the age of retirement is 65. Calculate how many years are left for each client in an array.
  /*   [
      '7 years ago',
      'this year',
      '43 years left',
      '17 years ago',
      '47 years left'
    ]  */

    // const retirement = clients.map(item => 65 - item.age < 0 ? `${Math.abs(65 - item.age)} year${Math.abs(65 - item.age) > 1 ? "s" : ""} ago` : 65 - item.age > 0 ? `${65 - item.age} year${65 - item.age > 1 ? "s" : ""} left` : "this year");

    const yearsToRetireMap = clients.map(client => {
      const ageToRetire = 65;
      if (ageToRetire > client.age){
          return `${ageToRetire - client.age} years left`
      } else if (ageToRetire < client.age){
          return `${client.age - ageToRetire} years ago`
      } else return `this year`   
    });

    console.log(yearsToRetireMap);
  
  //? 3-2. this time, write a function `yearsToRetire()`
  // takes a number(id) and an array(clients) as inputs
  // checks the client's age and calculate the years till retirement
  // returns a message  'xx years ago', 'xx years left', or 'this year'
  
  function yearsToRetire(objId, array) {
    for (let item of array) {
        if (item.id === objId) {
            return 65 - item.age < 0 ? `${Math.abs(65 - item.age)} year${Math.abs(65 - item.age) > 1 ? "s" : ""} ago` : 65 - item.age > 0 ? `${65 - item.age} year${65 - item.age > 1 ? "s" : ""} left` : "this year";
        }
    }
  }

  console.log(yearsToRetire(1, clients));
  console.log(yearsToRetire(2, clients));
  console.log(yearsToRetire(3, clients));
  console.log(yearsToRetire(4, clients));
  console.log(yearsToRetire(5, clients));

  //? 4. sort by age (from youngest to oldest)

  const youngestToOldest = [...clients].sort((a,b) => a.age - b.age);
  console.log(youngestToOldest);
  
  //? 5. sort the married ones first

//   const marriedFirst = clients.map(item => item).sort((a,b) => b.married - a.married);
//   console.log(marriedFirst);

  const marriedFirst = [...clients].sort((a,b) => b.married - a.married);
  console.log(marriedFirst);


  
  //? 6. search for the client whose fist name is "Dianna", get the array of purchased items, sort them from Z to A

  const diannaObj = clients.find(item => item.f_name === "Dianna")

  const sortedDiannaItems = [...diannaObj.purchased].sort((a,b)=> (a < b ? 1 : a > b ? -1 : 0))


console.log(sortedDiannaItems);


// Bonus Tasks

// Task 1

function findGreater(arr, num) {
    const newArr = arr.filter(item => item > num);
    return newArr;
}

console.log(findGreater([3, 4, 5, 10], 4)); // [5, 10]


// Task 2

function howManyVowels(string) {
    const finalArr = string.split("").filter(item => "aeiou".includes(item));
    return finalArr.length;
}

console.log(howManyVowels("count this string")) // 4

// Task 3

function getLongestWord(string) {
    const finalArr = string.split(" ").reduce((acc, currItem) => {
        if (currItem.length > acc.length) {
            return currItem;
        } else {
            return acc;
        }
        
    })
    return finalArr;
}


console.log(getLongestWord("tell me which word is the longest from this string")); // longest

// Task 4

function fourLettered(arr) {
    const finalArr = arr.filter(item => item.length === 4);
    return finalArr;
}

console.log(fourLettered(["John", "James", "Jack", "Jacek", "Jeanne"])) // ["John", "Jack"]

// Task 5

function vowelCounter(string) {
     const initialArr = string.split("");
     const finalObj = initialArr.reduce((acc,currItem)=>{
        if ("aeiou".includes(currItem) && !acc[currItem]) {
            acc[currItem] = 1;
        } else if ("aeiou".includes(currItem) && acc[currItem]) {
            acc[currItem]+= 1;
        } else {
            return acc;
        }
        return acc;
     }, {}) 
     return finalObj  
}

console.log(vowelCounter("Count all the vowels from this string?")); // { o: 3, u: 1, a: 1, e: 2, i: 2 }

// Task 6

function toCamelCase(string) {
    const newArr = string.split("_").map((item,index) => {
        if(index === 0) {
           return item.toLowerCase();
        } else {
            return item[0].toUpperCase() + item.slice(1).toLowerCase();
        }
    })
    return newArr.join("")
}

console.log(toCamelCase("HelLo_worlD")) // helloWorld
console.log(toCamelCase("JavaSripT_iS_fun")); // javascriptIsFun


// Task 7

function getUnique(arr) {
    const finalObj = arr.reduce((acc,currItem)=>{
        if (!acc[currItem]) {
            acc[currItem] = 1;
        } else if (acc[currItem]) {
            acc[currItem]+= 1;
        } else {
            return acc;
        }
        return acc;
     }, {}) 
     const uniqueNumber = arr.reduce((acc, num) => {
        if (finalObj[num] === 1) {
          
          return num;
        }
        
        return acc;
      });
    
      
      return uniqueNumber;
    }

console.log(getUnique([3, 3, 3, 7, 3, 3])) // 7
console.log(getUnique([0, 0, 0.77, 0, 0])) //0.77