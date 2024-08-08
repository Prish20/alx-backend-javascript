// __tests__/7-airport.test.js
import Airport from '../7-airport.js';

test('Airport should initialize correctly', () => {
  const airport = new Airport('San Francisco Airport', 'SFO');
  expect(airport._name).toBe('San Francisco Airport');
  expect(airport._code).toBe('SFO');
});

test('Airport should override toString method', () => {
  const airport = new Airport('San Francisco Airport', 'SFO');
  expect(airport.toString()).toBe('[object SFO]');
});
