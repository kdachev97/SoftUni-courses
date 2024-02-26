function createSortedList() {
  let array = [];
  return {
    add(element) {
      array.push(element);
      this.size++;
      array.sort((a, b) => a - b);
    },
    remove(index) {
      if (index < 0 || index >= array.length) {
        throw new RangeError('Index out of range');
      }
      array.splice(index, 1);
      this.size--;
    },
    get(index) {
      if (index < 0 || index >= array.length) {
        throw new RangeError('Index out of range');
      }

      return array[index];
    },
    size: 0,
  }
}