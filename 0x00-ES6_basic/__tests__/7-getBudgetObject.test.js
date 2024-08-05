// __tests__/7-getBudgetObject.test.js
import getBudgetObject from '../7-getBudgetObject.js';

test('getBudgetObject should return correct budget object', () => {
  expect(getBudgetObject(400, 700, 900)).toEqual({ income: 400, gdp: 700, capita: 900 });
});
