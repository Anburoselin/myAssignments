// Categorize a number as zero, negative, or positive.
function catogorizeNumbers(inputNumber){
    let number = inputNumber;
    // Zero is neither positive nor negative.
    if (number == 0) {
        console.log(inputNumber + " is zero");
    }
    // Numbers below zero are negative.
    else if (number < 0){
        console.log(inputNumber + " is negative");
    // All remaining numbers are positive.
    } else 
    {
        console.log(inputNumber + " is positive");
    }
    }
    catogorizeNumbers(20);
    catogorizeNumbers(-10);
    catogorizeNumbers(0);
