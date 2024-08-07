// __tests__/2-then.test.js
import handleResponseFromAPI from '../2-then.js';

test('handleResponseFromAPI should return correct response on resolve', async () => {
  const promise = Promise.resolve();
  await expect(handleResponseFromAPI(promise)).resolves.toEqual({ status: 200, body: 'success' });
});

test('handleResponseFromAPI should return an error object on reject', async () => {
  const promise = Promise.reject();
  await expect(handleResponseFromAPI(promise)).resolves.toEqual(new Error());
});

test('handleResponseFromAPI should log message on resolve', async () => {
  console.log = jest.fn();
  const promise = Promise.resolve();
  await handleResponseFromAPI(promise);
  expect(console.log).toHaveBeenCalledWith('Got a response from the API');
});

test('handleResponseFromAPI should log message on reject', async () => {
  console.log = jest.fn();
  const promise = Promise.reject();
  await handleResponseFromAPI(promise);
  expect(console.log).toHaveBeenCalledWith('Got a response from the API');
});
