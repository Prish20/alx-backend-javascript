// 6-main.js
import handleProfileSignup from './6-final-user.js';

handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg').then((result) => {
  console.log(result);
});
// Expected output: 
// [
//   { status: 'fulfilled', value: { firstName: 'Bob', lastName: 'Dylan' } },
//   { status: 'rejected', value: 'Error: bob_dylan.jpg cannot be processed' }
// ]
