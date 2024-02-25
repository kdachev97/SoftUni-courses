function printNthElement(array) {
  let result = '';
  let lastElement = array[array.length - 1];
  for (let i = 0; i < array.length - 1; i += Number(lastElement)) {
    result += `${array[i]} `;
  }
  console.log(result);
}