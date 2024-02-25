function nonDecreasingSubset(array) {
  let currentBiggest = Number.NEGATIVE_INFINITY;

  let newArray = array.filter((num) => {
    if (num >= currentBiggest) {
      currentBiggest = num;
      return true;
    } else {
      return false;
    }
  });
  console.log(newArray.join(' '));
}