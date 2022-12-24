# Javascript-practices

  task practice 1

 The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.
The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.
The addition with a string appends the number 5 to the string.
The subtraction always converts to numbers, so it makes " -9 " a number -9 (ignoring spaces around it).
null becomes 0 after the numeric conversion.
undefined becomes NaN after the numeric conversion.
Space characters are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 0

/primitive/value types 

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


Extracting String Parts
There are 3 methods for extracting a part of a string:

1.slice(start, end)
2.substring(start, end)
3.substr(start, length)

    //replace
Note
The replace() method does not change the string it is called on.

The replace() method returns a new string.

The replace() method replaces only the first match

If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

By default, the replace() method replaces only the first match:



 
  comparisons

Greater/less than: a > b, a < b.
Greater/less than or equals: a >= b, a <= b.
Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.
In this article we’ll learn more about different types of comparisons, how JavaScript makes them, including important peculiarities.

At the end you’ll find a good recipe to avoid “JavaScript quirks”-related issues.

Boolean is the result
All comparison operators return a boolean value:

true – means “yes”, “correct” or “the truth”.
false – means “no”, “wrong” or “not the truth”.

For boolean values, true becomes 1 and false becomes 0.

The algorithm to compare two strings is simple:

Compare the first character of both strings.
If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
Repeat until the end of either string.
If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.


Comparison operators return a boolean value.
Strings are compared letter-by-letter in the “dictionary” order.
When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
The values null and undefined equal == each other and do not equal any other value.
Be careful when using comparisons like > or < with variables that can occasionally be null/undefined. Checking for null/undefined separately is a good idea.


task practice 2

5 > 4 → true
"apple" > "pineapple" → false
"2" > "12" → true
undefined == null → true
undefined === null → false
null == "\n0\n" → false
null === +"\n0\n" → false

Obviously, true.
Dictionary comparison, hence false. "a" is smaller than "p".
Again, dictionary comparison, first char "2" is greater than the first char "1".
Values null and undefined equal each other only.
Strict equality is strict. Different types from both sides lead to false.
Similar to (4), null only equals undefined.
Strict equality of different types.

conditional statements

 Conditional statements are used to perform different actions based on different conditions.

        Conditional Statements

Very often when you write code, you want to perform different actions for different decisions.

You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed

The if Statement

Use the if statement to specify a block of JavaScript code to be executed if a condition is true.

Syntax
if (condition) {
  //  block of code to be executed if the condition is true
}

The else Statement
Use the else statement to specify a block of code to be executed if the condition is false.

syntax
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}

The else if Statement
Use the else if statement to specify a new condition if the first condition is false.

syntax
if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}

ternary operators

There is one final bit of syntax we want to introduce you to before we get you to play with some examples. The ternary or conditional operator is a small bit of syntax that tests a condition and returns one value/expression if it is true, and another if it is false — this can be useful in some situations, and can take up a lot less code than an if...else block if you have two choices that are chosen between via a true/false condition. The pseudocode looks like this:

condition ? run this code : run this code instead


switch statements

if...else statements do the job of enabling conditional code well, but they are not without their downsides. They are mainly good for cases where you've got a couple of choices, and each one requires a reasonable amount of code to be run, and/or the conditions are complex (for example, multiple logical operators). For cases where you just want to set a variable to a certain choice of value or print out a particular statement depending on a condition, the syntax can be a bit cumbersome, especially if you've got a large number of choices.

In such a case, switch statements are your friend — they take a single expression/value as an input, and then look through several choices until they find one that matches that value, executing the corresponding code that goes along with it. Here's some more pseudocode, to give you an idea:

switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;

  // include as many cases as you like

  default:
    actually, just run this code
}


Conditional branching: if, '?'

Sometimes, we need to perform different actions based on different conditions.

To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.

The “if” statement
The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.


Boolean conversion

The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean.

Let’s recall the conversion rules from the chapter Type Conversions:

A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.
Other values become true, so they are called “truthy”.

The “else” clause

The if statement may contain an optional else block. It executes when the condition is falsy.

