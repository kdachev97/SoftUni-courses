function hotelRoom(input) {
  let month = input[0];
  let numOfNights = Number(input[1]);
  const studMayOctober = 50;
  const apMayOctober = 65;
  const studJunSep = 75.20;
  const apJunSep = 68.70;
  const studJulAug = 76;
  const apJulAug = 77;
  let totalPriceStud;
  let totalPriceAp;

  switch (month) {
    case "May":
    case "October":
      if (numOfNights > 7 && numOfNights <= 14) {
        totalPriceStud = (studMayOctober * numOfNights) - ((studMayOctober * numOfNights) * 0.05);
        totalPriceAp = apMayOctober * numOfNights;
      } else if (numOfNights > 14) {
        totalPriceStud = (studMayOctober * numOfNights) - ((studMayOctober * numOfNights) * 0.3);
        totalPriceAp = (apMayOctober * numOfNights) - ((apMayOctober * numOfNights) * 0.1);
      } else {
        totalPriceStud = studMayOctober * numOfNights;
        totalPriceAp = apMayOctober * numOfNights;
      }
      break;

    case "June":
    case "September":
      if (numOfNights <= 14) {
        totalPriceStud = studJunSep * numOfNights;
        totalPriceAp = apJunSep * numOfNights;
      } else {
        totalPriceStud = (studJunSep * numOfNights) - ((studJunSep * numOfNights) * 0.2);
        totalPriceAp = (apJunSep * numOfNights) - ((apJunSep * numOfNights) * 0.1);
      }
      break;

    case "July":
    case "August":
      if (numOfNights > 14) {
        totalPriceStud = studJulAug * numOfNights;
        totalPriceAp = (apJulAug * numOfNights) - ((apJulAug * numOfNights) * 0.1);
      } else {
        totalPriceStud = studJulAug * numOfNights;
        totalPriceAp = apJulAug * numOfNights;
      }
      break;
  }

  console.log(`
  Apartment: ${totalPriceAp.toFixed(2)} lv.
  Studio: ${totalPriceStud.toFixed(2)} lv.
  `);
}
