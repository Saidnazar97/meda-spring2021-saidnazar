// new line using "\n"
console.log('This is the first line\nAnd this is the second');

// two backslashes collapse
console.log('A newline character is written like "\\n".');

// Concatenate glues two string together using + operator
console.log('con' + 'cat' + 'e' + 'nate');

// backtick-quoted string called temlate literal. When you use this simbole ${}, it result in string and computed
console.log(`half of 100 is ${100 / 2}`);

// Type of is a word operator not a symbol. It takes only one value. it is called unary operators.
console.log(typeof 4.5);
// → number
console.log(typeof 'x');
// → string

// Boolean Values takes two values like True and False. They are binary operators.
console.log(3 > 2);
// → true
console.log(3 < 2);
// → false
// other similar operaators
console.log('Itchy' != 'Scratchy');
// → true
console.log('Apple' == 'Orange');
// → false
// Only one value is not equal in JavaScript, and tha is NaN.
console.log(NaN == NaN);
// → false

// LOGICAL OPERATORS LIKE and &&, or || and not !.
console.log(true && false);
// → false
console.log(true && true);
// → true

console.log(false || true);
// → true
console.log(false || false);
// → false

//Not is written as an exclamation mark (!). It is a unary operator that flips the value given to it—!true produces false, and !false gives true.
// Mixed Boolen operators, but parentheses are needed.
console.log(1 + 1 == 2 && 10 * 10 > 50);

//Ternary and conditional, operating on three values. It is written with a question mark and a colon, like this:
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2

// Empty values like null and undefined these denote the absence of a meaningful value.
console.log(8 * null);
// → 0
console.log('5' - 1);
// → 4
console.log('5' + 1);
// → 51
console.log('five' * 2);
// → NaN
console.log(false == 0);
// → true

console.log(null == undefined);
// → true
console.log(null == 0);
// → false

// BINDINGS
let caught = 5 * 5;
console.log(caught);

let ten = 10;
console.log(ten * ten);
// → 100

//Disconnecting Bindings
let mood = 'light';
console.log(mood);
// → light
mood = 'dark';
console.log(mood);
// → dark
// Another example of new value
let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// → 105

// let statement defines multiple bindings separating with comma
let one = 1,
  two = 2;
console.log(one + two);
// → 3

// var and const the same as let var stands for varable, const stands for constant
var name = 'Ayda';
const greeting = 'Hello ';
console.log(greeting + name);
// → Hello Ayda

// browser environment, promt binding
// prompt('Enter passcode');

// console.log output
let x = 30;
console.log('the value of x is', x);
// → the value of x is 30

// Return values
console.log(Math.max(2, 4));
// → 4

// Control Flow from top to bottom
// let theNumber = Number(prompt('Pick a number'));
// console.log('Your number is the square root of ' + theNumber * theNumber);

// Conditional execution with if keyword in JavaScript
// let theNumber = Number(prompt('Pick a number'));
// if (!Number.isNaN(theNumber)) {
//   console.log('Your number is the square root of ' + theNumber * theNumber);
// }

// Occasional one-liner.
if (1 + 1 == 2) console.log("It's true");
// → It's true

// We can use the else keyword, together with if, to create two separate, alternative execution paths.
// let theNumber = Number(prompt('Pick a number'));
// if (!Number.isNaN(theNumber)) {
//   console.log('Your number is the square root of ' + theNumber * theNumber);
// } else {
//   console.log("Hey. Why didn't you give me a number?");
// }

// If we have more then two paths, we can chain multiple with if/else pair together
let num = Number(prompt('Pick a number'));

if (num < 10) {
  console.log('Small');
} else if (num < 100) {
  console.log('Medium');
} else {
  console.log('Large');
}

// Loop example

// let number = 0;
// while (number <= 12) {
//   console.log(number);
//   number = number + 2;
// }
// → 0
// → 2
//   … etcetera

// Two bindings using while
// let result = 1;
// let counter = 0;
// while (counter < 10) {
//   result = result * 2;
//   counter = counter + 1;
// }
// console.log(result);
// → 1024

//a do loop always executes its body at least once
let yourName;
do {
  yourName = prompt('Who are you?');
} while (!yourName);
console.log(yourName);

// Indenting Code
if (false != true) {
  console.log('That makes sense.');
  if (1 < 2) {
    console.log('No surprise there.');
  }
}

// for loops
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
// → 0
// → 2
//   … etcetera

let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
// → 1024

// Breaking Out of a Loop
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
// → 21

// Updating bindings succinctly
// counter = counter + 1 shortcut in JavaScript counter += 1;
for (let number = 0; number <= 12; number += 2) {
  console.log(number);
}

// Dispatching on a value with switch
// It is not uncommon for code to look like this:
// if (x == 'value1') action1();
// else if (x == 'value2') action2();
// else if (x == 'value3') action3();
// else defaultAction();
// Switch construct more direct way
switch (prompt('What is the weather like?')) {
  case 'rainy':
    console.log('Remember to bring an umbrella.');
    break;
  case 'sunny':
    console.log('Dress lightly.');
  case 'cloudy':
    console.log('Go outside.');
    break;
  default:
    console.log('Unknown weather type!');
    break;
}

// Comments

// two // slash single line comments

/*  this for multiple line comments

  I first found this number scrawled on the back of an old notebook.
  Since then, it has often dropped by, showing up in phone numbers
  and the serial numbers of products that I've bought. It obviously
  likes me, so I've decided to keep it.
*/

// Looping A Triangle
for (let line = '#'; line.length < 8; line += '#') console.log(line);

//exircise2
for (let n = 1; n <= 100; n++) {
  let output = '';
  if (n % 3 == 0) output += 'Fizz';
  if (n % 5 == 0) output += 'Buzz';
  console.log(output || n);
}
// CHESSBOARD
let size = 8;

let board = '';

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += ' ';
    } else {
      board += '#';
    }
  }
  board += '\n';
}

console.log(board);
