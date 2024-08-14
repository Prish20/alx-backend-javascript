import { queryAPI, weakMap } from './100-weak';

const endpoint = { protocol: 'http', name: 'getUsers' };

console.log(weakMap.get(endpoint)); // undefined

queryAPI(endpoint);
console.log(weakMap.get(endpoint)); // 1

queryAPI(endpoint);
console.log(weakMap.get(endpoint)); // 2

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint); // This call should throw an error
