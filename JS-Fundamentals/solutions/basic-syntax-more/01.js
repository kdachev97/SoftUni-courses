function sortNumbers(num1, num2, num3) {
  let array = [num1, num2, num3];
  array.sort();
  array.reverse();

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}