// __tests__/4-pricing.test.js
import Pricing from '../4-pricing.js';
import Currency from '../3-currency.js';

test('Pricing should initialize correctly', () => {
  const currency = new Currency('EUR', 'Euro');
  const pricing = new Pricing(100, currency);
  expect(pricing.amount).toBe(100);
  expect(pricing.currency).toBe(currency);
});

test('Pricing should handle setters correctly', () => {
  const currency = new Currency('EUR', 'Euro');
  const pricing = new Pricing(100, currency);
  pricing.amount = 200;
  expect(pricing.amount).toBe(200);
  const newCurrency = new Currency('USD', 'Dollar');
  pricing.currency = newCurrency;
  expect(pricing.currency).toBe(newCurrency);
});

test('Pricing should throw errors for invalid types', () => {
  const currency = new Currency('EUR', 'Euro');
  expect(() => new Pricing('100', currency)).toThrow(TypeError);
  expect(() => new Pricing(100, 'currency')).toThrow(TypeError);
  const pricing = new Pricing(100, currency);
  expect(() => {
    pricing.amount = '200';
  }).toThrow(TypeError);
  expect(() => {
    pricing.currency = 'newCurrency';
  }).toThrow(TypeError);
});

test('Pricing should display full price correctly', () => {
  const currency = new Currency('EUR', 'Euro');
  const pricing = new Pricing(100, currency);
  expect(pricing.displayFullPrice()).toBe('100 Euro (EUR)');
});

test('Pricing should convert price correctly', () => {
  expect(Pricing.convertPrice(100, 1.2)).toBe(120);
  expect(() => Pricing.convertPrice('100', 1.2)).toThrow(TypeError);
  expect(() => Pricing.convertPrice(100, '1.2')).toThrow(TypeError);
});
