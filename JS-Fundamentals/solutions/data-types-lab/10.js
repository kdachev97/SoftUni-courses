function specialNumbers(n) {
  for (let i = 1; i <= n; i++) {
    let digitsSum = 0;
    let iAsString = i.toString();
    for (let j = 0; j < iAsString.length; j++) {
      let digit = Number(iAsString[j]);
      digitsSum += digit;
    }
    const isSpecial = digitsSum === 5 || digitsSum === 7 || digitsSum === 11;
    console.log(`${i} -> ${isSpecial ? "True" : "False"}`);
  }
}