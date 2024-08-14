import { queryAPI, weakMap } from '../100-weak';

describe('queryAPI', () => {
  it('should increment the query count for the endpoint', () => {
    const endpoint = { protocol: 'http', name: 'getUsers' };
    expect.assertions(3);

    queryAPI(endpoint);
    expect(weakMap.get(endpoint)).toBe(1);

    queryAPI(endpoint);
    expect(weakMap.get(endpoint)).toBe(2);

    queryAPI(endpoint);
    expect(weakMap.get(endpoint)).toBe(3);
  });

  it('should throw an error if the query count exceeds 4', () => {
    const endpoint = { protocol: 'http', name: 'getUsers' };
    expect.assertions(1);

    queryAPI(endpoint); // 4th call
    expect(() => queryAPI(endpoint)).toThrow('Endpoint load is high');
  });
});
