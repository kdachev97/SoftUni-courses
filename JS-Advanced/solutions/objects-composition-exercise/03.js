function carFactory(obj) {
  // let car = Object.assign({}, obj);
  let car = {};
  car.model = obj.model;

  if (obj.power <= 90) {
    car.engine = { power: 90, volume: 1800 };
  } else if (obj.power > 90 && obj.power <= 120) {
    car.engine = { power: 120, volume: 2400 };
  } else {
    car.engine = { power: 200, volume: 3500 };
  }

  car.carriage = { type: obj.carriage, color: obj.color };
  if (obj.wheelsize % 2 === 0) {
    obj.wheelsize--;
  }
  car.wheels = new Array(4).fill(obj.wheelsize, 0, 4);

  return car;
}