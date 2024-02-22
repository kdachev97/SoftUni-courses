function foodDelivery(input) {
  let chickenMenus = Number(input[0]);
  let fishMenus = Number(input[1]);
  let veganMenus = Number(input[2]);
  let menus = chickenMenus * 10.35 + fishMenus * 12.40 + veganMenus * 8.15;
  console.log(menus + 0.2 * menus + 2.50);
}