// __tests__/100-await.test.js
import asyncUploadUser from '../100-await.js';
import * as utils from '../utils.js';

jest.mock('../utils.js');

test('asyncUploadUser should return correct response on success', async () => {
  utils.uploadPhoto.mockResolvedValue({ status: 200, body: 'photo-profile-1' });
  utils.createUser.mockResolvedValue({ firstName: 'Guillaume', lastName: 'Salva' });

  await expect(asyncUploadUser()).resolves.toEqual({
    photo: { status: 200, body: 'photo-profile-1' },
    user: { firstName: 'Guillaume', lastName: 'Salva' },
  });
});

test('asyncUploadUser should return null values on failure', async () => {
  utils.uploadPhoto.mockRejectedValue(new Error('Upload failed'));
  utils.createUser.mockResolvedValue({ firstName: 'Guillaume', lastName: 'Salva' });

  await expect(asyncUploadUser()).resolves.toEqual({
    photo: null,
    user: null,
  });
});
