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


/* grab all of my buttons


*/
let buttonsDiv = document.getElementById('buttons-div');
const num = function() {

}
let firstValue = '';
let secondValue = '';
buttonsDiv.addEventListener('click', function(e) {
    // store click inside variable
    if(!operation) {
        if (e.target.className === 'btn-class') {
        firstValue += e.target.value;
        display.textContent += e.target.value;
        }
    } else if(operation) {
        if (e.target.className === 'btn-class') {
            display.textContent += e.target.value
            secondValue += e.target.value;
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
    clickButton = '';
    operation = '';
    displayValue = Number(display.innerHTML);
})















