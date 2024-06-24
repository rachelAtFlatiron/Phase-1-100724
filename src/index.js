"use strict"; // use to enforce a stricter set of rules and best-practices

// Single Line Comments
/*
    Multi Line comments
*/

// ~~~~~~~~~ Console Logging

// console.log("Regular console.log");
// console.error("Error console.log");

// ~~~~~~~~~~~~ Debugging

// to run file:
// node.js
// load in html and run in web browser

// ~~~~~~~~~~~~ Variables
// hoisting: all declarations of variables (including functions) are moved to the top of the file
// var not defined: variable was never declared (let alone initialized)
// declare: creating variable
// initializing: setting variable to initial value
const constant = "constant";
let myLet = "let";

// ~~~~~~~~~~~~ Data Types

//falsey values: "", NaN, 0, null, undefined
//null: absence of value
//undefined: a value (including null) has not yet been assigned to a variable
let boolean = true;
let num = 5; //integers
let float = 5.5; //decimals
let str = "string";

let object = {};
let array = [];

// ~~~~~~~~~~ Arrays: CRUD
// Create, Read, Update, Delete

// 0-based indexing: names[0] = "Sebastian"
// last element: names.length - 1
// names[names.length - 1] = "Linda"
// .pop, .push deal with the last element
// .shift, .unshift deal with the first element
// .slice: returns section of array (non-destructive)
// .splice: remove sections, add new elements (destructive)

// names points to place in memory where array lives, we can update array as needed
const names = ["Sebastian", "Zachary", "Oscar", "Linda"];

// brand new array with all elements of names
const newNames = [...names, "Stefan", "Audrey"];

// ~~~~~~~~~~~~ Objects
// key/value pairs
const lengths = {
	cat: 3,
	cream: 5,
	keyboard: 8,
};

lengths.speaker = 7;
// lengths.speaker = -7;

lengths["twenty-six"] = 26;
lengths["twenty-six"] = -26;

delete lengths["twenty-six"];

// ~~~~~~~~~~~~~ Conditional Statements
// if...else...
// if(condition)...else
// if(condition)...else if(condition)...else...

/*
T && F = F
T && T = T
F && F = F

T || T = T
T || F = T
F || F = F
*/
// if(lengths.cat === 3 && lengths.speaker == 3){
//     console.log("and is true")
// } else if (lengths.cat === 3 || lengths.speaker === 3){
//     console.log("or is true")
// } else {
//     console.log("false")
// }

// if(lengths.speaker > 6){
//     console.log("speaker > 6")
// } else if (lengths.speaker > 5){
//     console.log("speaker > 5")
// } else if (lengths.speaker > 3){
//     console.log("speaker > 3")
// }

// if(lengths.cat > -3){
//     console.log("cat > -3")
// } 
// if (lengths.cat > -2){
//     console.log("cat > -2")
// }


// ~~~~~~~~~~~~~~~ Ternary Expressions
// if...else...
// expression ? returnIfTrue : returnIfFalse

// console.log(names.length > 0 ? "populated" : "unpopulated")

// ~~~~~~~~~~~~~~~ Switch

// ~~~~~~~~~~~~~~~~ Loops

// iterator
    // the thing want to repeat

// for(var; condition; increment){ statement }
// 1
// 2
// 3
for(let i = 1; i <= 3; i++){
    console.log(i)
}

for(let i = 0; i < names.length; i++){
    console.log(names[i])
}

let i = 0
while(i < names.length){
    console.log(names[i])
    i += 1 // MOST IMPORTANT THING WITH WHILE LOOPS IS TO UPDATE YOUR CONDITIONAL SO YOU DON'T GET AN INFINITE LOOP
}