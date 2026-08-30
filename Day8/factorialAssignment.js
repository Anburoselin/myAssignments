"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = factorial;
function factorial(number) {
    // Check that the number is valid
    if (number < 0) {
        throw new Error('Factorial is not defined for negative numbers');
    }
    var result = 1;
    // Calculate the factorial using a loop
    for (var value = 2; value <= number; value++) {
        result *= value;
    }
    return result;
}
console.log(factorial(0));
console.log(factorial(5));
try {
    console.log(factorial(-1));
}
catch (error) {
    console.log(error.message);
}
