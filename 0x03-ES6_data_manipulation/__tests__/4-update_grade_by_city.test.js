// __tests__/4-update_grade_by_city.test.js

import updateStudentGradeByCity from '../4-update_grade_by_city';
import getListStudents from '../0-get_list_students';

describe('updateStudentGradeByCity', () => {
  it('should assign "N/A" to students without a grade', () => {
    expect.hasAssertions();
    const students = getListStudents();
    const updatedStudents = updateStudentGradeByCity(students, 'San Francisco', [
      { studentId: 5, grade: 97 },
    ]);

    expect(updatedStudents).toStrictEqual([
      {
        id: 1,
        firstName: 'Guillaume',
        location: 'San Francisco',
        grade: 'N/A',
      },
      {
        id: 5,
        firstName: 'Serena',
        location: 'San Francisco',
        grade: 97,
      },
    ]);
  });
});
