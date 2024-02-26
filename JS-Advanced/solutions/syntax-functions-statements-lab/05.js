function mathOperations(a, b, c) {
  let result;

  if (c === '+') {
    result = a + b;
  } else if (c === '-') {
    result = a - b;
  } else if (c === '*') {
    result = a * b;
  } else if (c === '/') {
    result = a / b;
  } else if (c === '%') {
    result = a % b;
  } else if (c = '**') {
    result = a ** b;
  }

  console.log(result);
}