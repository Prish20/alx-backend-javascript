// 7-main.js
import Airport from './7-airport.js';

const airportSF = new Airport('San Francisco Airport', 'SFO');
console.log(airportSF); // Expected output: Airport {_name: 'San Francisco Airport', _code: 'SFO'}
console.log(airportSF.toString()); // Expected output: [object SFO]
