function addAndSubtract(a, b, c) {
  let sum = add(a, b);
  let result = subtract(sum, c);

  function add(a, b) {
    return a + b;
  }

  function subtract(sum, c) {
    return sum - c;
  }
  console.log(result);
}