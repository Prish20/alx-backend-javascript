// __tests__/2-get_students_by_loc.test.js
import getStudentsByLocation from '../2-get_students_by_loc';
import getListStudents from '../0-get_list_students';

describe('getStudentsByLocation', () => {
  it('should return students located in the specified city', () => {
    expect.assertions(1); // Ensure at least one assertion is called
    const students = getListStudents();
    expect(getStudentsByLocation(students, 'San Francisco')).toStrictEqual([
      { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
      { id: 5, firstName: 'Serena', location: 'San Francisco' },
    ]);
  });

  it('should return an empty array if no students are in the specified city', () => {
    expect.assertions(1); // Ensure at least one assertion is called
    const students = getListStudents();
    expect(getStudentsByLocation(students, 'Los Angeles')).toStrictEqual([]);
  });
});
