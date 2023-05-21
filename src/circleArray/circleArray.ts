// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function swap(arr, x, y) {
  arr[x] = arr[x] ^ arr[y];
  arr[y] = arr[x] ^ arr[y];
  arr[x] = arr[x] ^ arr[y];
}
function getArrayCycleIndex(length, index) {
  return index % length;
}
export function circleArray(A, K) {
  // Implement your solution here
  if (K === 0 || A.length === K) {
    return A;
  } else {
    A.forEach((item, index) => {
      swap(A, index, getArrayCycleIndex(A.length, index + K));
    });
  }
  return A;
}
