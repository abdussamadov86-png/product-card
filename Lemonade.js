import { Drink } from './Drink.js';

export class Lemonade extends Drink {
  constructor(name, size, price, temperature, flavor) {
    super(name, size, price, temperature);
    this.flavor = flavor;
  }

  getInfo() {
    return `${super.getInfo()} | Вкус: ${this.flavor}`;
  }
}