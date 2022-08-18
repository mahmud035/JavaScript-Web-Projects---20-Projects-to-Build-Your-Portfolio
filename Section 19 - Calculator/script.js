'use strict';

const calculatorDisplay = document.querySelector('h1');
const inputButtons = document.querySelectorAll('button');
const clearButton = document.getElementById('clear-btn');

function sendNumberValue(number) {
  //  if current display value is 0, replace it, if not add number
  const displayValue = calculatorDisplay.innerText;
  calculatorDisplay.innerText =
    displayValue === '0' ? number : displayValue + number;
}

function addDecimal() {
  // If no decimal, add one
  if (!calculatorDisplay.innerText.includes('.')) {
    calculatorDisplay.innerText = `${calculatorDisplay.innerText}.`;
  }
}

// Add Event Listeners for numbers, operators, decimal buttons
inputButtons.forEach((inputButton) => {
  if (inputButton.classList.length === 0) {
    inputButton.addEventListener('click', () =>
      sendNumberValue(inputButton.value)
    );
  } else if (inputButton.classList.contains('operator')) {
    inputButton.addEventListener('click', () =>
      sendNumberValue(inputButton.value)
    );
  } else if (inputButton.classList.contains('decimal')) {
    inputButton.addEventListener('click', () => addDecimal());
  }
  // console.log(inputButton);
});

// Reset Display
function resetAll() {
  calculatorDisplay.innerText = '0';
}
// Event Listener for Clear Button
clearButton.addEventListener('click', resetAll);
