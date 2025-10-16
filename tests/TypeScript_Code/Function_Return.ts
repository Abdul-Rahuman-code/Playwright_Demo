// A user-defined function is a custom function you create to perform specific tasks.
// // JavaScript allows multiple ways to define them.
function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, 3);
console.log("Sum:", result);  // Output: Sum: 8
//-------------------Other Ways to Define Functions-------------------------------------

const multiply = function(a: number, b: number): number {
  return a * b;
};

console.log(multiply(4, 5));  // 20

//---------------------------Arrow Function (ES6+)--------------

const greet = (name: string): string => {
  return `Hello, ${name}!`;
};

console.log(greet("Abdul Rahuman"));  // Hello, Abdul Rahuman!