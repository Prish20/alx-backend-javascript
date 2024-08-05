// __tests__/12-createReportObject.test.js
import createEmployeesObject from '../11-createEmployeesObject.js';
import createReportObject from '../12-createReportObject.js';

test('createReportObject should return correct report object', () => {
  const employees = {
    ...createEmployeesObject('engineering', ['Bob', 'Jane']),
    ...createEmployeesObject('marketing', ['Sylvie']),
  };

  const report = createReportObject(employees);

  expect(report.allEmployees).toEqual({
    engineering: ['Bob', 'Jane'],
    marketing: ['Sylvie'],
  });
  expect(report.getNumberOfDepartments()).toBe(2);
});
