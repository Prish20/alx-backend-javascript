// __tests__/7-has_array_values.test.js
import hasValuesFromArray from '../7-has_array_values';

describe('hasValuesFromArray', () => {
  it('should return true if all elements are in the set', () => {
    const set = new Set([1, 2, 3, 4, 5]);
    const array = [1];
    expect.assertions(1);
    expect(hasValuesFromArray(set, array)).toBe(true);
  });

  it('should return false if any element is not in the set', () => {
    const set = new Set([1, 2, 3, 4, 5]);
    const array = [10];
    expect.assertions(1);
    expect(hasValuesFromArray(set, array)).toBe(false);
  });

  it('should return false if some elements are in the set and some are not', () => {
    const set = new Set([1, 2, 3, 4, 5]);
    const array = [1, 10];
    expect.assertions(1);
    expect(hasValuesFromArray(set, array)).toBe(false);
  });
});
