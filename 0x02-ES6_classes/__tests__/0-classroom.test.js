// __tests__/0-classroom.test.js
import ClassRoom from '../0-classroom.js';

test('ClassRoom should have maxStudentsSize attribute', () => {
  const room = new ClassRoom(10);
  expect(room._maxStudentsSize).toBe(10);
});
