function calorieObject(array) {
  let object = {};
  for (let i = 0; i < array.length; i += 2) {
    let key = array[i];
    let value = Number(array[i + 1]);
    object[key] = value;
  }
  return object;
}