import createInt8TypedArray from './5-typed_arrays';

console.log(createInt8TypedArray(10, 2, 89));
try {
  console.log(createInt8TypedArray(10, 20, 89));
} catch (error) {
  console.error(error.message);
}
