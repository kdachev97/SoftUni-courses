class Laptop {
  info = {};
  isOn = false;
  quality = 0;
  constructor(info, quality) {
    this.info = {
      producer: info.producer,
      age: info.age,
      brand: info.brand
    };
    this.quality = quality;
  }

  turnOn() {
    this.quality--;
    this.isOn = true;
    return this.isOn;
  }

  turnOff() {
    this.quality--;
    this.isOn = false;
    return this.isOn;
  }

  showInfo() {
    return JSON.stringify({
      producer: this.producer,
      age: this.age,
      brand: this.brand
    });
  }

  getPrice() {
    return 800 - (this.info.age * 2) + (this.quality * 0.5);
  }
}