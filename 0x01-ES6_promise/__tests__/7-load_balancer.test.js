// __tests__/7-load_balancer.test.js
import loadBalancer from '../7-load_balancer.js';

test('loadBalancer should return the value of the first resolved promise', async () => {
  const promise1 = new Promise((resolve) => setTimeout(resolve, 100, 'First'));
  const promise2 = new Promise((resolve) => setTimeout(resolve, 200, 'Second'));

  await expect(loadBalancer(promise1, promise2)).resolves.toBe('First');
  await expect(loadBalancer(promise2, promise1)).resolves.toBe('First');
});
