import * as fs from 'fs';

// Read file synchronously and parse JSON
const data: string = fs.readFileSync('data.json', 'utf-8');
const jsonData: { [key: string]: any } = JSON.parse(data);

console.log(jsonData);
console.log(jsonData.name);
console.log(jsonData.age);
console.log(jsonData.Valid);
/* 
fs stands for File System.
It's a built-in Node.js module used to read, write, update, delete, 
and watch files and directories.

'utf-8' is a character encoding.
It tells Node.js to read or write the file as human-readable text (not binary).
Without it, you might get a Buffer instead of a string.

readFileSync reads a file synchronously (blocks other code until the file is read).
Takes two arguments: the file path and the encoding.

JSON.parse() takes a valid JSON string and converts it into a JavaScript object.

TypeScript notes:
- `data: string` ensures TypeScript knows the file content is a string.
- `jsonData: { [key: string]: any }` allows dynamic keys for JSON objects.
*/
