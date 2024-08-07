// __tests__/3-all.test.js
import handleProfileSignup from '../3-all.js';
import * as utils from '../utils.js';

jest.mock('../utils.js');

test('handleProfileSignup logs correct message on success', async () => {
  utils.uploadPhoto.mockResolvedValue({ status: 200, body: 'photo-profile-1' });
  utils.createUser.mockResolvedValue({ firstName: 'Guillaume', lastName: 'Salva' });

  console.log = jest.fn();
  await handleProfileSignup();
  expect(console.log).toHaveBeenCalledWith('photo-profile-1 Guillaume Salva');
});

test('handleProfileSignup logs error message on failure', async () => {
  utils.uploadPhoto.mockRejectedValue(new Error('Upload failed'));
  utils.createUser.mockResolvedValue({ firstName: 'Guillaume', lastName: 'Salva' });

  console.log = jest.fn();
  await handleProfileSignup();
  expect(console.log).toHaveBeenCalledWith('Signup system offline');
});
