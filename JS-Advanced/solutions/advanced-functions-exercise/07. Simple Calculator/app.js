function calculator() {
    let firstInput;
    let secondInput;
    let resultField;

    return {
        init: (selector1, selector2, resultSelector) => {
            firstInput = document.querySelector(selector1);
            secondInput = document.querySelector(selector2);
            resultField = document.querySelector(resultSelector);
        },
        add: () => {
            resultField.value = Number(firstInput.value) + Number(secondInput.value);
        },
        subtract: () => {
            resultField.value = Number(firstInput.value) - Number(secondInput.value);
        }
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');



