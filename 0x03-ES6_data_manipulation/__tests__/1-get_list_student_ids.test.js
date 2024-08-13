// __tests__/1-get_list_student_ids.test.js
import getListStudentIds from '../1-get_list_student_ids.js';
import getListStudents from '../0-get_list_students.js';

test('getListStudentIds returns an array of ids', () => {
  const students = getListStudents();
  const result = getListStudentIds(students);
  expect(result).toEqual([1, 2, 5]);
});

test('getListStudentIds returns an empty array if input is not an array', () => {
  const result = getListStudentIds("hello");
  expect(result).toEqual([]);
});
