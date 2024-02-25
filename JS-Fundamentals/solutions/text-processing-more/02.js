function serializeString(inputArray) {
  let inputString = inputArray[0];
  let charIndexMap = {};

  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];
    if (charIndexMap[char]) {
      charIndexMap[char].push(i);
    } else {
      charIndexMap[char] = [i];
    }
  }

  Object.entries(charIndexMap)
    .map(([char, indices]) => console.log(`${char}:${indices.join('/')}`))
}