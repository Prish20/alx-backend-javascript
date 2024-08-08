// __tests__/9-hoisting.test.js
import { listOfStudents } from '../9-hoisting.js';
import { StudentHolberton } from '../9-hoisting.js';

test('Students should be created correctly', () => {
  expect(listOfStudents.length).toBe(5);
  expect(listOfStudents[0] instanceof StudentHolberton).toBe(true);
  expect(listOfStudents[0].fullName).toBe('Guillaume Salva');
  expect(listOfStudents[0].holbertonClass.year).toBe(2020);
});

test('Students full description should be correct', () => {
  const expectedDescriptions = [
    'Guillaume Salva - 2020 - San Francisco',
    'John Doe - 2020 - San Francisco',
    'Albert Clinton - 2019 - San Francisco',
    'Donald Bush - 2019 - San Francisco',
    'Jason Sandler - 2019 - San Francisco',
  ];

  const actualDescriptions = listOfStudents.map(student => student.fullStudentDescription);
  expect(actualDescriptions).toEqual(expectedDescriptions);
});
