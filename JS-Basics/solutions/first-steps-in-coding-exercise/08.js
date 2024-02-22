function basketballEquipment(input) {
  let annualFee = Number(input[0]);
  let shoes = annualFee - 0.4 * annualFee;
  let equipment = shoes - 0.2 * shoes;
  let ball = 0.25 * equipment;
  let accessories = 0.2 * ball;
  console.log(annualFee + shoes + equipment + ball + accessories);
}