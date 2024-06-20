"use strict"; // use to enforce a stricter set of rules and best-practices

// JS Fundamentals Part 1

// Single Line Comments

/*
    Multi Line Comments
*/

// ~~~~~~~~~ Console Logging
console.log(test);
console.error(test);
console.info(test);

// ~~~~~~~~~~~~ Debugging
// 🛑 focus a lot on doing this in "inspect"
// 🛑 give a little tour of the inspect thing

// ~~~~~~~~~~~~ Variables
// 🛑 hoisting - moves all declarations to the top of the file
// 🛑 Variables defined with let and const are hoisted to the top of the block, but not initialized.
var matteo = "Matteo"; // ES5
let rachel = "Rachel"; //ES6 re-declaration (WITHIN SAME SCOPE)
const anna = "Anna"; //ES6 re-declaration (WITHIN SAME SCOPE)
// ~~~~~~~~~~~~ Data Types

// Boolean -> true, false
//! Falsey values: undefined, null, "", false, 0, NaN, -0, 0n

// String -> ', ", ` used only for string interpolation
// Number -> integer, float/decimal, complex
// Object -> array ([]), objects ({key: value})
// 🛑 Null -> absence of value
// 🛑 Undefined -> the value has not been assigned YET
// BigInt -> +-(2^53 -1)
// Symbol -> used for memory efficiency and in objects declarations

// ~~~~~~~~~~ Arrays: CRUD
// 🛑 we use const because we are not changing the reference to the nameArray but we can update it
const nameArray = ["abigail"];
// 🛑 review .push() in inspect
// 🛑 notice when you refresh page you see the console.log and get an error
// console.log(nameArray[0])
let popReturn = nameArray.pop();
// 🛑 what does .shift and .unshift do?

// 🛑 .slice - nondestructive removal (does not change original array). removes and returns portion of array

const numArray = [0, 1, 2, 3, 4, 5];
// 🛑 will return portion of array
//console.log(numArray.slice(2, 4))
// 🛑 original array intact
//console.log(numArray)

// 🛑  splice() performs destructive actions .splice() allows us to remove elements, add elements, or replace elements
// 🛑 returns removed items if any
// array.splice(index, count, item1, ....., itemX)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length)
fruits.splice(2, 2, "Lemon", "Kiwi"); // => [Banana,Orange,Lemon,Kiwi]
fruits.splice(1, 3); // => [Banana]
fruits.splice(1, 0, "Grapefruit", "Orange"); // => [Banana, Grapefruit, Orange]
// 🛑 spread operator creates brand new array so this will return error
fruits = [...fruits, "hello"];

// ~~~~~~~~~~~~ Objects
// 🛑 we use const because we are not changing the reference to the letterCounter
const letterCounter = {};
letterCounter.one = 3;
letterCounter.four = 4;
// 🛑 using bracket notation with special character '-'
letterCounter["twenty-six"] = 26;
delete letterCounter.one

//console.log(letterCounter)
// ~~~~~~~~~~~~~ Conditional Statements
if (myName == "Matteoh") {
	console.log("Yes");
} else if (myName == "Matteog") {
	console.log("Yay");
} else {
	console.log("No");
}

// ~~~~~~~~~~~~~~~ Ternary Expressions
// expression ? returnValueIfTruthy : returnValueIfFalsey
console.log(myName.length > 5 ? 7 : 9);
console.log("🚀 ~ file: index.js:61 ~ const age = name.length > 5 ? 7 : 9:");

// ~~~~~~~~~~~~~~~ Switch
switch (myName) {
	case "Matteoh":
		console.log("hello");
		break;
	case "Marco":
		console.log("World");
		break;
	default:
		console.log("Hello World!");
}

// ~~~~~~~~~~~~~~~~ Loops
for (let i = 0; i < 5; i++) {
	console.log(i);
}

let counter = 0;

while (counter < 5) {
	console.log(counter);
    // 🛑 have to update counter or you get an infinite loop
	counter++;
}

// 🛑 for...in... is used for objects (keys only)
// 🛑 for...of... used for strings and arrays
