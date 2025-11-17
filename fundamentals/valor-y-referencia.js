// -- Valor y Referencia --

// Tipos Primitivos (por valor)
// Aqui, los valores primitivos se copian al asignarlos a otra variable.
let a = 10;
let b = a; // b gets a copy of the value of a
b += 5;
a = 20;
console.log("a (primitive): ", a); // Output: 20
console.log("b (primitive): ", b); // Output: 15

// Tipos por Referencia
// Aqui, los objetos se asignan por referencia.
let obj1 = { name: "Alice", age: 25 };
let obj2 = obj1; // obj2 references the same object as obj1
obj2.age = 30;
console.log("obj1 (reference): ", obj1); // Output: { name: 'Alice', age: 30 }
console.log("obj2 (reference): ", obj2); // Output: { name: 'Alice', age: 30 }

// Documentation: Primitive (by-value) and Reference types in JavaScript
// Primitive types (copied by value):
// - undefined: absence of a value.
// - null: intentional absence of any object value.
// - boolean: true or false.
// - number: IEEE‑754 double precision numbers (NaN, ±Infinity included).
// - bigint: arbitrary precision integers (e.g., 123n).
// - string: immutable sequence of characters.
// - symbol: unique, immutable identifiers.
//
// Reference types (copied by reference):
// - Object: plain objects created with {} or new Object().
// - Array: ordered lists.
// - Function: callable objects.
// - Date, RegExp: built‑in object types.
// - Map, Set, WeakMap, WeakSet: collection objects.
// - Promise: asynchronous result container.
// - Typed Arrays (Int8Array, Uint8Array, ...): binary data views.
//
// Notes:
// - Primitives are immutable and assigned/copied by value.
// - Objects (arrays, functions, maps, etc.) are referenced; assigning copies the reference.
// - For copying: use shallow copy (Object.assign, spread) or deep clone (structuredClone, JSON methods, or custom routines).

// Exercise: Two programs to illustrate value vs reference behavior

// Program 1: Primitive Types (by value)
let x = 5;
let y = 10;

export function swapByValue(value1, value2) {
    let temp1 = value2;
    let temp2 = value1;
    return [temp1, temp2];
}
let [newX, newY] = swapByValue(x, y);
console.log("Before swapByValue - x: ", x); // Output: 5
console.log("Before swapByValue - y: ", y); // Output: 10
console.log("After swapByValue - x: ", newX); // Output: 10
console.log("After swapByValue - y: ", newY); // Output: 5

// Program 2: Reference Types (by reference)
let objA = { value: 5 };
let objB = { value: 10 };

export function swapByReference(ref1, ref2) {
    let temp = ref1.value;
    ref1.value = ref2.value;
    ref2.value = temp;
    return [ref1, ref2];
}
let [newObjA, newObjB] = swapByReference(objA, objB);
console.log("Before swapByReference - objA.value: ", objA.value); // Output: 10
console.log("Before swapByReference - objB.value: ", objB.value); // Output: 5
console.log("After swapByReference - objA.value: ", newObjA.value); // Output: 10
console.log("After swapByReference - objB.value: ", newObjB.value); // Output: 5
