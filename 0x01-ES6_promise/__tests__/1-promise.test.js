// __tests__/1-promise.test.js
import getFullResponseFromAPI from '../1-promise.js';

test('getFullResponseFromAPI should resolve when success is true', async () => {
  await expect(getFullResponseFromAPI(true)).resolves.toEqual({
    status: 200,
    body: 'Success',
  });
});

test('getFullResponseFromAPI should reject when success is false', async () => {
  await expect(getFullResponseFromAPI(false)).rejects.toThrow('The fake API is not working currently');
});
