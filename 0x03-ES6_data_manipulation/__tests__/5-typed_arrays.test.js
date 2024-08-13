import createInt8TypedArray from '../5-typed_arrays';

describe('createInt8TypedArray', () => {
  it('should create a new Int8 Typed Array and set a value at the correct position', () => {
    expect.assertions(1);
    const typedArray = createInt8TypedArray(10, 2, 89);
    expect(typedArray.getInt8(2)).toBe(89);
  });

  it('should throw an error if the position is outside range', () => {
    expect.assertions(1);
    expect(() => {
      createInt8TypedArray(10, 20, 89);
    }).toThrow('Position outside range');
  });
});
