// __tests__/5-building.test.js
import Building from '../5-building.js';

test('Building should initialize correctly', () => {
  const b = new Building(100);
  expect(b.sqft).toBe(100);
});

test('Building subclass should implement evacuationWarningMessage', () => {
  class TestBuilding extends Building {
    evacuationWarningMessage() {
      return 'Evacuate immediately!';
    }
  }

  const tb = new TestBuilding(200);
  expect(tb.evacuationWarningMessage()).toBe('Evacuate immediately!');
});

test('Building should throw an error if subclass does not implement evacuationWarningMessage', () => {
  expect(() => {
    class IncompleteBuilding extends Building {}
    new IncompleteBuilding(300);
  }).toThrowError('Class extending Building must override evacuationWarningMessage');
});
