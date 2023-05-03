const swap = (arr, firstBigIndex, end) => {
  const temp = arr[end];
  arr[end] = arr[firstBigIndex];
  arr[firstBigIndex] = temp;
};
/** 课程中所说的3.0版本，在原arr上换位置 */
const quickSort3_1 = (arr, L = 0, R = arr.length - 1) => {
  if (R - L < 1) {
    return [arr[L]];
  }
  const partation = (arr, L, R) => {
    let leftIndex = L;
    let rightIndex = R + 1;
    let randomIndex = L + Math.floor(Math.random() * (R - L));
    let randomValue = arr[randomIndex];
    let index = L;
    while (index < rightIndex) {
      if (arr[index] > randomValue) {
        swap(arr, index, rightIndex - 1);
        rightIndex -= 1;
      } else if (arr[index] === randomValue) {
        index += 1;
      } else {
        swap(arr, index, leftIndex);
        leftIndex += 1;
        index += 1;
      }
    }
    return {
      leftIndex,
      rightIndex,
    };
  };
  const { leftIndex, rightIndex } = partation(arr, L, R);
  quickSort3_1(arr, L, leftIndex - 1);
  quickSort3_1(arr, rightIndex, R);
  return arr;
};
export { quickSort3_1 };
