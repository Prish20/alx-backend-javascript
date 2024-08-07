// 9-main.js
import guardrail from './9-try.js';
import divideFunction from './8-try.js';

console.log(guardrail(() => divideFunction(10, 2)));
// Expected output: [ 5, 'Guardrail was processed' ]

console.log(guardrail(() => divideFunction(10, 0)));
// Expected output: [ 'Error: cannot divide by 0', 'Guardrail was processed' ]
