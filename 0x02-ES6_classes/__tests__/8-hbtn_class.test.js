// __tests__/8-hbtn_class.test.js
import HolbertonClass from '../8-hbtn_class.js';

test('HolbertonClass should initialize correctly', () => {
  const hc = new HolbertonClass(12, 'Mezzanine');
  expect(hc._size).toBe(12);
  expect(hc._location).toBe('Mezzanine');
});

test('HolbertonClass should return size when cast to number', () => {
  const hc = new HolbertonClass(12, 'Mezzanine');
  expect(Number(hc)).toBe(12);
});

test('HolbertonClass should return location when cast to string', () => {
  const hc = new HolbertonClass(12, 'Mezzanine');
  expect(String(hc)).toBe('Mezzanine');
});
