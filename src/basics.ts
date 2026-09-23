// Variables
let age: number = 25;
let name: string = "Sumit";
let isStudent: boolean = false;
console.log(name);
// ARRAY
// const array = [a, b, c, d,];
const array: string[] = ["a", "b"]
// OBJECTS
// const objects ={
//                   name: 'Sumit',
//                 isBoolean: true,
//                      age: 25,  }
type Bike = { // capital  for types
  name: string,
  speed: number,
  isGearless: boolean,
}
const bike:Bike = {
  name: " honda",
  speed:  80,
  isGearless: false,
}
console.log(bike.name);
console.log(bike.speed)
//INTERFACES
interface Car {
  name: string,
  speed: number,
  isEv: boolean,
}
const  car: Car = {
  name: "swift",
  speed: 120,
  isEv: false,
}
//Interface User
interface User {
  name: string,
  age: number,
  email?: string,

}
const user: User ={
  name: "sumit",
  age: 26,
email : "sumit@gmail.com",
}
console.log(user.email)//undefined because ? is used     email → string | undefined

//TYPE NARROWING  typeof is used to narrow type
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log("String:", value.toUpperCase());
  } else {
    console.log("Number:", value.toFixed(2));
  }
}
printValue("a");
printValue(9)

//FUNCTION DECLARATION

function greet(name: string): string {
  return `Hello ${name}`;
}
console.log(greet("Sumit"));
