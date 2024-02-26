function cookingByNumbers(numAsString, op1, op2, op3, op4, op5) {
  let num = Number(numAsString);
  const array = [op1, op2, op3, op4, op5];
  let operations = {
    chop,
    dice,
    spice,
    bake,
    fillet,
  };

  for (let i = 0; i < array.length; i++) {
    let command = array[i];
    let operation = operations[command];
    num = operation(num);
    console.log(num)
  }

  function chop(num) {
    return num / 2;
  }

  function dice(num) {
    return Math.sqrt(num);
  }

  function spice(num) {
    return num + 1;
  }

  function bake(num) {
    return num * 3;
  }

  function fillet(num) {
    return 0.8 * num;
  }
}