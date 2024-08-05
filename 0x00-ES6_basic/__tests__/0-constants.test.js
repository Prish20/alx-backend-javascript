// __tests__/0-constants.test.js
import { taskFirst, getLast, taskNext } from '../0-constants.js';

test('taskFirst should return the correct string', () => {
  expect(taskFirst()).toBe('I prefer const when I can.');
});

test('getLast should return the correct string', () => {
  expect(getLast()).toBe(' is okay');
});

test('taskNext should return the correct concatenated string', () => {
  expect(taskNext()).toBe('But sometimes let is okay');
});
