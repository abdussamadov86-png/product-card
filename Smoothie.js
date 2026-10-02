import { Drink } from './Drink.js';

export class Smoothie extends Drink {
  constructor(name, size, price, temperature, fruits) {
    super(name, size, price, temperature);
    this.fruits = fruits;
  }

  getInfo() {
    return `${super.getInfo()} | Фрукты: ${this.fruits.join(', ')}`;
  }
}