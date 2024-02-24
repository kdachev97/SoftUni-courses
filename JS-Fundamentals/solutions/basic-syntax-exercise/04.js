function vacation(group, type, day) {
  let price = 0;

  if (type === "Business" && group >= 100) {
    group = group - 10;
  }

  switch (type) {
    case "Students":
      if (day === "Friday") {
        price = 8.45 * group;
      } else if (day === "Saturday") {
        price = 9.80 * group;
      } else if (day === "Sunday") {
        price = 10.46 * group;
      }
      break;
    case "Business":
      if (day === "Friday") {
        price = 10.90 * group;
      } else if (day === "Saturday") {
        price = 15.60 * group;
      } else if (day === "Sunday") {
        price = 16 * group;
      }
      break;
    case "Regular":
      if (day === "Friday") {
        price = 15 * group;
      } else if (day === "Saturday") {
        price = 20 * group;
      } else if (day === "Sunday") {
        price = 22.50 * group;
      }
      break;
  }

  if (type === "Students" && group >= 30) {
    price = 0.85 * price;
  } else if (type === "Regular" && group >= 10 && group <= 20) {
    price = 0.95 * price;
  }

  console.log(`Total price: ${price.toFixed(2)}`);
}