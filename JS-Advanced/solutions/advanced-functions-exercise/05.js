function functionalSum(number) {
  let sum = 0;

  function inner(number) {
    sum += number;
    return inner;
  }

  inner.toString = () => {
    return sum;
  }
  return inner(number);
}

let a = functionalSum(1)(6)(-3);
console.log(a.toString());