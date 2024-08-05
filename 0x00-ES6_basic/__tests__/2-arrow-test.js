// __tests__/2-arrow.test.js
import getNeighborhoodsList from '../2-arrow.js';

test('addNeighborhood should add a new neighborhood', () => {
  const neighborhoodsList = new getNeighborhoodsList();
  expect(neighborhoodsList.addNeighborhood('Noe Valley')).toEqual(['SOMA', 'Union Square', 'Noe Valley']);
});
