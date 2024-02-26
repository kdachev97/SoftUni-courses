function firstLast(array) {
  const first = Number(array.shift());
  const last = Number(array.pop());

  return first + last;
}