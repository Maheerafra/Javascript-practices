
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
//task practice1
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

// backquote

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
  //slice
let fruit = "Apple, Banana, Kiwi";
let part = fruit.slice(7,13);
console.log(part)

  //substring
let str = "Apple, Banana, Kiwi";
let newStrng = str.substring(7, 13);
console.log(newStrng)
  //replace substring
  let message = "Please visit Microsoft!";
  let newMessage = message.replace("Microsoft", "W3Schools");
  console.log(newMessage);

  //Task practices 1
  5 > 4
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"

//Conditional Statements

  //IF statement
if (hour < 18) {
  greeting = "Good day";
};
console.log(greeting);

 //ELSE statement
 if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

 //IF ELSE statement
 if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

//ternary operators

const greeting = isBirthday
  ? 'Happy birthday Mrs. Smith — we hope you have a great day!'
  : 'Good morning Mrs. Smith.';

  //example
  const select = document.querySelector('select');
  const html = document.querySelector('html');
  document.body.style.padding = '10px';
  
  function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
  }
  
  select.addEventListener('change', () => select.value === 'black'
    ? update('black', 'white')
    : update('white', 'black')
  );


  //switch case statements

  const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
}

//conditional branching
 //The “if” statement

let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) alert( 'You are right!' );

//example
if (year == 2015) {
  alert( "That's correct!" );
  alert( "You're so smart!" );
}

//Boolean conversion

//The “else” clause

let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}

//Several conditions: “else if”

let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}

//Conditional operator ‘?’

let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);

//multiple

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );



//Logical operators

  //||(OR)

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}

  //&& (AND)

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

 //! (NOT)

alert( !true ); // false
alert( !0 ); // true

//A double NOT !! is sometimes used for converting a value to boolean type:

alert( !!"non-empty string" ); // true
alert( !!null ); // false

//There’s a little more verbose way to do the same thing – a built-in Boolean function:

alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false

function myFunction() {
  alert('hello');
}

//functions

//every time we manipulate a text string
const myText = 'I am a string';
const newString = myText.replace('string', 'sausage');
console.log(newString);

//every time we manipulate array
const myArray = ['I', 'love', 'chocolate', 'frogs'];
const madeAString = myArray.join(' ');
console.log(madeAString);

//every time we generate a random number:
const myNumber = Math.random();

// FUNCTION SCOPE AND CONFLICTS

const x = 1;

function a() {
  const y = 2;
}

function b() {
  const z = 3;
}

function output(value) {
  const para = document.createElement('p');
  document.body.appendChild(para);
  para.textContent = `Value: ${value}`;
}