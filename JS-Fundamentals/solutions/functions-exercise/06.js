function palindromeIntegers(array) {

  for (let i = 0; i < array.length; i++) {
    let string = array[i].toString().split("");
    let reversedString = string.slice().reverse();

    if (string.join("") === reversedString.join("")) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}