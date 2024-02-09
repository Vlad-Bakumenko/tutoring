function sayHi(name) {
    return  `Hello, ${name}!`;
}

function sayBye(name) {
    return  `Bye, ${name}!`;
}

function thankYou(name) {
    return  `Thank you, ${name}!`;
}

//? How we export in "commonjs" standard?

// exports.sayHi = sayHi;
// exports.sayBye = sayBye;
// exports.thankYou = thankYou;

module.exports = { sayHi, sayBye, thankYou }