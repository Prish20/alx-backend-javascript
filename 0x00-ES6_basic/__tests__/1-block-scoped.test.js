// __tests__/1-block-scoped.test.js
import taskBlock from '../1-block-scoped.js';

test('taskBlock should return [false, true] when trueOrFalse is true', () => {
  expect(taskBlock(true)).toEqual([false, true]);
});

test('taskBlock should return [false, true] when trueOrFalse is false', () => {
  expect(taskBlock(false)).toEqual([false, true]);
});
