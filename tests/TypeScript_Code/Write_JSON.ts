import { writeFileSync } from 'fs';

// Object to write
const newData = {
  name: "Abdul Rahuman",
  profession: "Tester",
  age: 30
};

// Convert to JSON string
const jsonString = JSON.stringify(newData, null, 2);
// Write to file
writeFileSync('output.json', jsonString, 'utf-8');
console.log("JSON file written successfully.");

/*newData->	The JavaScript object you're converting to JSON
null->	No replacer (include all properties)
2->	Add 2 spaces of indentation for each level (pretty print)
JSON.stringify() is a built-in JavaScript method that converts a JavaScript 
object or value into a JSON string.
*/