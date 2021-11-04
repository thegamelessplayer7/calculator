const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b;
};

const display = document.getElementById('display');

let displayValue = '';

let operation = '';
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

let answer = '';
const equalBtn = document.getElementById('equals');
equalBtn.addEventListener('click', () => {
    answer = ` ${operate(operation, firstValue, secondValue)}`;
    display.innerHTML = answer;
    answer = Number(answer);
    operation = '';
    secondValue = '';
    firstValue = '';
    // if an answer exists, and another number is pressed,
    // I want to clear the previous value and add the new
    // number.
    // if an answer exists and an operator is pressed,
    // I want it to operate on the number.
    
})

/* grab all of my buttons


*/
let buttonsDiv = document.getElementById('buttons-div');

let firstValue = '';
let secondValue = '';
buttonsDiv.addEventListener('click', function(e) {
    // store click inside variable
    if(answer) {
        firstValue = Number(answer);
        firstValue = Number(firstValue);
    }
    if(!operation) {
        if (e.target.className === 'btn-class') {
        firstValue += e.target.value;
        display.textContent += e.target.value;
        firstValue = Number(firstValue);
        //change value of firstValue from string to integer
        }
    } else if(operation) {
        if (e.target.className === 'btn-class') {
            
            display.textContent += e.target.value
            secondValue += e.target.value;
            secondValue = Number(secondValue);
            //change value of secondValue from string to integer
        }
    }
})

/*
const one = document.getElementById('numOne');
one.addEventListener('click', () => {
    if (!operation) {
    display.innerHTML += one.value;
    displayValue = Number(display.innerHTML);
    array.push(display.innerHTML)
    x = displayValue;
    } else if(operation) {
        let displayValueTwo = '';
        displayValueTwo = Number(display.innerHTML)
    }
})
*/

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


const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
    display.innerHTML = '';
    firstValue = '';
    secondValue = '';
    operation = '';
    answer = '';
    displayValue = Number(display.innerHTML);
})















