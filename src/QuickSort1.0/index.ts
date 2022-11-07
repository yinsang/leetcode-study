const swap = (arr, x, y) => {
  if (x === y) {
    return;
  }
  arr[x] = arr[x] ^ arr[y];
  arr[y] = arr[x] ^ arr[y];
  arr[x] = arr[x] ^ arr[y];
};
const dutchFlag1 = (arr, flag) => {
  /** 左右指针，两面夹击，置换右侧标记左侧的数字 */
  let end = arr.length - 1;
  let flagIndex = 0;
  while (flagIndex <= end) {
    if (arr[flagIndex] <= flag) {
      flagIndex += 1;
    } else {
      // 大于
      swap(arr, flagIndex, end);
      end -= 1;
    }
  }
  return flagIndex;
};
const fastSort = (arr) => {
  // 0. 以最后一个为基准flag，做左右分区排序
  // 1. 使flagIndx的左侧<=flag,右侧>flag
  // 2. 递归左边和右边，返回最终的值
  if (arr.length < 2) {
    return arr;
  }
  const left: number[] = [];
  const right: number[] = [];
  const lastItem = arr[arr.length - 1];
  for (let index = 0; index < arr.length - 1; index++) {
    const element = arr[index];
    if (element <= lastItem) {
      left.push(element);
    } else {
      right.push(element);
    }
  }
  return fastSort(left).concat([lastItem], fastSort(right));
};

export { fastSort };
