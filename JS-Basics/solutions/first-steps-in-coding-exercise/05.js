function schoolSupplies(input) {
  let pens = Number(input[0]);
  let markers = Number(input[1]);
  let chemicals = Number(input[2]);
  let discount = Number(input[3]);
  let priceNoDiscount = 5.80 * pens + 7.20 * markers + 1.20 * chemicals;
  console.log(priceNoDiscount - priceNoDiscount * discount / 100);
}