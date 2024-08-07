// __tests__/5-photo-reject.test.js
import uploadPhoto from '../5-photo-reject.js';

test('uploadPhoto should return a rejected promise with an error message', async () => {
  await expect(uploadPhoto('guillaume.jpg')).rejects.toThrow('guillaume.jpg cannot be processed');
});
