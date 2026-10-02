export class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }

  getInfo() {
    console.log(`Кафе "${this.name}" находится в ${this.location}`);
  }

  orderDrink(drink) {
    console.log(`\n=== Заказ в кафе "${this.name}" ===`);
    console.log(`Клиент заказал: ${drink.getInfo()}`);
    drink.serve();
    console.log(`Температура подачи: ${drink.getTemperature()}°C`);
    console.log(`=== Заказ готов ===\n`);
  }
}