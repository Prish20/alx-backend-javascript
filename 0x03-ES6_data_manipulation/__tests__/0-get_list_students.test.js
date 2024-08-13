// __tests__/0-get_list_students.test.js
import getListStudents from '../0-get_list_students';

test('getListStudents returns the correct array of students', () => {
  const expectedResult = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  expect(getListStudents()).toEqual(expectedResult);
});
