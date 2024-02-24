function sumOfOdds(numOfOdds) {
  let sumOfOdds = 0;
  let num = 1;
  for (let i = 0; i < numOfOdds; i++) {
    console.log(num);
    sumOfOdds += num;
    num += 2;
  }
  console.log(`Sum: ${sumOfOdds}`);
}