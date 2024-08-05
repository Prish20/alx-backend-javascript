// __tests__/11-createEmployeesObject.test.js
import createEmployeesObject from '../11-createEmployeesObject.js';

test('createEmployeesObject should return correct object', () => {
  expect(createEmployeesObject("Software", ["Bob", "Sylvie"])).toEqual({ Software: ["Bob", "Sylvie"] });
});
