import groceriesList from '../9-groceries_list';

describe('groceriesList', () => {
  it('should return a map with correct grocery items and quantities', () => {
    const map = groceriesList();
    expect.assertions(5);

    expect(map.has('Apples')).toBe(true);
    expect(map.get('Apples')).toBe(10);

    expect(map.has('Tomatoes')).toBe(true);
    expect(map.get('Tomatoes')).toBe(10);

    expect(map.size).toBe(5);  // Confirming that the map contains 5 entries
  });
});