Several conditions: “else if”

Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.

Several conditions: “else if”

Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.

Conditional operator ‘?’

The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.

The operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.

The syntax is:

let result = condition ? value1 : value2;
The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.

For example:

let accessAllowed = (age > 18) ? true : false;
Technically, we can omit the parentheses around age > 18. The question mark operator has a low precedence, so it executes after the comparison >.

This example will do the same thing as the previous one:

// the comparison operator "age > 18" executes first anyway
// (no need to wrap it into parentheses)
let accessAllowed = age > 18 ? true : false;


Multiple ‘?’

A sequence of question mark operators ? can return a value that depends on more than one condition.

t may be difficult at first to grasp what’s going on. But after a closer look, we can see that it’s just an ordinary sequence of tests:

The first question mark checks whether age < 3.
If true – it returns 'Hi, baby!'. Otherwise, it continues to the expression after the colon “:”, checking age < 18.
If that’s true – it returns 'Hello!'. Otherwise, it continues to the expression after the next colon “:”, checking age < 100.
If that’s true – it returns 'Greetings!'. Otherwise, it continues to the expression after the last colon “:”, returning 'What an unusual age!'.

Non-traditional use of ‘?’

Sometimes the question mark ? is used as a replacement for if:

Logical operators

There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing). Here we cover the first three, the ?? operator is in the next article.

Although they are called “logical”, they can be applied to values of any type, not only boolean. Their result can also be of any type.

||(OR)

result = a || b;

The “OR” operator is represented with two vertical line symbols:

In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.

In JavaScript, the operator is a little bit trickier and more powerful. But first, let’s see what happens with boolean values.

A.Getting the first truthy value from a list of variables or expressions.

For instance, we have firstName, lastName and nickName variables, all optional (i.e. can be undefined or have falsy values).

Let’s use OR || to choose the one that has the data and show it (or "Anonymous" if nothing set):

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder
If all variables were falsy, "Anonymous" would show up.

b.Short-circuit evaluation.

Another feature of OR || operator is the so-called “short-circuit” evaluation.

It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.

The importance of this feature becomes obvious if an operand isn’t just a value, but an expression with a side effect, such as a variable assignment or a function call.

In the example below, only the second message is printed:

true || alert("not printed");
false || alert("printed");
In the first line, the OR || operator stops the evaluation immediately upon seeing true, so the alert isn’t run.

Sometimes, people use this feature to execute commands only if the condition on the left part is falsy.

&& (AND)

result = a && b; //true//false

In classical programming, AND returns true if both operands are truthy and false otherwise:

1.AND “&&” finds the first falsy value

Given multiple AND’ed values:

result = value1 && value2 && value3;
The AND && operator does the following:

Evaluates operands from left to right.
For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand.
In other words, AND returns the first falsy value or the last value if none were found.

The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.

Examples:

// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0
We can also pass several values in a row. See how the first falsy one is returned:

alert( 1 && 2 && null && 3 ); // null
When all values are truthy, the last value is returned:

alert( 1 && 2 && 3 ); // 3, the last one
Precedence of AND && is higher than OR ||
The precedence of AND && operator is higher than OR ||.

So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).


! (NOT)

The boolean NOT operator is represented with an exclamation sign !.

The syntax is pretty simple:

result = !value;

The operator accepts a single argument and does the following:

Converts the operand to boolean type: true/false.
Returns the inverse value.

NOTE
The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.

FUNCTIONS

1.manipulate text string
2.manipulate array
3.generate random number

Functions versus methods

Functions that are part of objects are called methods. You don't need to learn about the inner workings of structured JavaScript objects yet — you can wait until our later module that will teach you all about the inner workings of objects, and how to create your own. For now, we just wanted to clear up any possible confusion of method versus function — you are likely to meet both terms as you look at the available related resources across the Web.

. Anytime you saw a custom name with parentheses straight after it, you were using a custom function

Invoking functions(function declaration)

You are probably clear on this by now, but just in case, to actually use a function after it has been defined, you've got to run — or invoke — it. This is done by including the name of the function in the code somewhere, followed by parentheses.

