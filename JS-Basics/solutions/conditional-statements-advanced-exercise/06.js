function numberOperations(input) {
  let number1 = Number(input[0]);
  let number2 = Number(input[1]);
  let operator = input[2];
  const case1 = ['+', '-', '*'];
  let result;
  const oddEven = ['even', 'odd'];

  if (case1.includes(operator)) {
    switch (operator) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      case '*':
        result = number1 * number2;
        break;
    }
    if (result % 2 === 0) {
      console.log(`${number1} ${operator} ${number2} = ${result} - ${oddEven[0]}`);
    } else {
      console.log(`${number1} ${operator} ${number2} = ${result} - ${oddEven[1]}`);
    }
  } else if (operator === '/') {
    if (number2 === 0) {
      console.log(`Cannot divide ${number1} by zero`);
    } else {
      result = number1 / number2;
      console.log(`${number1} ${operator} ${number2} = ${result.toFixed(2)}`);
    }
  } else if (operator === '%') {
    if (number2 === 0) {
      console.log(`Cannot divide ${number1} by zero`);
    } else {
      result = number1 % number2;
      console.log(`${number1} ${operator} ${number2} = ${result}`);
    }
  }
}