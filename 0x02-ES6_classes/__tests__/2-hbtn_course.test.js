// __tests__/2-hbtn_course.test.js
import HolbertonCourse from '../2-hbtn_course.js';

test('HolbertonCourse should initialize correctly', () => {
  const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
  expect(course.name).toBe('ES6');
  expect(course.length).toBe(1);
  expect(course.students).toEqual(['Bob', 'Jane']);
});

test('HolbertonCourse should handle setters correctly', () => {
  const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
  course.name = 'Python 101';
  expect(course.name).toBe('Python 101');
  course.length = 2;
  expect(course.length).toBe(2);
  course.students = ['Alice', 'Eve'];
  expect(course.students).toEqual(['Alice', 'Eve']);
});

test('HolbertonCourse should throw errors for invalid types', () => {
  expect(() => new HolbertonCourse('ES6', '1', ['Bob', 'Jane'])).toThrow(TypeError);
  expect(() => new HolbertonCourse('ES6', 1, 'Bob')).toThrow(TypeError);
  expect(() => {
    const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
    course.name = 12;
  }).toThrow(TypeError);
  expect(() => {
    const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
    course.length = '2';
  }).toThrow(TypeError);
  expect(() => {
    const course = new HolbertonCourse('ES6', 1, ['Bob', 'Jane']);
    course.students = 'Alice';
  }).toThrow(TypeError);
});
