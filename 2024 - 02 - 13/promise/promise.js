//? Promise

// A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.


// A Promise is in one of these states:
// - pending: initial state, neither fulfilled nor rejected.
// - resolved/fulfilled: meaning that the operation was completed successfully.
// - rejected: meaning that the operation failed.

// Syntax for producer:
// const instanceOfPromise = new Promise((resolve f, reject f) => {
//   resolve() / reject()
// })

// Alternative

// let promise = new Promise(function(resolve, reject) {    
    // Make an asynchronous call and either resolve or reject
//});

// Returning value 
// When called via new, the Promise constructor returns a promise object. The promise object will become resolved when either of the functions resolveFunc or rejectFunc are invoked.

// A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step.

let isLoaded = false;

// const promise = new Promise((resolve,reject)=>{
//     if(!isLoaded) {
         //setTimeout(reject, 5000, "error")
//        
//     }
//     setTimeout(resolve, 5000, "Success!");
//     })

//console.log(promise);


//? Consumer functions

// The then() method of Promise instances takes up to two arguments: callback functions for the fulfilled and rejected cases of the Promise. It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.

// The catch() method of Promise instances schedules a function to be called when the promise is rejected. It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.

// The finally() method of Promise instances schedules a function to be called when the promise is settled (either resolved/fulfilled or rejected). It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.
//The finally() method can be useful if you want to do some processing or cleanup once the promise is settled, regardless of its outcome.

// promise.then((value)=> console.log(value)).catch((error)=> console.log(error)).finally(()=> console.log("Operation is done"))

const fruitArr = ["🍎", "🍒", "🍌"];

// `getFruits(arr)` 
// - accepts an array as argument
// - return a promise object
//     - fulfilled: turns an array into string joined by "+" e.g.) ["🍎", "🍒"] ===>  🍎+🍒
// - set timer to resolve the promise after 3 seconds

// * `getPie(fruitStr)`  
// - accepts the fruit string returned from `getFruits`
//     - (if it's an empty string, no fruits) rejected: `here's 🥐, instead!`
//     - fulfilled: `here's [fruitStr]!`
// */

function getFruits(arr) {
    const fruitsPromise = new Promise((resolve) => {
        // if (arr.length === 0) {
        //     reject ("error")
        // } else {
            setTimeout(() => resolve(arr.join("+")), 3000);
        // }
    });

    //console.log(fruitsPromise); // Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "🍎+🍒+🍌"

    return fruitsPromise;
    
  }

//console.log(getFruits(fruitArr)); // Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "🍎+🍒+🍌"

function getPie(fruitStr) {
    const piePromise = new Promise((resolve, reject) => { // evaluating if it resolved or rejected coming here inside of promise instance and on line 100 we just set an instruction what to do in resolved/rejected/finally cases
      if (!fruitStr.length) {
        reject(`here's 🥐, instead!`);
      }
      resolve(`here's ${fruitStr} 🥟!`);
    });
    return piePromise;
  }

// console.log(getPie("🍎+🍒+🍌")); // Promise {<fulfilled>: "here's 🍎+🍒+🍌 🥟!"}


// getFruits(fruitArr).then((value)=> console.log(value, typeof value)) // "🍎+🍒+🍌 string"

getFruits(fruitArr).then((value)=> getPie(value))// 1) Run function getFruits with fruitArr argument; 2) If Promise instance is resolved, then pass its value ([[PromiseResult]]: "🍎+🍒+🍌") as argument to function getPie
.then((result)=>console.log(result)).catch((error)=> console.log(error)).finally(()=>console.log("done"))
