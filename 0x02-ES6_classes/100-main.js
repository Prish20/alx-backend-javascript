// 100-main.js
import EVCar from './100-evcar.js';

const ec1 = new EVCar('Tesla', 'Turbo', 'Red', '250');
console.log(ec1); // Expected output: EVCar { _brand: 'Tesla', _motor: 'Turbo', _color: 'Red', _range: '250' }

const ec2 = ec1.cloneCar();
console.log(ec2); // Expected output: Car { _brand: 'Tesla', _motor: 'Turbo', _color: 'Red' }
console.log(ec2 instanceof EVCar); // Expected output: false
console.log(ec2 instanceof Car); // Expected output: true
