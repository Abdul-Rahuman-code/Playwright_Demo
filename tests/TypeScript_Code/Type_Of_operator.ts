//The typeof operator is a unary operator used to determine the type of a given operand. It returns a string indicating the data type.

typeof "hello"         // "string"
typeof 123             // "number"
typeof true            // "boolean"
typeof undefined       // "undefined"
typeof null            // "object"    // ⚠️ Quirk in JS
typeof {name: "Joe"}   // "object"
typeof [1, 2, 3]       // "object"    // Arrays are also objects
typeof function(){}    // "function"

let userInput = 42;

if (typeof userInput === 'number') {
  console.log("Valid number");
}
