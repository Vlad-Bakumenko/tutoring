//? setTimeout() 
// This method sets a timer which executes a function or specified piece of code once the timer expires(delay before execution).

// syntax: 
// setTimeout(functionRef, delay, return value)

// functionRef - A function to be executed after the timer expires.
// delay - The time, in milliseconds that the timer should wait before the specified function or code is executed. If this parameter is omitted, a value of 0 is used, meaning execute "immediately", or more accurately, the next event cycle.

function sayHi() {
    alert("Hi");
}

function sayGutenTag() {
    alert("GutenTag");
}

function sayBye() {
    alert("Bye");
}


// function testLog() {
//     setTimeout(()=> console.log("1.started")) 
//     console.log("2.scheduled")
//     console.log("3.done")
// }

//! 1st argument for setTimeout should always be callback function

function testLog() {
    sayHi();
    setTimeout(()=>sayGutenTag(), 5000)
    setTimeout(()=>sayBye(), 10000)
}

testLog();