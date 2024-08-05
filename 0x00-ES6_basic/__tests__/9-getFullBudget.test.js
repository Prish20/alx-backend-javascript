// __tests__/9-getFullBudget.test.js
import getFullBudgetObject from '../9-getFullBudget.js';

test('getFullBudgetObject should return correct budget object with methods', () => {
  const fullBudget = getFullBudgetObject(20, 50, 10);

  expect(fullBudget.getIncomeInDollars(fullBudget.income)).toBe('$20');
  expect(fullBudget.getIncomeInEuros(fullBudget.income)).toBe('20 euros');
});
