let a: number = 10;
let b: number = 10;
let operator: string = "-";

switch (operator) {
  case "+":
    console.log("Addition:", a + b);
    break;
  case "-":
    console.log("Subtraction:", a - b);
    break;
  case "*":
    console.log("Multiplication:", a * b);
    break;
  case "/":
    console.log("Division:", a / b);
    break;
  default:
    console.log("Invalid operator");
}

/* 
switch is used when you want to compare one value against multiple possible values 
(like multiple if-else). Cleaner and faster than using many if...else if...else.
*/
