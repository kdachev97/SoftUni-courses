function shop(input) {
  let product = input[0];
  let city = input[1];
  let quantity = Number(input[2]);

  let price;

  const productChoice = ['coffee', 'water', 'beer', 'sweets', 'peanuts'];

  switch (city) {
    case 'Sofia':
      if (product === productChoice[0]) {
        price = quantity * 0.50;
      }
      else if (product === productChoice[1]) {
        price = quantity * 0.80;
      }
      else if (product === productChoice[2]) {
        price = quantity * 1.20;
      }
      else if (product === productChoice[3]) {
        price = quantity * 1.45;
      }
      else if (product === productChoice[4]) {
        price = quantity * 1.60;
      }
      break;
    case 'Plovdiv':
      if (product === productChoice[0]) {
        price = quantity * 0.40;
      }
      else if (product === productChoice[1]) {
        price = quantity * 0.70;
      }
      else if (product === productChoice[2]) {
        price = quantity * 1.15;
      }
      else if (product === productChoice[3]) {
        price = quantity * 1.30;
      }
      else if (product === productChoice[4]) {
        price = quantity * 1.50;
      }
      break;
    case 'Varna':
      if (product === productChoice[0]) {
        price = quantity * 0.45;
      }
      else if (product === productChoice[1]) {
        price = quantity * 0.70;
      }
      else if (product === productChoice[2]) {
        price = quantity * 1.10;
      }
      else if (product === productChoice[3]) {
        price = quantity * 1.35;
      }
      else if (product === productChoice[4]) {
        price = quantity * 1.55;
      }
      break;
  }
  console.log(price.toFixed(2));
}