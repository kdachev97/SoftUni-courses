function charactersInRange(char1, char2) {
  let result = '';
  let code1 = char1.charCodeAt(0);
  let code2 = char2.charCodeAt(0);

  let startCode = Math.min(code1, code2);
  let endCode = Math.max(code1, code2);

  for (let i = startCode + 1; i < endCode; i++) {
    result += `${String.fromCharCode(i)} `;
  }

  console.log(result);
}