function argumentInfo(...params) {
  // hold types
  let occurences = {};
  // array to hold results
  let result = [];
  params.forEach(el => {
    // get param type
    let type = typeof (el);
    // push into results array
    result.push(`${type}: ${el}`);
    // increase type count in occurrences obj
    occurences[type] = occurences[type] !== undefined
      ? occurences[type] + 1
      : 1;
  });

  // get occurence keys ('string', 'number'...etc)
  Object.keys(occurences)
    .sort((a, b) => occurences[b] - occurences[a])
    .forEach(key => result.push(`${key} = ${occurences[key]}`));

  console.log(result.join('\n'));
}