function myFunction() {
  alert('hello');
}

myFunction();
// calls the function once

Function parameters

Some functions require parameters to be specified when you are invoking them — these are values that need to be included inside the function parentheses, which it needs to do its job properly.
Parameters are sometimes called arguments, properties, or even attributes.

As an example, the browser's built-in Math.random() function doesn't require any parameters. When called, it always returns a random number between 0 and 1:

const myNumber = Math.random();
The browser's built-in string replace() function however needs two parameters — the substring to find in the main string, and the substring to replace that string with:

const myText = 'I am a string';
const newString = myText.replace('string', 'sausage');
Note: When you need to specify multiple parameters, they are separated by commas.

Optional parameters

Sometimes parameters are optional — you don't have to specify them. If you don't, the function will generally adopt some kind of default behavior. As an example, the array join() function's parameter is optional:

const myArray = ['I', 'love', 'chocolate', 'frogs'];
const madeAString = myArray.join(' ');
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'

If no parameter is included to specify a joining/delimiting character, a comma is used by default.

Default parameters
If you're writing a function and want to support optional parameters, you can specify default values by adding = after the name of the parameter, followed by the default value:

function hello(name = 'Chris') {
  console.log(`Hello ${name}!`);
}

hello('Ari'); // Hello Ari!
hello();      // Hello Chris!

Anonymous functions and arrow functions
So far we have just created a function like so:

function myFunction() {
  alert('hello');
}
But you can also create a function that doesn't have a name:

(function () {
  alert('hello');
})

This is called an anonymous function, because it has no name. You'll often see anonymous functions when a function expects to receive another function as a parameter. In this case the function parameter is often passed as an anonymous function.

Note: This form of creating a function is also known as function expression. Unlike function declaration, function expressions are not hoisted.

Anonymous function example

For example, let's say you want to run some code when the user types into a text box. To do this you can call the addEventListener() function of the text box. This function expects you to pass it (at least) two parameters:

the name of the event to listen for, which in this case is keydown
a function to run when the event happens.
When the user presses a key, the browser will call the function you provided, and will pass it a parameter containing information about this event, including the particular key that the user pressed:

function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener('keydown', logKey);
Instead of defining a separate logKey() function, you can pass an anonymous function into addEventListener():

textBox.addEventListener('keydown', function(event) {
  console.log(`You pressed "${event.key}".`);
});

Arrow functions

If you pass an anonymous function like this, there's an alternative form you can use, called an arrow function. Instead of function(event), you write (event) =>:

textBox.addEventListener('keydown', (event) => {
  console.log(`You pressed "${event.key}".`);
});

If the function only has one line in the curly brackets, you omit the curly brackets:

textBox.addEventListener('keydown', (event) => console.log(`You pressed "${event.key}".`));

If the function only takes one parameter, you can also omit the brackets around the parameter:

textBox.addEventListener('keydown', event => console.log(`You pressed "${event.key}".`));

Finally, if your function needs to return a value, and contains only one line, you can also omit the return statement. In the following example we're using the map() method of Array to double every value in the original array:

const originals = [1, 2, 3];

const doubled = originals.map((item) => item * 2);

console.log(doubled); // [2, 4, 6]

The map() method takes each item in the array in turn, passing it into the given function. It then takes the value returned by that function and adds it to a new array.

So in the example above, (item) => item * 2 is the arrow function equivalent of:

function doubleItem(item) {
  return item * 2;
}
N/B
There are some subtle differences between arrow functions and normal functions. They're outside the scope of this introductory guide, and are unlikely to make a difference in the cases we've discussed here.

Function scope and conflicts

Let's talk a bit about scope — a very important concept when dealing with functions. When you create a function, the variables and other things defined inside the function are inside their own separate scope, meaning that they are locked away in their own separate compartments, unreachable from code outside the functions.

The top level outside all your functions is called the global scope. Values defined in the global scope are accessible from everywhere in the code.

