// __tests__/3-default-parameter.test.js
import getSumOfHoods from '../3-default-parameter.js';

test('getSumOfHoods should return correct sum with default parameters', () => {
  expect(getSumOfHoods(34)).toBe(142);
});

test('getSumOfHoods should return correct sum with one parameter', () => {
  expect(getSumOfHoods(34, 3)).toBe(56);
});

test('getSumOfHoods should return correct sum with all parameters', () => {
  expect(getSumOfHoods(34, 3, 4)).toBe(41);
});
