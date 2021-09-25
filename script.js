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

let clicked = false;

numButtons.forEach((button) => {
    let buttonInnerHTML = button.innerHTML;
    button.addEventListener('click', () => {
        displayInput.value += buttonInnerHTML;
        if (clicked == true) {
            displayInput.value = "";
            displayInput.value += buttonInnerHTML;
            calcMemory.number2 = parseFloat(displayInput.value);
            clicked = false;
        };
    });
});

operateButtons.forEach((button) => {
    let buttonInnerHTML = button.innerHTML;
    button.addEventListener('click', () => {
        switch (buttonInnerHTML) {
            case '+' :
                calcMemory.number1 = parseFloat(displayInput.value);
                calcMemory.operator = add;
                clicked = true;
            break;
            case '-' :
                calcMemory.number1 = parseFloat(displayInput.value);
                calcMemory.operator = subtract;
                clicked = true;
            break;
            case '/' :
                calcMemory.number1 = parseFloat(displayInput.value);
                calcMemory.operator = divide;
                clicked = true;
            break;
            case '*' :
                calcMemory.number1 = parseFloat(displayInput.value);
                calcMemory.operator = multiply;
                clicked = true;
                break;
            case '=' :
                console.log(calcMemory);
                displayInput.value = operate(calcMemory.number1, calcMemory.number2, calcMemory.operator);
                clicked = true;
            break;
            case 'AC' :
                displayInput.value = "";
                calcMemory = {};
            break;
        };
    });
});