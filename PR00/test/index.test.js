
const Car = require('../Car');
const ElectricCar = require('../ElectricCar');

test('Class Car exist', () => {
  let data = new Car();
  expect(data).toBeInstanceOf(Car);
});

test('Exist properties name & year', () => {
  let data = {name : '', year: 0};
  expect(data).toMatchObject(new Car('', 0));
});

test('Class Constructor exist', () => {
  let data = new Car('Peugeot 206', 2001);
  expect(data).not.toEqual(new Car('Renault 5 ', 87));
});

test('Return age', () => {
  let data = new Car('Peugeot 206', 2001);
  expect(data.age()).toBe(21);
});

test('Class ElectricCar exist', () => {
  let data = new ElectricCar();
  expect(data).toBeInstanceOf(ElectricCar);
});

test('Class ElectricCar extends car', () => {
  let data = new ElectricCar();
  expect(data).toBeInstanceOf(Car);
});

test('Exist properties name, year, power', () => {
  let data = {name : '', year: 0, power: 95};
  expect(data).toMatchObject(new ElectricCar('', 0, 95));
});

test('Return age ElectricCar', () => {
  let data = new ElectricCar('Peugeot 206', 2001, 110);
  expect(data.age()).toBe(21);
});

test('Show function ElectricCar', () => {
  let data = new ElectricCar('Peugeot 206', 2001, 110);
  expect(data.show()).toBe("21 years old car, it is a electric Peugeot 206 with 110");
});
