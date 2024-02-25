function maxSequence(arr) {
  if (arr.length === 0) {
    return [];
  }

  let longestSequence = [arr[0]];
  let currentSequence = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentSequence.push(arr[i]);
    } else {
      if (currentSequence.length > longestSequence.length) {
        longestSequence = currentSequence;
      }
      currentSequence = [arr[i]];
    }
  }

  if (currentSequence.length > longestSequence.length) {
    longestSequence = currentSequence;
  }

  console.log(longestSequence.join(' '));
}