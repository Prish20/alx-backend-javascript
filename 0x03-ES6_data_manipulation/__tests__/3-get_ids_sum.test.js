// __tests__/3-get_ids_sum.test.js
import getStudentIdsSum from '../3-get_ids_sum';
import getListStudents from '../0-get_list_students';

describe('getStudentIdsSum', () => {
  it('should return the sum of all student IDs', () => {
    expect.assertions(1);
    const students = getListStudents();
    expect(getStudentIdsSum(students)).toBe(8); // 1 + 2 + 5 = 8
  });

  it('should return 0 if the list is empty', () => {
    expect.assertions(1);
    expect(getStudentIdsSum([])).toBe(0);
  });
});
