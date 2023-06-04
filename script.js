/* initialize container */
const container = document.querySelector('#container');
container.setAttribute('style', 'display: flex; flex-direction: column; flex: 1 1 content; height: 100vh; align-items: center; justify-content: center;')

const calculator = document.querySelector('#calculator');

const display = document.querySelector('#p1');

const button0 = document.querySelector('#button0');
const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');
const button6 = document.querySelector('#button6');
const button7 = document.querySelector('#button7');
const button8 = document.querySelector('#button8');
const button9 = document.querySelector('#button9');
const buttonAdd = document.querySelector('#buttonAdd');
const buttonMultiply = document.querySelector('#buttonMultiply');
const buttonMinus = document.querySelector('#buttonMinus');
const buttonDivide = document.querySelector('#buttonDivide');
const buttonClear = document.querySelector('#clear');
const buttonDelete = document.querySelector('#delete');
const buttonDecimal = document.querySelector('#buttonDecimal');
const buttonEquals = document.querySelector('#buttonEquals');

let firstNumber;
let operater;
let secondNumber = "";
let readyForSecondNumber = false;
let globalText = "";

const operate = function(operation, number1, number2) {
    readyForSecondNumber = false;
    secondNumber = "";
    operater = null;
    if(operation === "+") {
        globalText = add(parseFloat(number1), parseFloat(number2));
    } else if (operation === "-") {
        globalText = minus(parseFloat(number1), parseFloat(number2));
    } else if (operation === "X") {
        globalText = multiply(parseFloat(number1), parseFloat(number2));
    } else if (operation === "/") {
        globalText = divide(parseFloat(number1), parseFloat(number2));
    } else {
        throw new Error("No operater selected!");
    }
    return globalText;
}

const add = function(number1, number2) {
    return number1 + number2;
}

const minus = function(number1, number2) {
    return number1 - number2;
}

const multiply = function(number1, number2) {
    return number1 * number2;
}

const divide = function(number1, number2) {
    return number1 / number2;
}

button0.addEventListener('click', () => {
    globalText = globalText + "0";
    display.innerHTML = globalText;
    if(readyForSecondNumber) {
        secondNumber = secondNumber + "0";
    }
});

button1.addEventListener('click', () => {
    globalText = globalText + "1";
    display.innerHTML = globalText;
    if(readyForSecondNumber) {
        secondNumber = secondNumber + "1";
    }
});

button2.addEventListener('click', () => {
    globalText = globalText + "2";
    display.innerHTML = globalText;
    if(readyForSecondNumber) {
        secondNumber = secondNumber + "2";
    }
});

button3.addEventListener('click', () => {
    globalText = globalText + "3";
    display.innerHTML = globalText;
    if(readyForSecondNumber) {
        secondNumber = secondNumber + "3";
    }
});

button4.addEventListener('click', () => {
    globalText = globalText + "4";
    display.innerHTML = globalText;
    if(readyForSecondNumber) {
        secondNumber = secondNumber + "4";
    }
});

button5.addEventListener('click', () => {
    globalText = globalText + "5";
    display.innerHTML = globalText;
    if(readyForSecondNumber) {
        secondNumber = secondNumber + "5";
    }
});

button6.addEventListener('click', () => {
    globalText = globalText + "6";
    display.innerHTML = globalText;
    if(readyForSecondNumber) {
        secondNumber = secondNumber + "6";
    }
});

button7.addEventListener('click', () => {
    globalText = globalText + "7";
    display.innerHTML = globalText;
    if(readyForSecondNumber) {
        secondNumber = secondNumber + "7";
    }
});

button8.addEventListener('click', () => {
    globalText = globalText + "8";
    display.innerHTML = globalText;
    if(readyForSecondNumber) {
        secondNumber = secondNumber + "8";
    }
});

button9.addEventListener('click', () => {
    globalText = globalText + "9";
    display.innerHTML = globalText;
    if(readyForSecondNumber) {
        secondNumber = secondNumber + "9";
    }
});

