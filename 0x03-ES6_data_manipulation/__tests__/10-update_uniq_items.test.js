import updateUniqueItems from '../10-update_uniq_items';
import groceriesList from '../9-groceries_list';

describe('updateUniqueItems', () => {
  it('should update unique items (quantity 1) in the map to 100', () => {
    const map = groceriesList();
    expect.assertions(2);

    updateUniqueItems(map);
    expect(map.get('Pasta')).toBe(100);
    expect(map.get('Rice')).toBe(100);
  });

  it('should throw an error if the argument is not a map', () => {
    expect.assertions(1);

    expect(() => {
      updateUniqueItems({});
    }).toThrow('Cannot process');
  });
});
