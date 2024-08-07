// 8-main.js
import divideFunction from './8-try.js';

console.log(divideFunction(10, 2));
// Expected output: 5

try {
  console.log(divideFunction(10, 0));
} catch (error) {
  console.error(error.message);
  // Expected output: cannot divide by 0
}
