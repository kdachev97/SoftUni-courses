function magicMatrix(array) {
  const size = array.length;
  let referenceSum = array[0].reduce((sum, value) => sum + value, 0);
  let isMagic = true;

  for (let i = 0; i < size; i++) {
    let sumRow = array[i].reduce((sum, value) => sum + value, 0);
    let sumColumn = array.map(row => row[i]).reduce((sum, value) => sum + value, 0);

    if (sumRow !== referenceSum || sumColumn !== referenceSum) {
      isMagic = false;
      break;
    }
  }

  console.log(isMagic);
}