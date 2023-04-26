const swap = (arr: number[], x: number, y: number) => {
  arr[x] = arr[x] ^ arr[y];
  arr[y] = arr[x] ^ arr[y];
  arr[x] = arr[x] ^ arr[y];
};
export const insertSort = (array) => {
  // 0~n 有序
  // 3 2 1
  for (let index = 1; index < array.length; index++) {
    for (let j = index; array[j] < array[j - 1] && j > 0; j--) {
      swap(array, j, j - 1);
    }
  }
  return array;
};
