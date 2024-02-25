function rageQuit(input) {
  let pattern = /([^\d]+)(\d+)/g;
  let match = pattern.exec(input);
  let result = '';

  while (match !== null) {
    let [substring, str, count] = match;
    count = Number(count);

    result += str.toUpperCase().repeat(count);

    match = pattern.exec(input);
  }

  let uniqueSymbols = new Set(result.toUpperCase().split('')).size;

  console.log(`Unique symbols used: ${uniqueSymbols}`);
  console.log(result);
}