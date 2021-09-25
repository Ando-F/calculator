function add(num1, num2) {
    return num1 + num2;
};

function subtract(num1, num2) {
    return num1 - num2;
};

function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    return num1 / num2;
};

function operate(num1, num2, operator) {
    return operator(num1, num2);
};

calcMemory = {};

const calcDisplay = document.querySelector('h1');

const nineButton = document.querySelector('.nine');
const eightButton = document.querySelector('.eight');

nineButton.addEventListener('click', () => {
    calcDisplay.textContent += 9;
});

eightButton.addEventListener('click', () => {
    calcDisplay.textContent += 8;
});

const plusButton = document.querySelector('.plus');
const equalsButton = document.querySelector('.equals');

plusButton.addEventListener('click', () => {
    calcMemory.num1 = parseInt(calcDisplay.textContent);
    calcMemory.operator = add;
    calcDisplay.textContent = "";
});

equalsButton.addEventListener('click', () => {
    calcMemory.num2 = parseInt(calcDisplay.textContent);
    console.log(calcMemory);
    calcDisplay.textContent = operate(calcMemory.num1, calcMemory.num2, calcMemory.operator);
});

