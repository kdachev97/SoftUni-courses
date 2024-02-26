function jansNotation(array) {
  let operands = [];
  let wasWrong = false;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      operands.push(array[i]);
    } else {
      if (operands.length < 2) {
        console.log('Error: not enough operands!');
        wasWrong = true;
        break;
      }
      let operand2 = operands.pop();
      let operand1 = operands.pop();
      let operator = array[i];
      let result = applyOperation(operand1, operand2, operator);
      operands.push(result);
    }
  }

  if (operands.length > 1 && wasWrong === false) {
    console.log('Error: too many operands!');
  } else if (wasWrong === false) {
    console.log(operands[0]);
  }

  function applyOperation(operand1, operand2, operator) {
    const arithmeticOperator = {
      '+': () => operand1 + operand2,
      '-': () => operand1 - operand2,
      '*': () => operand1 * operand2,
      '/': () => operand1 / operand2,
    }
    return arithmeticOperator[operator]();
  }

}