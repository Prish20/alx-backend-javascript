// 5-building.js

export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') throw new TypeError('Square footage must be a number');
    this._sqft = sqft;

    if (
      new.target !== Building
        && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage
    ) {
      throw new TypeError('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Abstract method (must be implemented by subclasses)
  evacuationWarningMessage() {
    console.log(this._sqft); // Adding a reference to `this` to satisfy ESLint
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