JavaScript is set up like this for various reasons — but mainly because of security and organization. Sometimes you don't want variables to be accessible from everywhere in the code — external scripts that you call in from elsewhere could start to mess with your code and cause problems because they happen to be using the same variable names as other parts of the code, causing conflicts. This might be done maliciously, or just by accident.

What are return values?

Return values are just what they sound like — the values that a function returns when it completes. You've already met return values several times, although you may not have thought about them explicitly.

const myText = "The weather is cold";
const newString = myText.replace("cold", "warm");
console.log(newString); // Should print "The weather is warm"
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made

The replace() function is invoked on the myText string, and is passed two parameters:

the substring to find ('cold').
the string to replace it with ('warm').
When the function completes (finishes running), it returns a value, which is a new string with the replacement made. In the code above, the result of this return value is saved in the variable newString.

A function declaration looks like this:

function name(parameters, delimited, by, comma) {
  /* code */
}
Values passed to a function as parameters are copied to its local variables.
A function may access outer variables. But it works only from inside out. The code outside of the function doesn’t see its local variables.
A function can return a value. If it doesn’t, then its result is undefined.
To make the code clean and easy to understand, it’s recommended to use mainly local variables and parameters in the function, not outer variables.

It is always easier to understand a function which gets parameters, works with them and returns a result than a function which gets no parameters, but modifies outer variables as a side effect.

Function naming:

A name should clearly describe what the function does. When we see a function call in the code, a good name instantly gives us an understanding what it does and returns.
A function is an action, so function names are usually verbal.
There exist many well-known function prefixes like create…, show…, get…, check… and so on. Use them to hint what a function does.
Functions are the main building blocks of scripts. Now we’ve covered the basics, so we actually can start creating and using them. But that’s only the beginning of the path. We are going to return to them many times, going more deeply into their advanced features.


April 14, 2022
Arrow functions, the basics
There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

It’s called “arrow functions”, because it looks like this:

let func = (arg1, arg2, ..., argN) => expression;
This creates a function func that accepts arguments arg1..argN, then evaluates the expression on the right side with their use and returns its result.

In other words, it’s the shorter version of:

let func = function(arg1, arg2, ..., argN) {
  return expression;
};
Let’s see a concrete example:

let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3
As you can see, (a, b) => a + b means a function that accepts two arguments named a and b. Upon the execution, it evaluates the expression a + b and returns the result.

If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.

For example:

let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

alert( double(3) ); // 6
If there are no arguments, parentheses are empty, but they must be present:

let sayHi = () => alert("Hello!");

sayHi();
Arrow functions can be used in the same way as Function Expressions.

For instance, to dynamically create a function:

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");

welcome();
Arrow functions may appear unfamiliar and not very readable at first, but that quickly changes as the eyes get used to the structure.

They are very convenient for simple one-line actions, when we’re just too lazy to write many words.

Multiline arrow functions
The arrow functions that we’ve seen so far were very simple. They took arguments from the left of =>, evaluated and returned the right-side expression with them.

Sometimes we need a more complex function, with multiple expressions and statements. In that case, we can enclose them in curly braces. The major difference is that curly braces require a return within them to return a value (just like a regular function does).

Like this:

let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); // 3
More to come
Here we praised arrow functions for brevity. But that’s not all!

Arrow functions have other interesting features.

To study them in-depth, we first need to get to know some other aspects of JavaScript, so we’ll return to arrow functions later in the chapter Arrow functions revisited.

For now, we can already use arrow functions for one-line actions and callbacks.

Summary
Arrow functions are handy for simple actions, especially for one-liners. They come in two flavors:

Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result. Parentheses can be omitted, if there’s only a single argument, e.g. n => n*2.
With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.

Arrow functions are handy for simple actions, especially for one-liners. They come in two flavors:

Without curly braces: (...args) => expression – the right side is an expression: the function evaluates it and returns the result. Parentheses can be omitted, if there’s only a single argument, e.g. n => n*2.
With curly braces: (...args) => { body } – brackets allow us to write multiple statements inside the function, but we need an explicit return to return something.
