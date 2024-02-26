function listOfNames(array) {
  let number = 1;
  array.sort((a, b) => a.localeCompare(b));

  for (let i = 0; i < array.length; i++) {
    console.log(`${number}.${array[i]}`);
    number++;
  }
}