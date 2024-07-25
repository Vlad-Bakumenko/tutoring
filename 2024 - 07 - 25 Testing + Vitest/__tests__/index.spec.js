import { expect, test, it, describe, toBe } from "vitest";
import { sum, max, fizzBuzz, calcAverage, factorial } from "../index.js";

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3)
// })

// Function "sum"

// Function should take numbers as parameter and only positive numbers

describe("sum", () => {
  it.skip("should add 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it.skip("should take only numbers as an argument otherwise give NaN", () => {
    expect(sum("1", 2)).toBe(NaN);
  });
  it("should take only positive numbers", () => {
    expect(sum(-1, 3)).toBe(NaN);
  });
});

// Function "max"

describe("max", () => {
  it("should return the first arg if it's greater", () => {
    expect(max(2, 1)).toBe(2);
  });

  it("should return the second arg if it's greater", () => {
    expect(max(1, 4)).toBe(4);
  });

  it("should return the first arg if args are equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});

// FizzBuzz

describe("fizzBuzz", () => {
  it("should return FizzBuzz if arg is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return FizzBuzz if arg is only divisible by 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it("should return FizzBuzz if arg is only divisible by 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it("should return arg as a string if it is not divisible by 3 or 5", () => {
    expect(fizzBuzz(1)).toBe("1");
  });
});


// calcAverage

describe("calcAvg", ()=> {
  it("should return NaN if given empty array", ()=> {
    expect(calcAverage([])).toBe(NaN)
  })

  it("should calculate the average of an array with single element", ()=> {
    expect(calcAverage([2])).toBe(2)
  })

  it("should calculate the average of an array with two elements", ()=> {
    expect(calcAverage([2,4])).toBe(3)
  })

  it("should calculate the average of an array with three elements", ()=> {
    expect(calcAverage([3,4,5])).toBe(4)
  })
})

// factorial 

describe("factorial", ()=> {
  it("should return 1 if given 0", ()=> {
    expect(factorial(0)).toBe(1)
  }) 

  it("should return 1 if given 1", ()=> {
    expect(factorial(1)).toBe(1)
  })

  it('should return 2 if given 2', () => {
    expect(factorial(2)).toBe(2);
  });

  it.only('should return 6 if given 3', () => {
    expect(factorial(3)).toBe(6);
  });

  it.only('should return 24 if given 4', () => {
    expect(factorial(4)).toBe(24);
  });

  it("should return undefined if given negative number", ()=> {
    expect(factorial(-1)).toBeUndefined();
  })
})