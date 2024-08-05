// __tests__/8-getBudgetCurrentYear.test.js
import getBudgetForCurrentYear from '../8-getBudgetCurrentYear.js';

test('getBudgetForCurrentYear should return correct budget object with computed property names', () => {
  const currentYear = new Date().getFullYear();
  const expectedObject = {
    [`income-${currentYear}`]: 2100,
    [`gdp-${currentYear}`]: 5200,
    [`capita-${currentYear}`]: 1090,
  };

  expect(getBudgetForCurrentYear(2100, 5200, 1090)).toEqual(expectedObject);
});
