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

