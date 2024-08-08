// 6-main.js
import SkyHighBuilding from './6-sky_high.js';

const building = new SkyHighBuilding(140, 60);
console.log(building.sqft); // Expected output: 140
console.log(building.floors); // Expected output: 60
console.log(building.evacuationWarningMessage()); // Expected output: Evacuate slowly the 60 floors.
