/*
! Testing is only for development and not for production mode

? Types of Tests

1. Unit tests
Unit tests are very low level and close to the source of an application. They consist in testing individual methods and functions of the classes, components, or modules used by your software. Unit tests are generally quite cheap to automate and can run very quickly by a continuous integration server.

2. Integration tests
Integration tests verify that different modules or services used by your application work well together. For example, it can be testing the interaction with the database or making sure that microservices work together as expected. These types of tests are more expensive to run as they require multiple parts of the application to be up and running.

3. End-to-end tests
End-to-end testing replicates a user behavior with the software in a complete application environment. It verifies that various user flows work as expected and can be as simple as loading a web page or logging in or much more complex scenarios verifying email notifications, online payments, etc...

? Why Vitest

1. Vite powered
2. Jest compatible

? Conventional naming

Create "__tests__" however there is also case for "tests"

Inside of "__tests__" files with naming pattern

1) <nameOfTheFileWeWantToTest>.test.js 
2) <nameOfTheFileWeWantToTest>.spec.js

? Test-Driven-Development (TDD)

Write test code first => later based on that you write development code

? test 
Alias: it 
test defines a set of related expectations. It receives the test name and a function that holds the expectations to test. 
Callback - AAA concept (Arrange, Act, Assert)

? test.skip
Alias: it.skip
If you want to skip running certain tests, but you don't want to delete the code due to any reason, you can use test.skip to avoid running them.

? test.only
Alias: it.only
Use test.only to only run certain tests in a given suite. This is useful when debugging.

? test.each
Alias: it.each
Use test.each when you need to run the same test with different variables.

? describe

When you use test in the top level of file, they are collected as part of the implicit suite for it. Using describe you can define a new suite in the current context, as a set of related tests and other nested suites. A suite lets you organize your tests so reports are more clear.

? expect
expect is used to create assertions. In this context assertions are functions that can be called to assert a statement. 

? expect.soft

expect.soft functions similarly to expect, but instead of terminating the test execution upon a failed assertion, it continues running and marks the failure as a test failure. All errors encountered during the test will be displayed until the test is completed.

? toBe
toBe can be used to assert if primitives are equal or that objects share the same reference. It is equivalent of calling expect(Object.is(3, 3)).toBe(true). If the objects are not the same, but you want to check if their structures are identical, you can use toEqual.

! Try not to use toBe with floating-point numbers. Since JavaScript rounds them, 0.1 + 0.2 is not strictly 0.3. To reliably assert floating-point numbers, use toBeCloseTo assertion.

? toBeCloseTo

Use toBeCloseTo to compare floating-point numbers. The optional numDigits argument limits the number of digits to check after the decimal point. For example:

? toEqual

toEqual asserts if actual value is equal to received one or has the same structure, if it is an object (compares them recursively). You can see the difference between toEqual and toBe in this example:

? not
Using not will negate the assertion. 

? toBeDefined

toBeDefined asserts that the value is not equal to undefined. Useful use case would be to check if function returned anything.

? toBeUndefined
Opposite of toBeDefined, toBeUndefined asserts that the value is equal to undefined. Useful use case would be to check if function hasn't returned anything.

? toBeTruthy
toBeTruthy asserts that the value is true when converted to boolean. Useful if you don't care for the value, but just want to know it can be converted to true.

? toBeFalsy
toBeFalsy asserts that the value is false when converted to boolean. Useful if you don't care for the value, but just want to know if it can be converted to false

? toBeNull

toBeNull simply asserts if something is null. Alias for .toBe(null).

? toBeNaN

toBeNaN simply asserts if something is NaN. Alias for .toBe(NaN).

? toBeTypeOf

toBeTypeOf asserts if an actual value is of type of received type.

? toContain

toContain asserts if the actual value is in an array. toContain can also check whether a string is a substring of another string. Since Vitest 1.0, if you are running tests in a browser-like environment, this assertion can also check if class is contained in a classList, or an element is inside another one.

? toContainEqual

toContainEqual asserts if an item with a specific structure and values is contained in an array. It works like toEqual inside for each element.

? toMatch

toMatch asserts if a string matches a regular expression or a string

? toHaveLength

toHaveLength asserts if an object has a .length property and it is set to a certain numeric value.


? toMatchObject

toMatchObject asserts if an object matches a subset of the properties of an object.

You can also pass an array of objects. This is useful if you want to check that two arrays match in their number of elements, as opposed to arrayContaining, which allows for extra elements in the received array.

? toBeGreaterThan

toBeGreaterThan asserts if actual value is greater than received one. Equal values will fail the test.

? toBeGreaterThanOrEqual

toBeGreaterThanOrEqual asserts if actual value is greater than received one or equal to it.

? toBeLessThan

toBeLessThan asserts if actual value is less than received one. Equal values will fail the test.

? toBeLessThanOrEqual

toBeLessThanOrEqual asserts if actual value is less than received one or equal to it.

? beforeEach

Register a callback to be called before each of the tests in the current context runs. If the function returns a promise, Vitest waits until the promise resolve before running the test.

Optionally, you can pass a timeout (in milliseconds) defining how long to wait before terminating. The default is 5 seconds.

? afterEach

Register a callback to be called after each one of the tests in the current context completes. If the function returns a promise, Vitest waits until the promise resolve before continuing.

Optionally, you can provide a timeout (in milliseconds) for specifying how long to wait before terminating. The default is 5 seconds.

? beforeAll

Register a callback to be called once before starting to run all tests in the current context. If the function returns a promise, Vitest waits until the promise resolve before running tests.

Optionally, you can provide a timeout (in milliseconds) for specifying how long to wait before terminating. The default is 5 seconds.

? afterAll

Register a callback to be called once after all tests have run in the current context. If the function returns a promise, Vitest waits until the promise resolve before continuing.

Optionally, you can provide a timeout (in milliseconds) for specifying how long to wait before terminating. The default is 5 seconds.

*/
