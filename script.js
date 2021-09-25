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

const displayInput = document.getElementById('displayId');
const numButtons = document.querySelectorAll('.numbers');
const operateButtons = document.querySelectorAll('.operators');

let calcMemory = {};

numButtons.forEach((button) => {
    let buttonInnerHTML = button.innerHTML;
    button.addEventListener('click', () => {
        displayInput.value += buttonInnerHTML;
    });
});

operateButtons.forEach((button) => {
    let buttonInnerHTML = button.innerHTML;
    button.addEventListener('click', () => {
        switch (buttonInnerHTML) {
            case '+' :
                calcMemory.number1 = parseInt(displayInput.value);
                calcMemory.operator = add;
            break;
            case '-' :
                calcMemory.number1 = parseInt(displayInput.value);
                calcMemory.operator = subtract;
            break;
            case '/' :
                calcMemory.number1 = parseInt(displayInput.value);
                calcMemory.operator = divide;
            break;
            case '*' :
                calcMemory.number1 = parseInt(displayInput.value);
                calcMemory.operator = multiply;
            case '=' :
                calcMemory.number2 = parseInt(displayInput.value);
                console.log(calcMemory);
                displayInput.value = operate(calcMemory.number1, calcMemory.number2, calcMemory.operator);
            break;
            case 'AC' :
                displayInput.value = "";
            break;
        };
    });
});