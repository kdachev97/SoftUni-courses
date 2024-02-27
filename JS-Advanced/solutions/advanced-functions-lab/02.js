function add(number) {
  return (value) => {
    return number + value;
  }
}

let add5 = add(5);
console.log(add5(2));
console.log(add5(3));