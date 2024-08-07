// 100-main.js
import asyncUploadUser from './100-await.js';

const test = async () => {
  console.log(await asyncUploadUser());
};

test();
// Expected output:
// { photo: { status: 200, body: 'photo-profile-1' }, user: { firstName: 'Guillaume', lastName: 'Salva' } }
// or
// { photo: null, user: null }
