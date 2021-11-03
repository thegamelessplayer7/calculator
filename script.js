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

const one = document.getElementById('numOne');
one.addEventListener('click', () => {
    display.innerHTML += '1';
})

const two = document.getElementById('numTwo');
two.addEventListener('click', () => {
    display.innerHTML += '2';
})

const three = document.getElementById('numThree');
three.addEventListener('click', () => {
    display.innerHTML += '3';
})

const four = document.getElementById('numFour');
four.addEventListener('click', () => {
    display.innerHTML += '4';
})

const five = document.getElementById('numFive');
five.addEventListener('click', () => {
    display.innerHTML += '5';
})

const six = document.getElementById('numSix');
six.addEventListener('click', () => {
    display.innerHTML += '6';
})

const seven = document.getElementById('numSeven');
seven.addEventListener('click', () => {
    display.innerHTML += '7';
})

const eight = document.getElementById('numEight');
eight.addEventListener('click', () => {
    display.innerHTML += '8';
})

const nine = document.getElementById('numNine');
nine.addEventListener('click', () => {
    display.innerHTML += '9';
})

const zero = document.getElementById('numZero');
zero.addEventListener('click', () => {
    display.innerHTML += '0';
})

const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
    display.innerHTML = '';
})

let x = display.innerHTML;

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



