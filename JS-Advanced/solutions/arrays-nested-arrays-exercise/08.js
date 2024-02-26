function sortArrayBy2Criteria(array) {
  array.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b);
  });

  return array.join('\n');
}