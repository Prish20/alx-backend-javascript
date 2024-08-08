// 2-main.js
import HolbertonCourse from './2-hbtn_course.js';

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"]);
console.log(c1.name); // Expected output: ES6
c1.name = "Python 101";
console.log(c1); // Expected output: HolbertonCourse { _name: 'Python 101', _length: 1, _students: [ 'Bob', 'Jane' ] }

try {
  c1.name = 12;
} catch (err) {
  console.log(err); // Expected output: TypeError: Name must be a string
}

try {
  const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
} catch (err) {
  console.log(err); // Expected output: TypeError: Length must be a number
}
