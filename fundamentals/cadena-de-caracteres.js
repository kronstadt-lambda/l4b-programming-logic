// Operations with strings in JavaScript

// Creating a string
let myString = "Hello, World!";
let otherString = 'JavaScript is fun.';

// Concatenation
let concatenatedString = myString + " " + otherString;
console.log("Concatenated String: ", myString.concat(otherString)); // 'Hello, World! JavaScript is fun.'

// Getting the length of a string
let length = myString.length; // 13

// Accessing characters in a string
let firstChar = myString[0]; // 'H'
let lastChar = myString[myString.length - 1]; // '!'

// String methods
let upperCaseString = myString.toUpperCase(); // 'HELLO, WORLD!'
let lowerCaseString = myString.toLowerCase(); // 'hello, world!'
let substring = myString.substring(0, 5); // 'Hello'
let replacedString = myString.replace("World", "JavaScript"); // 'Hello, JavaScript!'
let splitString = myString.split(", "); // ['Hello', 'World!']
let slicedString = myString.slice(7, 12); // 'World'
let includesCheck = myString.includes("World"); // true
let indexOfChar = myString.indexOf("o"); // 4
let trimmedString = "   Hello   ".trim(); // 'Hello'

// Template literals
let name = "Alice";
let greeting = `Hello, ${name}! Welcome to JavaScript.`; // 'Hello, Alice! Welcome to JavaScript.'

// String to number conversion
let numericString = "123.45";
let numberValue = parseFloat(numericString); // 123.45
console.log("Number Value: ", numberValue);

// Output results
console.log("Original String: ", myString);

// Exercise: Analyze two strings, by function, for verify if they are anagrams, palindrome, or isograms.

function arePalindromes(str1, str2) {
    const normalize = str => str.toLowerCase().replace(/[\W_]/g, ''); // Normalize by removing non-alphanumeric characters and converting to lowercase
    const normalizedStr1 = normalize(str1);
    const normalizedStr2 = normalize(str2);
    const reversedStr1 = normalizedStr1.split('').reverse().join('');
    const reversedStr2 = normalizedStr2.split('').reverse().join('');
    return normalizedStr1 === reversedStr1 && normalizedStr2 === reversedStr2;
}
console.log("Are Palindromes: ", arePalindromes("A man a plan a canal Panama", "No 'x' in Nixon")); // true

function areAnagrams(str1, str2) {
    const normalize = str => str.toLowerCase().replace(/[\W_]/g, '').split('').sort().join(''); // Normalize by removing non-alphanumeric characters, converting to lowercase, sorting characters
    return normalize(str1) === normalize(str2);
}
console.log("Are Anagrams: ", areAnagrams("Listen", "Silent")); // true

function areIsograms(str1, str2) {
    const normalize = str => str.toLowerCase().replace(/[\W_]/g, ''); // Normalize by removing non-alphanumeric characters and converting to lowercase
    const isIsogram = str => {
        const charSet = new Set();
        for (let char of str) {
            if (charSet.has(char)) {
                return false; // Duplicate character found
            }
            charSet.add(char);
        }
        return true; // No duplicates found
    };
    return isIsogram(normalize(str1)) && isIsogram(normalize(str2));
}
console.log("Are Isograms: ", areIsograms("Dermatoglyphics", "Background")); // true