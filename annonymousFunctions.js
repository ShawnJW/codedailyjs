let firstNumber = 1;
let secondNumber = 2;

let isBiggest = (function (a, b) {
    if (a > b) {
        console.info("The First number is bigger");
    } else
    {
        console.info("The Second number is bigger");
    }

})(( firstNumber, secondNumber ) );

// console.info( isBiggest );