const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a) {
    return a.reduce((total, current) => total * current);
};

const divide = function(a) {
    return a.reduce((total, current) => total / current);
};

const display = document.getElementById('display');

let displayValue = '';

const one = document.getElementById('numOne');
one.addEventListener('click', () => {
    display.innerHTML += '1';
    displayValue = Number(display.innerHTML);
})

const two = document.getElementById('numTwo');
two.addEventListener('click', () => {
    display.innerHTML += '2';
    displayValue = Number(display.innerHTML);
})

const three = document.getElementById('numThree');
three.addEventListener('click', () => {
    display.innerHTML += '3';
    displayValue = Number(display.innerHTML);
})

const four = document.getElementById('numFour');
four.addEventListener('click', () => {
    display.innerHTML += '4';
    displayValue = Number(display.innerHTML);
})

const five = document.getElementById('numFive');
five.addEventListener('click', () => {
    display.innerHTML += '5';
    displayValue = Number(display.innerHTML);
})

const six = document.getElementById('numSix');
six.addEventListener('click', () => {
    display.innerHTML += '6';
    displayValue = Number(display.innerHTML);
})

const seven = document.getElementById('numSeven');
seven.addEventListener('click', () => {
    display.innerHTML += '7';
    displayValue = Number(display.innerHTML);
})

const eight = document.getElementById('numEight');
eight.addEventListener('click', () => {
    display.innerHTML += '8';
    displayValue = Number(display.innerHTML);
})

const nine = document.getElementById('numNine');
nine.addEventListener('click', () => {
    display.innerHTML += '9';
    displayValue = Number(display.innerHTML);
})

const zero = document.getElementById('numZero');
zero.addEventListener('click', () => {
    display.innerHTML += '0';
    displayValue = Number(display.innerHTML);
})

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
    display.innerHTML = '';
    displayValue = Number(display.innerHTML);
})




const operate = function(operator, num1, num2) {
    if (operator === "-") {
     return subtract(num1, num2);
    } else if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2); 
    } else if (operator === '/') {
        return divide(num1, num2);
    }
}


let operation;
const subtractBtn = document.getElementById('subtract');
subtractBtn.addEventListener('click', () => {
    display.innerHTML += '-';
    operation = '-';
})

const addBtn = document.getElementById('add');
addBtn.addEventListener('click', () => {
    display.innerHTML += '+';
    operation = '+';
})

const multiplyBtn = document.getElementById('multiply');
multiplyBtn.addEventListener('click', () => {
    display.innerHTML += '*';
    operation = '*';
})

const divideBtn = document.getElementById('divide');
divideBtn.addEventListener('click', () => {
    display.innerHTML += '÷';
    operation = '/';
})



