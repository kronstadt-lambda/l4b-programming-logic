// --- Types of Commentary ---

// Page for Javascript: https://developer.mozilla.org/en-US/docs/Web/JavaScript

// multiline comment
/*
This is a multiline comment
*/

`
first line of comment
second line of comment
`

// --- Variables ---

var variable1 = "This is a variable declared with var"; // Old way to declare variables (Don't recommend using var)
let variable2 = "This is a variable declared with let"; // New way to declare variables. Can be reassigned
const variable3 = "This is a constant variable declared with const"; // Constant variable. Cannot be reassigned

console.log(variable1);
console.log(variable2);
console.log(variable3);

// --- Types of Data ---

// String
let stringData = "This is a string";
console.log(typeof stringData); // Output: string

// Number
let numberData = 42;
console.log(typeof numberData); // Output: number

// Boolean
let booleanData = true;
console.log(typeof booleanData); // Output: boolean

// Undefined
let undefinedData;
console.log(typeof undefinedData); // Output: undefined

// Null
let nullData = null;
console.log(typeof nullData); // Output: object (this is a known quirk in JavaScript)

// Object
let objectData = { name: "John", age: 30 };
console.log(typeof objectData); // Output: object

// Array
let arrayData = [1, 2, 3, 4, 5];
console.log(typeof arrayData); // Output: object (arrays are a type of object in JavaScript)

// Function
let functionData = function() { return "Hello"; };
console.log(typeof functionData); // Output: function

// Symbol
let symbolData = Symbol("unique");
console.log(typeof symbolData); // Output: symbol

// BigInt
let bigIntData = BigInt(9007199254740991);
console.log(typeof bigIntData); // Output: bigint