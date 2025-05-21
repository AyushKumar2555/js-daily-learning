// Hoisting in JavaScript 
// a = "HELLO";
// console.log(a); // Works only if 'a' is declared with 'var'
// var a;          // 'var' is hoisted (moved to top of scope)

// let a;         //  Would cause ReferenceError if accessed before declaration (let/const are not hoisted the same way)

// Arithmetic Operators
let a = 45;
let b = 34;
console.log("a + b =", a + b); // Addition: 79

let c = 45;
let d = 34;
console.log("c - d =", c - d); // Subtraction: 11

// Comparison Operators
let e = "46";   // string
const f = 46;   // number

// Loose equality (==): compares values only, not types
console.log('e == f →', e == f); // true (string "46" is converted to number)

// Strict equality (===): compares both value and type
console.log('e === f →', e === f); // false (string !== number)

let g = 46;
let h = 44;

// Not equal (strict)
console.log('g !== h →', g !== h); // true (46 is not equal to 44)

// Greater than and less than
console.log('g > h →', g > h);  // true
console.log('g < h →', g < h);  // false

