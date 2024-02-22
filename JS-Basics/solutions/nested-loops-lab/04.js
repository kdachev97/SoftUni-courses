function sum2Nums(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  let magicNum = Number(input[2]);

  let combinationsTested = 0;
  let foundMatch = false;

  for (let n1 = num1; n1 <= num2; n1++) {
    for (let n2 = num1; n2 <= num2; n2++) {
      combinationsTested++;
      if (n1 + n2 === magicNum) {
        console.log(`Combination N:${combinationsTested} (${n1} + ${n2} = ${magicNum})`);
        foundMatch = true;
        break;
      }
    }
    if (foundMatch) {
      break;
    }
  }

  if (!foundMatch) {
    console.log(`${combinationsTested} combinations - neither equals ${magicNum}`);
  }
}