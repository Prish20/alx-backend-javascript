// __tests__/4-user-promise.test.js
import signUpUser from '../4-user-promise.js';

test('signUpUser should return a resolved promise with user data', async () => {
  await expect(signUpUser('Bob', 'Dylan')).resolves.toEqual({
    firstName: 'Bob',
    lastName: 'Dylan',
  });
});
