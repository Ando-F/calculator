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
const handlersButtons = document.querySelectorAll('.handlers');

let calcMemory = {
    num1: null,
    num2: null,
    operator: null
};

numButtons.forEach((button) => {
    let buttonInnerHTML = button.innerHTML;
    button.addEventListener('click', () => {
        // Выводим на экран калькулятора цифры с клавиатуры
        displayInput.value += buttonInnerHTML;

        // После того как была нажата кнопка оператора, сохранить число 
        // с дисплея как num2 в память калькулятора
        if (calcMemory.operator != null) {
            calcMemory.num2 = parseFloat(displayInput.value);
            console.log(calcMemory);
        }
    });
});

operateButtons.forEach((button) => {
    let buttonInnerHTML = button.innerHTML;
    button.addEventListener('click', () => {
        switch (buttonInnerHTML) {
            case '+':
                calcMemory.operator = add;

                // Если в памяти не сохранена num2, то сохранить num1
                if (calcMemory.num2 == null) {
                    calcMemory.num1 = parseFloat(displayInput.value);
                };
        
                // Если была нажата кнопка оператора, то очистить дисплей калькулятора
                if (calcMemory.operator != null) {
                    displayInput.value = "";
                };
                console.log(calcMemory);
                
                // Если в памяти сохранены оператор и второе число, то при нажатии на
                // оператор произвести вычисление. Результат сохраняется в первую 
                // цифру
                if (calcMemory.num2 != null && calcMemory.operator != null) {
                    displayInput.value = operate(calcMemory.num1, calcMemory.num2, calcMemory.operator);
                    calcMemory.num1 = parseFloat(displayInput.value);
                };
            break;
        };
    });
});

handlersButtons.forEach((button) => {
    let buttonInnerHTML = button.innerHTML;
    button.addEventListener('click', () => {

    });
});