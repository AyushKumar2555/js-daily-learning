// Logging strings to the console
console.log("hello");
console.log("hii");

// Logging a number to the console
console.log(12);

// Using `var` to declare a variable
var num = 20;
console.log(num); // Outputs: 20

// Re-declaring the same variable using `var`
var num = 24;
console.log(num); // Outputs: 24 (allowed with var)

// Using `let` to declare a variable (block-scoped)
let a = 12;
console.log("a = " + a); // Outputs: a = 12

// Updating the value of a `let` variable (allowed)
a = 24;
console.log("a = " + a); // Outputs: a = 24

// Note: Re-declaring a `let` variable in the same scope will throw an error
