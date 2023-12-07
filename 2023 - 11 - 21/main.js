/*
    Task 7:
    You want to check if the sales of sci-fi, crime and comic books all together surpassed the sales 
    of the same period last year and if they reached the set goal for this year.

    - calculate the sum of the 3 department sales
    - write an if...else statement that prints:
        - a sad face, if sales are less than the ones from last year
        - "good, but we can do better", if sales are greater than the sales from last year, but less than the goal
        - "YEEEEEEESSSS!", if sales are greater than the goal

*/

// let sciFiDepartmentSales = 151;
// let crimeDepartmentSales = 152;
// let comicBookDepartmentSales = 153;
// let totalSalesLastYear = 400;
// let totalSalesGoal = 800;
// //    456                     151                   152                       153
// let totalThisYear = sciFiDepartmentSales + crimeDepartmentSales + comicBookDepartmentSales;

// //       456                  400
// if (totalThisYear < totalSalesLastYear) {
//     console.log(`sad face`);
// //                 456             400                 456              800
// } else if (totalThisYear > totalSalesLastYear && totalThisYear < totalSalesGoal) {
//     console.log(`good, but we can do better`);
// } else {
//     console.log(`YEEEEEEESSSS!`);
// }

/*
    Task 8:
    The marketing team is running a promotion on weekends.

    - write an if...else statement to apply a 50% discount to the price of books 
    if the day is Saturday or Sunday

*/

// let day = "Saturday";
// let bookPrice = 16;

// if (day === "Saturday" || day === "Sunday") {
//     console.log(`Price is ${bookPrice/2}`);
// } else {
//     console.log(`Price is ${bookPrice}`);
// }

// && - AND, || - OR, ! - NOT

// &&(AND) - its true if ALL operands is true

// let x = 3;
// let y = -2;

// console.log(x > 0 && y < 0);

// // ||(OR) - its true if ONE of operands is true

// //           true     false
// console.log(x > 0 || y > 0);

// //! When we are using && and || in one statement, && - executes first, and then || executes

// console.log(x>y && x+y > 0 || y > x);
// // 1 step: true && true = true
// // 2 step: true || false = true

// //          3<-2   3+(-2)<0  -2 < 3
// console.log(x<y && x+y < 0 || y < x);
// // 1 step: false && false = false
// // 2 step: false || true = true

// //! We can use () to set checking order (increase priority of logical operation)

// console.log(x<y && (x+y < 0 || y < x));
// // 1 step:          false   || true = true
// // 2 step: false && true = false

// // NOT (!) takes truth to falsity and vice versa

// let isRaining = false;
// console.log(!isRaining);

/*
    Task 3:
    You also receive the report from the Comic Book department.
    Similar to Task 2, check that at least one of the three departments sold enough.

    - write an if...else statement that prints true if at least one of the 3 sales amount is in the range between 200 and 500, false otherwise
    - test with different values
*/

// let sciFiDepartmentSales = 300;
// let crimeDepartmentSales = 0;
// let comicBookDepartmentSales = 0;
// //                check if sciFi in range 200 - 500 (true)           OR           check if crime in range 200 - 500 (false) OR
// if (sciFiDepartmentSales >= 200 && sciFiDepartmentSales <=500 || crimeDepartmentSales >=200 && crimeDepartmentSales <=500 ||
//     // check if comic in range 200-500 (false)
//     comicBookDepartmentSales >= 200 && comicBookDepartmentSales <=500) {
//     console.log("Did at least one of the 3 sales amount is in the range between 200 and 500 books?", true);
// } else {
//     console.log("Did at least one of the 3 sales amount is in the range between 200 and 500 books?", false);
// }

// Ternary(Conditional) operator (?)
// alternative to if...else statement
// ! Difference - its expression, not statement
// ! I can use it in template literals and assign conditional expression to variable

// let whatIsWeather = "warm";
// //                                       Check what is value assigned to variable - if strictly equal to "warm" then print value of its variable, if false - print "cold"
// console.log(`The weather will be today ${whatIsWeather === "warm" ? whatIsWeather : "cold" }`);

// Syntax: condition ? ifTrue : ifFalse

// let isMember = false;
// // Check if isMember true or false - if true(2.00) : if false(10.00)
// isMember ? console.log(`$2.00`) : console.log(`$10.00`);

// * Create 2 variables, `discount` and `cartTotal`, and assign 2 numerical values
// * of your choice
// *
// * Create another variable `amountToPay`.
// *
//   - otherwise it should be equal to the difference between `cartTotal` and `discount`
// * - this variable should be equal to 0 if `discount` is larger than `cartTotal`
// *
// *
// */

// let cartTotal = 80;
// let discount = 90;

//! With conditional operator (?) we can assign value to variable, because structure in which we use conditional operator - is expression

//            Check if cartTotal > discount then if true print this string and calculate me (cartTotal - discount), or if false print that you have to pay 0
// let amountToPay = cartTotal > discount ? `With a discount of ${discount}€ you have to pay ${cartTotal-discount}€.` : `With a discount of ${discount}€ you have to pay 0€.`

// console.log(amountToPay);

//! With if statement we can`t assign value to variable, because statement - is intstruction
// let amountToPay = if (cartTotal > discount) {
//     console.log(`With a discount of ${discount}€ you have to pay ${cartTotal-discount}€.`)
// } else {
//     console.log(`With a discount of ${discount}€ you have to pay 0€.`)
// }

// Block scope - {}. We can use it if we want to re-declare variable

// // Global scope
// let basicSalary = 20;
// let workHours = 160;
// //                     20      * 160 = 3200
// let monthlySalary = basicSalary*workHours
// console.log(`Junior receive ${monthlySalary}`);

// //Block scope
// //! We can use variables from global scope in block scope, but not vice versa

// {
//     // Re-declaring variable basicSalary and mothlySalary
//     let basicSalary = 40;
//     let monthlySalary = basicSalary*workHours;
//     console.log(`Senior receive ${monthlySalary}`);
// }

//! If .. else approach to bonus task
// let registeredNum = 8;

// if (registeredNum > 0 && registeredNum < 100) {
//     if (registeredNum % 9 === 0 && registeredNum % 15 === 0) {
//         console.log(`mouse and keyboard for you`)
//     } else if (registeredNum % 15 === 0) {
//         console.log(`keyboard for you`)
//     } else if (registeredNum % 9 === 0) {
//         console.log(`mouse for you`)
//     } else {
//         console.log(`Register: ${registeredNum}`)
//     }
// } else if (registeredNum >= 100) {
//     console.log(`event is over`)
// } else {
//     console.log(`noone is registered`)
// }

//! Ternary operator approach

let registeredNum = 47;

let message =
// Check if variable strictly equal to zero
  registeredNum === 0
  // if true - print "noone joined"
    ? `no one joined yet`
    // if false, check if value of variable is greater than 100
    : registeredNum > 100
    // if true - print "event is over"
    ? `event is over.`
    // if false - check if variable with division by 9 got remainder = 0 and in the same time with division by 15 got remainder = 0
    : registeredNum % 9 === 0 && registeredNum % 15 === 0
    // if true - print "a keyboard and a mouse for you!"
    ? `a keyboard and a mouse for you!`
    // if false - check if variable with division by 9 got remainder = 0
    : registeredNum % 9 === 0
    // if true - print "mouse for you"
    ? "a mouse for you!"
    // if false - check if variable with division by 15 got remainder = 0 
    : registeredNum % 15 === 0
    // if true - print "a keyboard for you!"
    ? "a keyboard for you!"
    // if false - print "Registered Number"
    : `registered number:${registeredNum}`;

console.log(message);
