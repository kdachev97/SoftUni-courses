function getFibonator() {
  let prev = 1;
  let cur = 0;

  function inner() {
    let next = prev + cur; // 1 1 2 3 5 8 13 21
    prev = cur; // 0 1 1 2 3 5 8
    cur = next; //1 1 2 3 5 8 13
    return cur; // 1 1 2 3 5 8 13
  }

  return inner;
}

let fib = getFibonator();
console.log(fib()); // 1 
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8 
console.log(fib()); // 13