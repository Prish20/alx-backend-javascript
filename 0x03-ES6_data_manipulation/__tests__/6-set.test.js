import setFromArray from '../6-set';

describe('setFromArray', () => {
  it('should return a Set from an array of numbers', () => {
    expect.assertions(1);
    const set = setFromArray([1, 2, 3, 4, 5]);
    expect(set).toStrictEqual(new Set([1, 2, 3, 4, 5]));
  });

  it('should return a Set from an array with duplicate values', () => {
    expect.assertions(1);
    const set = setFromArray([1, 2, 2, 3, 4, 5, 5]);
    expect(set).toStrictEqual(new Set([1, 2, 3, 4, 5]));
  });

  it('should return a Set from an array of strings', () => {
    expect.assertions(1);
    const set = setFromArray(['a', 'b', 'c', 'a']);
    expect(set).toStrictEqual(new Set(['a', 'b', 'c']));
  });
});
