// Operators and Control Structures in JavaScript

// --- Operators ---
let a = 10;
let b = 3;

// Arithmetic Operators
console.log("sum ", a + b); // Addition
console.log("difference ", a - b); // Subtraction
console.log("product ", a * b); // Multiplication
console.log("quotient ", a / b); // Division
console.log("modulus ", a % b); // Modulus
console.log("exponentiation ", a ** b); // Exponentiation
// Integer division examples
console.log("integer division (floor) ", Math.floor(a / b)); // for positive numbers
console.log("integer division (trunc) ", Math.trunc(a / b)); // toward zero
console.log("integer division (bitwise) ", (a / b) | 0); // 32-bit truncation (fast, limited to 32-bit)
let A = 10n;
let B = 3n;
console.log("BigInt integer division ", A / B); // BigInt division truncates toward zero

// Comparison Operators
console.log("equal ", a == b); // Equal
console.log("not equal ", a != b); // Not equal
console.log("strict equal ", a === b); // Strict equal
console.log("strict not equal ", a !== b); // Strict not equal
console.log("greater than ", a > b); // Greater than
console.log("less than ", a < b); // Less than
console.log("greater than or equal to ", a >= b); // Greater than or equal to
console.log("less than or equal to ", a <= b); // Less than or equal to

// Logical Operators
let x = true;
let y = false;
console.log("AND ", x && y); // Logical AND
console.log("OR ", x || y); // Logical OR
console.log("NOT ", !x); // Logical NOT

// Assignment Operators
let c = 5;
c += 2; // c = c + 2
console.log("c after += ", c);
c -= 2; // c = c - 2
console.log("c after -= ", c);
c *= 2; // c = c * 2
console.log("c after *= ", c);
c /= 2; // c = c / 2
console.log("c after /= ", c);
c %= 2; // c = c % 2
console.log("c after %= ", c);
console.log("c = ", c);
console.log("++c ", ++c); // Pre-increment
console.log("c++ ", c++); // Post-increment
console.log("c after c++ ", c);
console.log("--c ", --c); // Pre-decrement
console.log("c-- ", c--); // Post-decrement
console.log("c after c-- ", c);

// Identity Operators
console.log("identity (same reference) ", a === b); // Strict equality checks both value and type

// Pertinence Operator
let arr = [1, 2, 3, 4, 5];
console.log("membership (includes) ", arr.includes(3)); // Check if 3 is in the array
console.log("membership (includes) ", arr.includes(6)); // Check if 6 is in the array


// --- Control Structures ---

// Conditional Statements
let num = 7;
if (num > 0) {
    console.log("The number is positive.");
} else if (num < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// Switch Statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Loops

// For Loop
for (let i = 0; i < 5; i++) {
    console.log("For loop iteration: ", i);
}

// While Loop
let j = 0;
while (j < 5) {
    console.log("While loop iteration: ", j);
    j++;
}

// Do-While Loop
let k = 0;
do {
    console.log("Do-While loop iteration: ", k);
    k++;
} while (k < 5);

// For...in Loop (for objects)
let obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log("For...in loop key: ", key, "value: ", obj[key]);
}

// For...of Loop (for iterable objects like arrays)
let iterableArr = [10, 20, 30];
for (let value of iterableArr) {
    console.log("For...of loop value: ", value);
}

// Break and Continue
for (let m = 0; m < 10; m++) {
    if (m === 5) {
        console.log("Breaking the loop at m = ", m);
        break; // Exit the loop when m is 5
    }
    if (m % 2 === 0) {
        console.log("Continuing at even m = ", m);
        continue; // Skip even numbers
    }
    console.log("Current m value: ", m);
}

// Exceptions and Try-Catch
try {
    let result = 10 / 0; // This will not throw an error in JavaScript, but let's simulate one
    if (!isFinite(result)) {
        throw new Error("Division by zero is not allowed.");
    }
    console.log("Result: ", result);
} catch (error) {
    console.log("Caught an error: ", error.message);
} finally {
    console.log("Finally block executed.");
}
