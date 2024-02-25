function sumFirstAndLast(numsAsStrings) {
  let first = Number(numsAsStrings.shift());
  let last = Number(numsAsStrings.pop());

  return first + last;
}