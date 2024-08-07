// __tests__/6-final-user.test.js
import handleProfileSignup from '../6-final-user.js';

test('handleProfileSignup should handle multiple promises', async () => {
  const result = await handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg');
  expect(result).toEqual([
    { status: 'fulfilled', value: { firstName: 'Bob', lastName: 'Dylan' } },
    { status: 'rejected', value: 'Error: bob_dylan.jpg cannot be processed' },
  ]);
});
