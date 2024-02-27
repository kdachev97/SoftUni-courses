// Define the createFormatter function
function createFormatter(separator, symbol, symbolFirst, formatter) {
  // Return a new function with fixed parameters
  return (value) => {
    return formatter(separator, symbol, symbolFirst, value);
  };
}

// Example usage:
let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);

console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429));  // $ 3,14
console.log(dollarFormatter(2.709));   // $ 2,71