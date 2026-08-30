function fibonacci(n:number): void {
    if (n < 0) {
        throw new Error('Fibonacci is not defined for negative numbers');
    }

    let firstNumber = 0;
    let secondNumber = 1;

    for (let i = 0; i <= n; i++) {
        console.log(firstNumber);
        const fibNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = fibNumber;
    }
}

fibonacci(5);
//fibonacci(0);