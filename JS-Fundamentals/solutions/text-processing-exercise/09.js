function passwordGenerator(array) {
  let concatenatedArray = (array[0] + array[1]).split('');
  let controlArray = array[2].toUpperCase();

  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelIndex = 0;

  for (let i = 0; i < concatenatedArray.length; i++) {
    if (vowels.includes(concatenatedArray[i])) {
      concatenatedArray[i] = controlArray[vowelIndex % controlArray.length].toUpperCase();
      vowelIndex++;
    }
  }

  let reversedPassword = concatenatedArray.reverse().join('');
  console.log(`Your generated password is ${reversedPassword}`);
}