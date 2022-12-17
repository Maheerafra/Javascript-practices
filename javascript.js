
// Your JavaScript goes here!
/*console.log("Hello, World!")

let message = 'Hello!'; // define the variable and assign the value
console.log('message')
let admin, name; // can declare two variables at once

name = "John";

admin = name;

console.log(admin)


let ourPlanetName = 'earth';

console.log(ourPlanetName)

let currentUserName = 'john';

console.log(currentUserName)


const BIRTHDAY = '18.04.1982';

console.log(BIRTHDAY)

let a = 10;


console.log(a)

let a = 1, b = 1;

let c = ++a;

let d = b++;

console.log(a)
console.log(b)
console.log(c)
console.log(d)

let a = 2;

let x = 1 + (a *= 2);

console.log(a)
console.log(x)

"" + 1 + 0 = "10"// (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)

// console.log(lastName)

//javascript is dynamic language

//Reference types

 // object
let person = {
     name: 'Afra',
     age: 24
};               

//dot notation
person.age = 40;

console.log(person.age)

//Array

let selectedColors = ['red','blue',];
selectedColors[2] = 1;
console.log(selectedColors.length)

  

 //function

// types of function

  //performing a task

 function greet(name, lastName) {
   console.log('hello ' + name + ' ' + lastName);
 }

 greet('Afra', 'maheer');


//Calculating a value
 
function square(number){
    return number * number;
}
 

console.log(square(2));
*/

const string = "The revolution will not be televised.";
console.log(string);
 
const badString = string;
console.log(badString);

// bacckquote

const name = "Chris";
const greeting = `Hello, ${name}`;
console.log(greeting); // "Hello, Chris"


const sauce  = "chicken";
const order  =  `curry, ${sauce}`;
console.log(order);

//concatenation
const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`;
console.log(joined)

//into numbers
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);

//into strings
const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);


//expression in strings
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;

//concatenation
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output);

//STRING METHOD
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

//extracting string parts
  slice
let fruit = "Apple, Banana, Kiwi";
let part = fruit.slice(7,13);
console.log(part)

  substring
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);

