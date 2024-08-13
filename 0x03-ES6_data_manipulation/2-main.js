// 2-main.js
import getListStudents from './0-get_list_students';
import getStudentsByLocation from './2-get_students_by_loc';

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));
// Expected output:
// [
//   { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
//   { id: 5, firstName: 'Serena', location: 'San Francisco' }
// ]
