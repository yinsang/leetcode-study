const quickSort3 = (arr) => {
  // 0. 以最后一个为基准flag，做左右分区排序
  // 1. 使flagIndx的左侧<=flag,右侧>flag
  // 2. 递归左边和右边，返回最终的值
  if (arr.length < 2) {
    return arr;
  }
  const left: number[] = [];
  const middle: number[] = [];
  const right: number[] = [];
  const flagItem = arr[Math.floor(Math.random() * arr.length)];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element < flagItem) {
      left.push(element);
    } else if (element === flagItem) {
      middle.push(element);
    } else {
      right.push(element);
    }
  }
  return quickSort3(left).concat(middle, quickSort3(right));
};

export { quickSort3 };
const swap = (arr, x, y) => {
  if (x === y) {
    return;
  }
  const temp = arr[y];
  arr[y] = arr[x];
  arr[x] = temp;
};
const partition = (arr, L, R) => {
  // xxx|yyyNNNNN|zzzzI
  let leftIndex = L;
  let rightIndex = R;
  let equalCount = 0;
  while (leftIndex + equalCount < rightIndex) {
    const currentItem = arr[leftIndex + equalCount];
    if (currentItem < arr[R]) {
      // >
      swap(arr, leftIndex + equalCount, leftIndex);
      leftIndex += 1;
    } else if (currentItem === arr[R]) {
      // =
      equalCount += 1;
    } else {
      // >
      swap(arr, leftIndex + equalCount, rightIndex - 1);
      rightIndex -= 1;
    }
  }
  swap(arr, R, rightIndex);
  rightIndex += 1;

  return {
    leftIndex,
    rightIndex,
  };
};
/** 课程中所说的3.0版本，在原arr上换位置 */
const quickSort3_1 = (arr, L = 0, R = arr.length - 1) => {
  // if(){}
  if (R > L) {
    const randomIndex = Math.floor(Math.random() * (R - L));
    swap(arr, L + randomIndex, R);
    const { leftIndex, rightIndex } = partition(arr, L, R);
    quickSort3_1(arr, L, leftIndex - 1);
    quickSort3_1(arr, rightIndex, R);
    return arr;
  }
};
export { quickSort3_1 };
