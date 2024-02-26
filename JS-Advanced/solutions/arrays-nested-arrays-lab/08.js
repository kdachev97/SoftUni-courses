function processOddPositions(array) {
  const oddNums = array.filter((v, i) => i % 2 === 1);
  const doubled = oddNums.map((x) => x * 2);
  doubled.reverse();
  return doubled.join(' ');
}