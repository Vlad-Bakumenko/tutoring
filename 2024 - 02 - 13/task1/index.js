// Task 1
console.log("before");

setTimeout(() => console.log("Reading from the database"), 3000);

console.log("after");

// Task 2

 let randomNum = Math.random();

 const promise = new Promise((resolve, reject) => {
    if (randomNum > 0.5) {
      resolve('data is successfully fetched');
    } else {
      reject('Failed to fetch data');
    }
  });


// Task 3
promise
  .then((value) => console.log(value)) // if promise is resolved log "data is successfully fetched"
  .catch((error) => console.log(error)) // if promise is rejected log "Failed to fetch data"
  .finally(() => console.log("Operation successful")); // if promise is settled log "Operation successful"

// Task 4

function delay(ms) {
    return new Promise((resolve)=>{ // return new instance of promise
        setTimeout(resolve, ms, "Fulfilled") //setting resolve promise resolved log "Fulfilled"
    }).then(value=>console.log(value)) // if promise resolved - log "Fulfilled"
}
// Use of the delay function


delay(2000);