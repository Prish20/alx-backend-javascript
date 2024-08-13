import cleanSet from '../8-clean_set';

describe('cleanSet', () => {
  it('should return a string of all the set values that start with the specified string', () => {
    const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
    const result = cleanSet(set, 'bon');
    expect.assertions(1);
    expect(result).toBe('jovi-aparte-appetit');
  });

  it('should return an empty string if startString is an empty string', () => {
    const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
    const result = cleanSet(set, '');
    expect.assertions(1);
    expect(result).toBe('');
  });

  it('should return an empty string if startString does not match any set value', () => {
    const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
    const result = cleanSet(set, 'foo');
    expect.assertions(1);
    expect(result).toBe('');
  });

  it('should return an empty string if startString is not a string', () => {
    const set = new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']);
    const result = cleanSet(set, 123);
    expect.assertions(1);
    expect(result).toBe('');
  });
});
