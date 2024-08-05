// __tests__/10-loops.test.js
import appendToEachArrayValue from '../10-loops.js';

test('appendToEachArrayValue should concatenate string to each array element', () => {
  expect(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-')).toEqual(['correctly-appended', 'correctly-fixed', 'correctly-displayed']);
});
