# MILESTONE-005-ASSIGNMENT-005

1️⃣ What is the difference between var, let, and const?

var, let, and const are used to declare variables in JavaScript, but they work differently.

var:

It is the old way of declaring variables.

It has function scope.

The value can be reassigned and redeclared.

let:

Introduced in ES6.

It has block scope (works inside { }).

The value can be changed, but it cannot be redeclared in the same scope.

const:

Also introduced in ES6.

It has block scope.

The value cannot be changed or reassigned after declaration.


2️⃣ What is the spread operator (...)?

The spread operator (...) is used to expand elements of an array or object into individual elements.

It helps to copy or merge arrays and objects easily.

3️⃣ What is the difference between map(), filter(), and forEach()?

These are array methods used to work with array elements.

=>map()

i. Creates a new array.

ii. Applies a function to every element.

=>filter()

i. Creates a new array with elements that pass a condition.

=>forEach()

i. Runs a function for each element.

ii. Does not return a new array.

4️⃣ What is an arrow function?

An arrow function is a shorter way to write a function in JavaScript, introduced in ES6.

Example:

Normal function:

function add(a, b) {
  return a + b;
}

Arrow function:

const add = (a, b) => a + b;

Arrow functions make code shorter and cleaner.

5️⃣ What are template literals?

Template literals are used to create strings in JavaScript using backticks ( ) instead of quotes.

They allow embedding variables inside strings using ${}.

Example:

const name = "Sultan";
const message = `Hello ${name}, welcome!`;

console.log(message);

Output:

Hello Sultan, welcome!