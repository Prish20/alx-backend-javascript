// __tests__/4-rest-parameter.test.js
import returnHowManyArguments from '../4-rest-parameter.js';

test('returnHowManyArguments should return correct count for one argument', () => {
  expect(returnHowManyArguments("one")).toBe(1);
});

test('returnHowManyArguments should return correct count for multiple arguments', () => {
  expect(returnHowManyArguments("one", "two", 3, "4th")).toBe(4);
});
