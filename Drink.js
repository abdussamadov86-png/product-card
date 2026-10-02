export class Drink {
  #temperature;

  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }

  // Публичный метод — получить информацию
  getInfo() {
    return `${this.name} (${this.size}) — ${this.price}₽`;
  }

  // Публичный метод — получить температуру
  getTemperature() {
    return this.#temperature;
  }

  // Публичный метод — установить температуру
  setTemperature(newTemp) {
    this.#temperature = newTemp;
    console.log(`Температура "${this.name}" изменена на ${newTemp}°C`);
  }

  // Приватный метод — приготовить
  #prepare() {
    console.log(`Готовим "${this.name}"...`);
    this.setTemperature(80);
  }

  // Публичный метод — подать напиток
  serve() {
    this.#prepare();
    console.log(`"${this.name}" подан!`);
  }
}