function stringLength(...params) {
  let [a, b, c] = params;
  let total = a.length + b.length + c.length;
  let average = Math.floor(total / params.length);

  console.log(total);
  console.log(average);
}