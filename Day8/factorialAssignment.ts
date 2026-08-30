function factorial(number: number): number {
  if (number < 0) {
    throw new Error('Factorial is not defined for negative numbers');
  }

  let result = 1;

  // Calculate the factorial using a loop
  for (let value = 2; value <= number; value++) {
    result = result * value;
  }

  return result;
}

console.log(factorial(0));
console.log(factorial(5));

try {
  console.log(factorial(-1));
} catch (error) {
  console.log((error as Error).message);
}
