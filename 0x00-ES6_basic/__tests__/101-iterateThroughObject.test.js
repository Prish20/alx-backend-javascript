// __tests__/101-iterateThroughObject.test.js
import createEmployeesObject from '../11-createEmployeesObject.js';
import createReportObject from '../12-createReportObject.js';
import createIteratorObject from '../100-createIteratorObject.js';
import iterateThroughObject from '../101-iterateThroughObject.js';

test('iterateThroughObject should return correct string of employee names', () => {
  const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie']),
  };

  const report = createReportObject(employees);
  const iterator = createIteratorObject(report);

  expect(iterateThroughObject(iterator)).toBe('Bob | Jane | Sylvie');
});
