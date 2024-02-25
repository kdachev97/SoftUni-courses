function deserializeString(array) {
  let result = [];
  let maxIndex = 0;

  for (let line of array) {
    if (line === 'end') {
      break;
    }

    let [letter, ...indices] = line.split(':');
    indices = indices[0].split('/').map(Number);

    for (let index of indices) {
      result[index] = letter;
      maxIndex = Math.max(maxIndex, index);
    }
  }

  console.log(result.slice(0, maxIndex + 1).join(''));
}