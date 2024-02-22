function calculateDeposits(input) {
  let deposit = Number(input[0]);
  let duration = Number(input[1]);
  let annualInterestRate = Number(input[2]);
  console.log(deposit + duration * ((deposit * annualInterestRate / 100) / 12));
}