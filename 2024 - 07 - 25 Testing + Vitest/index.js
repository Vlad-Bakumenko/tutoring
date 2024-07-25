// Function "sum"
export function sum(a, b) {
    if (typeof a !== "number" || typeof b !== "number" || a < 0 || b < 0) {
        return NaN;
    }
  return a + b;
}

// Function "max"

export function max(a, b) {
    return a > b ? a : b
}

// FizzBuzz

export function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
    if (num % 3 === 0) return "Fizz";
    if (num % 5 === 0) return "Buzz";
    return num.toString();
}

// calcAverage

export function calcAverage(array) {
    if (array.length === 0) return NaN;

    const sum = array.reduce((acc, currentValue)=> acc + currentValue/array.length, 0);

    return sum;
}

// factorial (4! = 4*3*2*1)
// 0! = 1, 1! = 1

export function factorial(num) {
    if (num < 0) return undefined;
    if (num === 0 || num === 1) return 1;
    return num * factorial(num-1);
}