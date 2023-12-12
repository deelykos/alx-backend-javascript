/* eslint-disable no-underscore-dangle */
class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motot = motor;
    this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}

export default Car;
