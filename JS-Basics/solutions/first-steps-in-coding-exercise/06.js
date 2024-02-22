function expensesRenovation(input) {
  let nylon = Number(input[0]);
  let paint = Number(input[1]);
  let thinner = Number(input[2]);
  let hours = Number(input[3]);
  let expenses = 1.50 * nylon + 14.50 * paint + 5 * thinner + 0.1 * (14.50 * paint) + 2 * 1.50 + 0.40;
  console.log(expenses + hours * (0.3 * expenses))
}