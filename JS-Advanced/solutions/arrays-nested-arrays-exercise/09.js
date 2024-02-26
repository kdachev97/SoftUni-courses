function isMagicMatrix(array) {
  let referenceSum = array[0].reduce((sum, value) => sum + value, 0);
  let isMagic = true;

  for (let i = 0; i < array.length; i++) {
    let sumRow = array[i].reduce((sum, value) => sum + value, 0);
    let sumColumn = array.map(row => row[i]).reduce((sum, value) => sum + value, 0);

    if (sumRow !== referenceSum || sumColumn !== referenceSum) {
      isMagic = false;
      break;
    }
  }

  return isMagic;
}