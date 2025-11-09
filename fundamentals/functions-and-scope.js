// -- Functions defined by the user --

// Simple function
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice"); // Calling the function

// with return value

function add(a, b) {
    return a + b;
}
let sum = add(5, 3);
console.log("Sum: ", sum); // Output: Sum:  8

// function with default parameters
function multiply(a, b = 2) {
    return a * b;
}
let product1 = multiply(4); // b will use the default value of 2
let product2 = multiply(4, 3); // b will be 3
console.log("Product1: ", product1); // Output: Product1:  8
console.log("Product2: ", product2); // Output: Product2:  12

// functions with multiple returns
function divideAndRemainder(a, b) {
    let quotient = Math.floor(a / b);
    let remainder = a % b;
    return { quotient, remainder };
}
let result = divideAndRemainder(10, 3);
console.log("Quotient: ", result.quotient);
console.log("Remainder: ", result.remainder);

// functions with a variable number of arguments
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
let total = sumAll(1, 2, 3, 4, 5);
console.log("Total Sum: ", total); // Output: Total Sum:  15

// functions with a variable number of arguments and key-value pairs
function createObject(...args) {
    let obj = {};
    args.forEach(arg => {
        let [key, value] = arg;
        obj[key] = value;
    });
    return obj;
}
let myObj = createObject(['name', 'Bob'], ['age', 25], ['city', 'New York']);
console.log("Created Object: ", myObj); // Output: Created Object:  { name: 'Bob', age: 25, city: 'New York' }

// -- Functions inside functions (Nested Functions) --
function outerFunction(x) {
    function innerFunction(y) {
        return y * 2;
    }
    return innerFunction(x) + 3;
}
let nestedResult = outerFunction(5);
console.log("Nested Function Result: ", nestedResult); // Output: Nested Function Result:  13

// -- Language-defined functions --
// Using some built-in JavaScript functions

// parseInt
let intString = "42";
let intValue = parseInt(intString);
console.log("Parsed Integer: ", intValue); // Output: Parsed Integer:  42
console.log("Type of Parsed Integer: ", typeof intValue); // Output: Type of Parsed Integer:  number

// parseFloat
let floatString = "3.14";
let floatValue = parseFloat(floatString);
console.log("Parsed Float: ", floatValue); // Output: Parsed Float:  3.14
console.log("Type of Parsed Float: ", typeof floatValue); // Output: Type of Parsed Float:  number

// isNaN
let notANumber = "hello";
console.log("Is NaN: ", isNaN(notANumber)); // Output: Is NaN:  true
// Note: isNaN (is not a number) tries to convert the value to a number first

// Number.isNaN
let actualNaN = NaN;
console.log("Is Actual NaN: ", Number.isNaN(actualNaN)); // Output: Is Actual NaN:  true
// Note: Number.isNaN does not convert the value, it checks if it's exactly NaN

// toString
let num = 255;
let hexString = num.toString(16); // Convert number to hexadecimal string
console.log("Hexadecimal String: ", hexString); // Output: Hexadecimal String:  ff

// toFixed
let decimalNum = 3.14159;
let fixedNum = decimalNum.toFixed(2); // Round to 2 decimal places
console.log("Fixed Number: ", fixedNum); // Output: Fixed Number:  3.14

// Math.sqrt
let squareRoot = Math.sqrt(16);
console.log("Square Root: ", squareRoot); // Output: Square Root:  4

// Math.random
let randomNum = Math.random(); // Random number between 0 and 1
console.log("Random Number: ", randomNum);

// -- Local and Global Scope --
let globalVar = "I am a global variable";

function scopeExample() {
    let localVar = "I am a local variable";
    console.log(globalVar); // Accessing global variable
    console.log(localVar); // Accessing local variable
}

scopeExample();
// console.log(localVar); // This would cause an error because localVar is not defined in the global scope

// -- Anonymous Functions and Arrow Functions --

// Anonymous function assigned to a variable
let anonFunc = function(name) {
    return "Hello, " + name + "!";
};
console.log(anonFunc("Charlie")); // Output: Hello, Charlie!

// Arrow function
let arrowFunc = (a, b) => a + b;
console.log("Arrow Function Sum: ", arrowFunc(10, 15)); // Output: Arrow Function Sum:  25

// Arrow function with multiple lines
let complexArrowFunc = (x) => {
    let squared = x * x;
    return squared + 10;
};
console.log("Complex Arrow Function Result: ", complexArrowFunc(4)); // Output: Complex Arrow Function Result:  26

// -- Exercise --
function twoParametersAndCountNumbers(text1, text2) {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("${param1} ${param2}");
        } else if (i % 3 === 0) {
            console.log(text1);
        } else if (i % 5 === 0) {
            console.log(text2);
        } else {
            console.log(i);
            count++;
        }
    }
    return count;
}

let finalCount = twoParametersAndCountNumbers("Fizz", "Buzz");
console.log("Total numbers printed (not multiples of 3 or 5): ", finalCount);