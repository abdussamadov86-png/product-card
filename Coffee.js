import { Drink } from './Drink.js';

export class Coffee extends Drink {
  constructor(name, size, price, temperature, beanType, milkType) {
    super(name, size, price, temperature);
    this.beanType = beanType;
    this.milkType = milkType;
  }

  // Переопределяем метод (полиморфизм)
  getInfo() {
    return `${super.getInfo()} | Зёрна: ${this.beanType}, Молоко: ${this.milkType}`;
  }
}