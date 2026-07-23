// Check whether the provided number is odd or even.
function isOddorEven(inputNumber){
    
    let number = inputNumber;
    // An even number has no remainder when divided by 2.
    if (number % 2 == 0) {
        console.log(inputNumber + " is even Number");
    }
    else {
        console.log(inputNumber + " is odd Number");
    }
    }
    
    isOddorEven(20);
    isOddorEven(15);
