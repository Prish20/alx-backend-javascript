// __tests__/0-promise.test.js
import getResponseFromAPI from '../0-promise.js';

test('getResponseFromAPI should return a Promise', () => {
  const response = getResponseFromAPI();
  expect(response instanceof Promise).toBe(true);
});
