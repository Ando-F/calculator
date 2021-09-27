function add(num1, num2) {
    return parseFloat(num1) + parseFloat(num2);
};

function subtract(num1, num2) {
    return parseFloat(num1) - parseFloat(num2);
};

function multiply(num1, num2) {
    return parseFloat(num1) * parseFloat(num2);
};

function divide(num1, num2) {
    return parseFloat(num1) / parseFloat(num2);
};

function operate(num1, num2, operator) {
    return operator(num1, num2);
};

const displayInput = document.getElementById('displayId');
const numButtons = document.querySelectorAll('.numbers');
const operateButtons = document.querySelectorAll('.operators');
const handlersButtons = document.querySelectorAll('.handlers');

let calcMemory = {
    num1: "",
    num2: "",
    operator: "",
    sum: ""
};

numButtons.forEach((button) => {
    let buttonInnerHTML = button.innerHTML;
    button.addEventListener('click', () => {
        // Если в памяти нет оператора, с клавиатуры вписываем в память 
        // калькулятора первое число, потом выводим его на дисплей.
        if (calcMemory.operator == "") {
            calcMemory.num1 += buttonInnerHTML;
            displayInput.value = calcMemory.num1;    
        };

        // Если в памяти нет оператора, то очистить дисплей, сохранить 
        // введенное с клавиатуры число в память и вывести это число.
        if (calcMemory.operator != "") {
            displayInput.value = "";
            calcMemory.num2 += buttonInnerHTML;
            displayInput.value = calcMemory.num2;
            console.log(calcMemory);
        };
    });
});

operateButtons.forEach((button) => {
    let buttonInnerHTML = button.innerHTML;
    button.addEventListener('click', () => {
        switch (buttonInnerHTML) {
            case '+':
                // Если в памяти сохранены оператор и второе число, то при нажатии на
                // оператор произвести вычисление. Результат сохраняется в первое 
                // число, потом выводится на дисплей. Также очищается второе число.
                if (calcMemory.num2 != "" && calcMemory.operator != "") {
                    calcMemory.num1 = operate(calcMemory.num1, calcMemory.num2, calcMemory.operator);
                    displayInput.value = calcMemory.num1;
                    calcMemory.num2 = "";
                    calcMemory.operator = "";
                };

                calcMemory.operator = add;
            break;
            case '-': 
                // Если в памяти сохранены оператор и второе число, то при нажатии на
                // оператор произвести вычисление. Результат сохраняется в первое 
                // число, потом выводится на дисплей. Также очищается второе число.
                if (calcMemory.num2 != "" && calcMemory.operator != "") {
                    calcMemory.num1 = operate(calcMemory.num1, calcMemory.num2, calcMemory.operator);
                    console.log(calcMemory)
                    displayInput.value = calcMemory.num1;
                    calcMemory.num2 = "";
                };

                calcMemory.operator = subtract;
            break;
            case '*':
                // Если в памяти сохранены оператор и второе число, то при нажатии на
                // оператор произвести вычисление. Результат сохраняется в первое 
                // число, потом выводится на дисплей. Также очищается второе число.
                if (calcMemory.num2 != "" && calcMemory.operator != "") {
                    calcMemory.num1 = operate(calcMemory.num1, calcMemory.num2, calcMemory.operator);
                    displayInput.value = calcMemory.num1;
                    calcMemory.num2 = "";
                };

                calcMemory.operator = multiply;
            break;
            case '/':
                // Если в памяти сохранены оператор и второе число, то при нажатии на
                // оператор произвести вычисление. Результат сохраняется в первое 
                // число, потом выводится на дисплей. Также очищается второе число.
                if (calcMemory.num2 != "" && calcMemory.operator != "") {
                    calcMemory.num1 = operate(calcMemory.num1, calcMemory.num2, calcMemory.operator);
                    displayInput.value = calcMemory.num1;
                    calcMemory.num2 = "";
                };

                calcMemory.operator = divide;
            break;
        };
    });
});

handlersButtons.forEach((button) => {
    let buttonInnerHTML = button.innerHTML;
    button.addEventListener('click', () => {
        switch (buttonInnerHTML) {
            case 'AC':
                displayInput.value = "";
                calcMemory = {
                    num1: "",
                    num2: "",
                    operator: ""
                };
            break;
            case '=':
                calcMemory.sum = operate(calcMemory.num1, calcMemory.num2, calcMemory.operator);
                displayInput.value = calcMemory.sum;
                calcMemory.num1 = "";
                calcMemory.num2 = "";
                calcMemory.operator = "";

                if (calcMemory.operator != "") {
                    calcMemory.num1 = calcMemory.sum; // почему число один не сохраняется в память? 
                };
            break;
        };
    });
});