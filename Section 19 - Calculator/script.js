'use strict';

const calculatorDisplay = document.querySelector('h1');
const inputButtons = document.querySelectorAll('button');
const clearButton = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

function sendNumberValue(number) {
  //    Replace current display value if first value is entered
  if (awaitingNextValue) {
    calculatorDisplay.innerText = number;
    awaitingNextValue = false;
  } else {
    //  if current display value is 0, replace it, if not add number
    const displayValue = calculatorDisplay.innerText;
    calculatorDisplay.innerText =
      displayValue === '0' ? number : displayValue + number;
  }
}

function addDecimal() {
  // If operator pressed, don't add decimal
  if (awaitingNextValue) {
    return;
  }
  // If no decimal, add one
  if (!calculatorDisplay.innerText.includes('.')) {
    calculatorDisplay.innerText = `${calculatorDisplay.innerText}.`;
  }
}

function useOperator(operator) {
  const currentValue = Number(calculatorDisplay.innerText);
  // Assign firstValue if no value
  if (!firstValue) {
    firstValue = currentValue;
  } else {
    console.log('currentValue', currentValue);
  }
  //  Ready for next value, store operator
  awaitingNextValue = true;
  operatorValue = operator;
  console.log('firstValue: ' + firstValue);
  console.log('operatorValue: ' + operatorValue);
}

// Add Event Listeners for numbers, operators, decimal buttons
inputButtons.forEach((inputButton) => {
  if (inputButton.classList.length === 0) {
    inputButton.addEventListener('click', () =>
      sendNumberValue(inputButton.value)
    );
  } else if (inputButton.classList.contains('operator')) {
    inputButton.addEventListener('click', () => useOperator(inputButton.value));
  } else if (inputButton.classList.contains('decimal')) {
    inputButton.addEventListener('click', () => addDecimal());
  }
  // console.log(inputButton);
});

// Reset all values, Display
function resetAll() {
  firstValue = 0;
  operatorValue = '';
  awaitingNextValue = false;
  calculatorDisplay.innerText = '0';
}
// Event Listener for Clear Button
clearButton.addEventListener('click', resetAll);
