// __tests__/5-spread-operator.test.js
import concatArrays from '../5-spread-operator.js';

test('concatArrays should concatenate arrays and string correctly', () => {
  expect(concatArrays(['a', 'b'], ['c', 'd'], 'Hello')).toEqual(['a', 'b', 'c', 'd', 'H', 'e', 'l', 'l', 'o']);
});
