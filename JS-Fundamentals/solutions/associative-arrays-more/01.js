function garage(cars) {
  let garageDict = {};

  for (let carInfo of cars) {
    let [garageNumber, carDetails] = carInfo.split(' - ', 2);
    let garageNum = Number(garageNumber);

    if (!garageDict[garageNum]) {
      garageDict[garageNum] = [];
    }

    let carDetailsArr = carDetails.split(', ');
    let carInfoObj = {};

    for (let detail of carDetailsArr) {
      let [key, value] = detail.split(': ');
      carInfoObj[key] = value;
    }

    garageDict[garageNum].push(carInfoObj);
  }

  for (let [garageNum, cars] of Object.entries(garageDict)) {
    console.log(`Garage № ${garageNum}`);
    for (let car of cars) {
      let detailsStr = '--- ' + Object.entries(car).map(([key, value]) => `${key} - ${value}`).join(', ');
      console.log(detailsStr);
    }
  }
}