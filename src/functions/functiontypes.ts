let operation: (a: number, b: number) => number;
// TypeScript knows the parameters and return type from the function type.


    operation = (a, b) =>

          {
            return a - b;
          }

console.log(operation(8, 5));//3
//Part 8 — Passing a function as an argument

function calculate(
  a: number,
  b: number,
  operation: (a: number, b: number) => number
) {
  return operation(a, b);
}

const add = (a: number, b: number) => { return (a + b); }
const sub = (a: number, b: number) => { return (a - b); }
console.log(calculate(8, 7, sub))//1
  console.log(calculate(8,7,add))//15
//First-class function:

// "A function can be treated like a value."
// Callback:="A function that I pass to another function so that function can call it."
// And one function can be both.
// subtract
//    │
//    ├── Function is a value → first-class function
//    │
//    └── Passed to calculate → callback
//Functions that are passed around like this are called first-class functions in JavaScript.
function createUser(name: string,standard: number, age : number = 18 ) {
  return {
     name,
    age,
     standard
   };
}

console.log(createUser("Sumit", 7));
console.log(createUser("Sumit", 26 ,5));
