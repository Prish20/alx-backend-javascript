// __tests__/3-currency.test.js
import Currency from '../3-currency.js';

test('Currency should initialize correctly', () => {
  const dollar = new Currency('$', 'Dollars');
  expect(dollar.code).toBe('$');
  expect(dollar.name).toBe('Dollars');
});

test('Currency should handle setters correctly', () => {
  const dollar = new Currency('$', 'Dollars');
  dollar.code = 'USD';
  expect(dollar.code).toBe('USD');
  dollar.name = 'United States Dollar';
  expect(dollar.name).toBe('United States Dollar');
});

test('Currency should throw errors for invalid types', () => {
  expect(() => new Currency('$', 100)).toThrow(TypeError);
  expect(() => {
    const dollar = new Currency('$', 'Dollars');
    dollar.code = 100;
  }).toThrow(TypeError);
  expect(() => {
    const dollar = new Currency('$', 'Dollars');
    dollar.name = 100;
  }).toThrow(TypeError);
});

test('Currency should display full currency correctly', () => {
  const dollar = new Currency('$', 'Dollars');
  expect(dollar.displayFullCurrency()).toBe('Dollars ($)');
});
