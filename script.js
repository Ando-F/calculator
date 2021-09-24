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

const displayInput = document.querySelector('input');
const numButtons = document.querySelectorAll('.numbers');
const operateButtons = document.querySelectorAll('.operators');

numButtons.forEach((button) => {
    let buttonInnerHTML = button.innerHTML;
    button.addEventListener('click', () => {
        displayInput.value += buttonInnerHTML;
    });
});

let calcMemory = {};

operateButtons.forEach((button) => {
    let buttonInnerHTML = button.innerHTML;
    button.addEventListener('click', () => {
        switch (buttonInnerHTML) {
            case '+' :
                calcMemory.number1 = displayInput.value;
                calcMemory.operator = 'add';
                
                console.log(calcMemory);
            break;
        };
    });
});


