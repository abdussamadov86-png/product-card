class Devices {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  getInfo() {
    console.log(`${this.brand} ${this.model} стоит ${this.price}₽`);
  }
}

class Laptop extends Devices {
  constructor(brand, model, price, ram) {
    super(brand, model, price);
    this.ram = ram;
  }

  getRam() {
    console.log(`${this.brand} имеет ${this.ram}GB RAM`);
  }
}

class Phone extends Devices {
  constructor(brand, model, price, camera) {
    super(brand, model, price);
    this.camera = camera;
  }

  getCamera() {
    console.log(`${this.brand} имеет камеру ${this.camera}MP`);
  }
}

export { Devices, Laptop, Phone };
