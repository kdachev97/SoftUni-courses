function fruitShop(input) {
  let product = input[0];
  let day = input[1];
  let qty = Number(input[2]);
  price = 0;

  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      if (product === "banana") {
        price = qty * 2.50;
      } else if (product === "apple") {
        price = qty * 1.20;
      } else if (product === "orange") {
        price = qty * 0.85;
      } else if (product === "grapefruit") {
        price = qty * 1.45;
      } else if (product === "kiwi") {
        price = qty * 2.70;
      } else if (product === "pineapple") {
        price = qty * 5.50;
      } else if (product === "grapes") {
        price = qty * 3.85;
      }
      break;
    case "Saturday":
    case "Sunday":
      if (product === "banana") {
        price = qty * 2.70;
      } else if (product === "apple") {
        price = qty * 1.25;
      } else if (product === "orange") {
        price = qty * 0.90;
      } else if (product === "grapefruit") {
        price = qty * 1.60;
      } else if (product === "kiwi") {
        price = qty * 3.00;
      } else if (product === "pineapple") {
        price = qty * 5.60;
      } else if (product === "grapes") {
        price = qty * 4.20;
      }
      break;
  }
  if (price > 0) {
    console.log(price.toFixed(2));
  } else {
    console.log("error");
  }

}