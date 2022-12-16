
// Your JavaScript goes here!
console.log("Hello, World!")

/*let message = 'Hello!'; // define the variable and assign the value
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

/*let a = 10;


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

/*"" + 1 + 0 = "10"// (1)
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
" \t \n" - 2 = -2 // (7)*/

//primitive/value types 

/*let name = 'Afra'; //string literal
let age = 24;    //number literal
let isApproved = false; //boolean
let firstName  =  undefined;//undefined
let lastName = null;        //null

Seven primitive data types:

1.number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
2.bigint for integer numbers of arbitrary length.
3.string for strings. A string may have zero or more characters, there’s no separate single-character type.
4.boolean for true/false.
5.null for unknown values – a standalone type that has a single value null.
6.undefined for unassigned values – a standalone type that has a single value undefined.
7.symbol for unique identifiers.

And one non-primitive data type:
8.object for more complex data structures.


The typeof operator allows us to see which type is stored in a variable.

Usually used as typeof x, but typeof(x) is also possible.
Returns a string with the name of the type, like "string".
For null returns "object" – this is an error in the language, it’s not actually an object.

// console.log(lastName)*/

//javascript is dynamic language

//Reference types

  //object
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
 




