// __tests__/9-hoisting.test.js
import { HolbertonClass, StudentHolberton, listOfStudents } from '../9-hoisting.js';

test('HolbertonClass should initialize correctly', () => {
  const class2019 = new HolbertonClass(2019, 'San Francisco');
  expect(class2019.year).toBe(2019);
  expect(class2019.location).toBe('San Francisco');
});

test('StudentHolberton should initialize correctly', () => {
  const class2020 = new HolbertonClass(2020, 'San Francisco');
  const student = new StudentHolberton('Guillaume', 'Salva', class2020);
  expect(student.fullName).toBe('Guillaume Salva');
  expect(student.holbertonClass).toBe(class2020);
});

test('StudentHolberton should return full student description', () => {
  const class2020 = new HolbertonClass(2020, 'San Francisco');
  const student = new StudentHolberton('Guillaume', 'Salva', class2020);
  expect(student.fullStudentDescription).toBe('Guillaume Salva - 2020 - San Francisco');
});

test('listOfStudents should contain correct students', () => {
  expect(listOfStudents.length).toBe(5);
  expect(listOfStudents[0].fullName).toBe('Guillaume Salva');
  expect(listOfStudents[0].holbertonClass.year).toBe(2020);
});
