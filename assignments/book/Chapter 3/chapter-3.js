// Defining a function
const square = function (x) {
  return x * x;
};

console.log(square(12));
// → 144

// Function with no parameters
const makeNoise = function () {
  console.log('Pling!');
};

makeNoise();
// → Pling!

// Function with multiple parameters
const power = function (base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 10));
// → 1024
