function power(x, n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= x;
  }
  console.log(result);
}