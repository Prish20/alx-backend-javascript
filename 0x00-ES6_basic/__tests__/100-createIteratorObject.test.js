// __tests__/100-createIteratorObject.test.js
import createEmployeesObject from '../11-createEmployeesObject.js';
import createReportObject from '../12-createReportObject.js';
import createIteratorObject from '../100-createIteratorObject.js';

test('createIteratorObject should return an iterator for all employees', () => {
  const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie']),
  };

  const report = createReportObject(employees);
  const iterator = createIteratorObject(report);
  const employeeArray = Array.from(iterator);

  expect(employeeArray).toEqual(['Bob', 'Jane', 'Sylvie']);
});
