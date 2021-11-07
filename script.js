//create functions for my operations: add, subtract, 
//multiply and divide
const add = function(a, b) {
    return a + b;
}
const subtract = function(a, b) {
    return a - b;
}
const multiply = function(a, b) {
    return a * b;
}
const divide = function(a, b) {
    return a / b;
}

//create global answer variable.
let answer = '';

//create operate function that will perform operation on 
//two numbers
const operate = function(operation, a, b) {
    if(operation === '+') {
        return answer = a + b;
    } else if(operation === '-') {
        return answer = a - b;
    } else if(operation === '*') {
        return answer = a * b;
    } else if(operation === '÷') {
        if(b === '0') {
            return answer = 'Oh, hell naw';
        } else {
            return answer = a / b;
        }
    }
}

//create display variable
const display = document.getElementById('display');

//create 'clear' variable and function.
const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
    display.textContent = '';
    //clear firstValue, secondValue & operator
    firstValue = '';
    secondValue = '';
    operator = '';
    operatorTwo = '';
})

//create variable to hold operator
let operator = '';
//create variable to hold second operator
let operatorTwo = '';

//create div variable that will hold all of the buttons
//so that I can put an event listener on the entire div.
//create value variables.
//create number buttons function along with variable
//that holds the first value and secondValue.
const buttonsDiv = document.getElementById('buttons-div');
let firstValue = '';
let secondValue = '';

buttonsDiv.addEventListener('click', function(e) {
            //give decimal class its own if statement.
        //If decimal class is targeted, don't let it be 
        //pressed twice. If display.textContent = '.' and
        //the target equals '.', then it needs to produce
        //an empty string when pressed 
    if(e.target.classList.contains('decimal')) {
        if(display.textContent.includes('.') && (!secondValue)) {
            console.log('hello');
            ;;
        } else if ((!display.textContent.includes('.')) && (!secondValue)) {
            display.textContent += e.target.value;
        firstValue = Number(display.textContent);
       
     } else if ((firstValue.toString().includes('.'))  &&   (secondValue.toString().includes('.')) ) {
        ;;
     } else if ( (firstValue.toString().includes('.')) && (operator) && (secondValue.toString().includes('.')) ) {
          
        ;;
     
     
     /*} else if(secondValue) {
            display.textContent += e.target.value;
            secondValue += e.target.value;
            secondValue = Number(secondValue);
        }*/

      }  else if(secondValue) {
            display.textContent += e.target.value;
            secondValue.toString();
            secondValue += e.target.value;
        }

    }
    if( (e.target.classList.contains('btn-class')) && (!operator) && (!(e.target.classList.contains('decimal')))) {
        display.textContent += e.target.value;
        firstValue = Number(display.textContent);
    } else if((e.target.classList.contains('btn-class')) && (operator) && (!(e.target.classList.contains('decimal')))) {
        operatorTwo = '';
        display.textContent += e.target.value;
        secondValue += e.target.value;
        secondValue = Number(secondValue);
    } else if((!secondValue) && (e.target.classList.contains('operation-btn')) && (!(e.target.classList.contains('decimal')))) {
        display.textContent += e.target.value;
        operator = e.target.value;
    } else if((secondValue) && (e.target.classList.contains('operation-btn')) && (!(e.target.classList.contains('decimal')))) {
        //if a second value exists, then initialize operatorTwo
        //and return answer and store it in the firstValue
        //variable.
        operatorTwo = e.target.value;
        equalsBtn.click();
    }
})

//create secondary clear function that clears the display
//and only clears the secondValue & operator, and stores
//the answer inside the firstValue once the equal button
//event listener is clicked.
const equalClear = function() {
    display.textContent = '';
    secondValue = '';
    firstValue = Number(answer);
    display.textContent = firstValue;
    //if operatorTwo exists, then display it and use it on
    //values, with firstValue being equal to answer. Need
    //to be able to loop for multiple operatorTwo.
    /*if(operatorTwo) {

    }*/
}

const continuedOperationClear = function() {
    display.textContent = answer;
}

//create equal button event listener that operates on the
//values and uses the equalClear function to clear the 
//display so that only the answer shows.
const equalsBtn = document.getElementById('equals');
equalsBtn.addEventListener('click', function() {
    //operate on values
    //if there isn't a firstValue or secondValue, 
    //equal shouldn't do anything
    if((!firstValue) || (!secondValue)) {
        return answer = ''; 
    }
    if(!operatorTwo) {
        //if there is no second operator, then operate on
        //the values and return the answer
        answer = operate(operator, firstValue, secondValue);
        equalClear();
    } else if (operatorTwo) {
        //if operatorTwo does exist, then get the answer 
        //from operating on firstValue and secondValue and
        //store the answer in firstValue and clear 
        //secondValue and store operatorTwo in operator and
        //return the answer if there is not another 
        //operatorTwo. If there is, then return to this step.
        answer = operate(operator, firstValue, secondValue);
        answer = Number(answer);
        display.textContent = answer;
        display.textContent += ` ${operatorTwo}`;
        firstValue = answer;
        secondValue = '';
        operator = operatorTwo;
        buttonsDiv.click();
    } else if ((operatorTwo) && (secondValue)) {
        answer = operate(operatorTwo, firstValue, secondValue);
    } else {
        equalClear();
    }
})



//If decimal class is targeted, don't let it be 
        //pressed twice. If display.textContent = '.' and
        //the target equals '.', then it needs to produce
        //an empty string when pressed 