buttonAdd.addEventListener('click', () => {
    // need to make sure only use 1 divide, multiply, minus, or add
    if(operater === undefined || operater === null) {
        // store the first number
        firstNumber = globalText;
        operater = "+";
        readyForSecondNumber = true;

        globalText = globalText + " + ";
        display.innerHTML = globalText;
    } else if (operater.length === 1) {
        if(secondNumber != null) {
            globalText = operate(operater, firstNumber, secondNumber);
            firstNumber = globalText;
            operater = "+";
            readyForSecondNumber = true;
            globalText = globalText + " + ";
            display.innerHTML = globalText;
        } else {
            throw new Error("Error! No second number selected!");
        }
    }
});

buttonMinus.addEventListener('click', () => {
    // need to make sure only use 1 divide, multiply, minus, or add
    if(operater === undefined || operater === null) {
        firstNumber = globalText;
        operater = "-";
        readyForSecondNumber = true;

        globalText = globalText + " - ";
        display.innerHTML = globalText;
    } else if (operater.length === 1) {
        if(secondNumber != null) {
            globalText = operate(operater, firstNumber, secondNumber);
            firstNumber = globalText;
            operater = "-";
            readyForSecondNumber = true;
            globalText = globalText + " - ";
            display.innerHTML = globalText;
        } else {
            throw new Error("Error! No second number selected!");
        }
    }
});

buttonMultiply.addEventListener('click', () => {
    // need to make sure only use 1 divide, multiply, minus, or add
    if(operater === undefined || operater === null) {
        // store the first number
        firstNumber = globalText;
        operater = "X";
        readyForSecondNumber = true;

        globalText = globalText + " * ";
        display.innerHTML = globalText;
    } else if (operater.length === 1) {
        if(secondNumber != null) {
            globalText = operate(operater, firstNumber, secondNumber);
            firstNumber = globalText;
            operater = "X";
            readyForSecondNumber = true;
            globalText = globalText + " * ";
            display.innerHTML = globalText;
        } else {
            throw new Error("Error! No second number selected!");
        }
    }
});

buttonDivide.addEventListener('click', () => {
    // need to make sure only use 1 divide, multiply, minus, or add
    if(operater === undefined || operater === null) {
        // store the first number
        firstNumber = globalText;
        operater = "/";
        readyForSecondNumber = true;

        globalText = globalText + " / ";
        display.innerHTML = globalText;
    } else if (operater.length === 1) {
        if(secondNumber != null) {
            globalText = operate(operater, firstNumber, secondNumber);
            firstNumber = globalText;
            operater = "/";
            readyForSecondNumber = true;
            globalText = globalText + " / ";
            display.innerHTML = globalText;
        } else {
            throw new Error("Error! No second number selected!");
        }
    }
});

buttonDecimal.addEventListener('click', () => {
    // need to check if the string has a decimal yet in the current
    // number, we cannot have 2 decimal in 1 number but can have in other number
    if (readyForSecondNumber != true) {
        if(globalText.includes(".") === true) {
            throw new Error("ERROR: CANNOT HAVE 2 DECIMALS IN 1 NUMBER!");
        } else {
            globalText = globalText + ".";
            display.innerHTML = globalText;
        }
    } else {
        if(secondNumber.includes('.') === true) {
            throw new Error("ERROR: CANNOT HAVE 2 DECIMALS IN 1 NUMBER!");
        } else {
            globalText = globalText + ".";
            display.innerHTML = globalText;
            secondNumber = secondNumber + ".";
        }
    }
});

buttonEquals.addEventListener('click', () => {
    //get second number value
    if(secondNumber != null && secondNumber != undefined) {
        globalText = operate(operater, firstNumber, secondNumber);
        firstNumber = globalText;
        display.innerHTML = globalText;
    } else {
        throw new Error("Cannot use equals button if there is no second number!");
    }
});

buttonClear.addEventListener('click', () => {
    firstNumber = "";
    secondNumber = "";
    operater = null;
    readyForSecondNumber = false;
    globalText = "";
    display.innerHTML = globalText;
});

buttonDelete.addEventListener('click', () => {
    // need to make sure if remove * / - + then ready for second number is deleted
    // need to make delete also delete the correct number first or second number

    globalText = globalText.slice(0, globalText.length - 1);
    display.innerHTML = globalText;
});