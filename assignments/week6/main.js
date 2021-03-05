// How to use a function: functionName();
console.log('Hello Saidnazar');

console.log('Bye');

var myFirstVariable;

// The three most common Datatypes

// Strings

var myFirstVariable = 'My name is Saidnazar';
console.log(myFirstVariable);

var mySecondVaraible = 'My name is Sean';

// Number
10;
9;
100000;
0;
('10'); // Not a Number, it is a String instead

// Booleans
true;
false;

// Mathematical Operators
10 + 10; //20
5 - 10; //-5
2 / 5; //.4
10 * 5; //50

// Conditional Statements. If statement needs to have a true value in order to run / execute the code in its code block.

// Conditonal statement syntax
//if (true or false value) { code to run based on condition in parenthesis. }

var numberToTest = 0;

if (numberToTest > 0) {
  console.log('The number is positive.');
} else {
  console.log('The number is not positive');
}

if (numberToTest == 0) {
  console.log('The number is zero');
} else {
  console.log('The number is not zero');
}

if (numberToTest < 0) {
  console.log('The number is negative');
} else {
  console.log('The number is not negative');
}
var personAge;

personAge = 40;

if (personAge >= 21 && personAge <= 25) {
  console.log('Congrats! you are of drinking age');
} else if (personAge >= 26 && personAge <= 40) {
  console.log('Do you want to go grab a beer');
} else {
  console.log('Have you tried video games');
}

// While

var continueRunning = 0;

while (continueRunning < 10) {
  console.log('We ran the loop once!');

  continueRunning = continueRunning + 1;
}
