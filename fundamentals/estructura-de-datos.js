// -- Structures of data by default in JavaScript --

// Object
let person = {
    name: "Alice",
    age: 28,
    city: "Los Angeles"
};
console.log("Person Object: ", person);
person.age = 29; // Modifying a property
console.log("Updated Age Person Object: ", person.age);
delete person.city;
console.log("After Deleting City Person Object: ", person);

// Array
let numbers = [10, 20, 30, 40, 50];
console.log("Numbers Array: ", numbers);
numbers.push(60); // Adding an element to the array
console.log("Updated Numbers Array: ", numbers);
numbers.pop(); // Removing the last element from the array
console.log("After Pop Numbers Array: ", numbers);
numbers.shift(); // Removing the first element from the array
console.log("After Shift Numbers Array: ", numbers);
numbers.unshift(5); // Adding an element at the beginning of the array
console.log("After Unshift Numbers Array: ", numbers);

console.log("Array Length: ", numbers.length); // Getting the length of the array
console.log("Element at Index 2: ", numbers[2]); // Accessing element at index 2
console.log("Index of 30: ", numbers.indexOf(30)); // Finding index of element 30

console.log("Current Numbers Array: ", numbers);
numbers.sort((a, b) => b - a); // Sorting the array in descending order
console.log("Sorted Numbers Array (Descending): ", numbers);

// Map
let mapData = new Map();
mapData.set("key1", "value1");
mapData.set("key2", "value2");
console.log("Map Data: ", mapData);
mapData.delete("key1");
console.log("After Deleting key1 Map Data: ", mapData);
console.log("Get key2 from Map: ", mapData.get("key2"));
mapData.set("key3", "value3");
console.log("Map Size: ", mapData.size);
console.log("Show value for key3: ", mapData.get("key3"));


mapData.forEach((value, key) => {
    console.log(`Map Key: ${key}, Value: ${value}`);
});

// Set
let setData = new Set();
setData.add(1);
setData.add(2);
setData.add(3);
console.log("Set Data: ", setData);
setData.delete(2);
console.log("After Deleting 2 Set Data: ", setData);
console.log("Set has 3: ", setData.has(3));
console.log("Set Size: ", setData.size);

setData.forEach(value => {
    console.log("Set Value: ", value);
});

// -- Exercise --

class Agenda {
    constructor() {
        this.contacts = new Map();
    }
    verifyPhoneNumber(name, phone) {
        const phoneStr = String(phone);
        if (!/^\d+$/.test(phoneStr)) {
            console.log(`Contact ${name} not added. Phone must be numeric.`);
            return;
        }
        if (phoneStr.length > 12) {
            console.log(`Contact ${name} not added. Phone must not exceed 12 digits.`);
            return;
        }
        return phoneStr;
    }

    addContact(name, phone) {
        const phoneStr = this.verifyPhoneNumber(name, phone);
        if (!phoneStr) return;
        this.contacts.set(name, phoneStr);
        console.log(`Contact ${name} added.`);
    }

    updateContact(name, phone) {
        const phoneStr = this.verifyPhoneNumber(name, phone);
        if (!phoneStr) return;
        if (this.contacts.has(name)) {
            this.contacts.set(name, phone);
            console.log(`Contact ${name} updated.`);
        } else {
            console.log(`Contact ${name} not found.`);
        }
    }

    removeContact(name) {
        if (this.contacts.delete(name)) {
            console.log(`Contact ${name} removed.`);
        } else {
            console.log(`Contact ${name} not found.`);
        }
    }

    getContact(name) {
        if (this.contacts.has(name)) {
            console.log(`Contact ${name}: ${this.contacts.get(name)}`);
        } else {
            console.log(`Contact ${name} not found.`);
        }
    }

    listContacts() {
        console.log("Contacts List:");
        this.contacts.forEach((phone, name) => {
            console.log(`Name: ${name}, Phone: ${phone}`);
        });
    }
}

const myAgenda = new Agenda();
myAgenda.addContact("John Doe", "1234567890");
myAgenda.addContact("Jane Smith", "9876543210");
myAgenda.addContact("Carlos Ruiz", "5551234567");
myAgenda.addContact("María López", "5552345678");
myAgenda.addContact("Liu Wei", "5553456789");
myAgenda.addContact("Fatima Khan", "5554567890");
myAgenda.addContact("Oliver Brown", "5555678901");

myAgenda.listContacts();

myAgenda.addContact("Invalid Contact", "12345abc"); // Invalid phone
myAgenda.addContact("Long Number", "1234567890123"); // Exceeds 12 digits

myAgenda.updateContact("Jane Smith", "1112223333");
myAgenda.getContact("Jane Smith");

myAgenda.removeContact("Carlos Ruiz");
myAgenda.listContacts();