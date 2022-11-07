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

  const process = (arr) => {
    if (arr.length > 2) {
      const topArr = arr.slice(0, -1);
      const last = arr[arr.length - 1];
      var flagIndex = dutchFlag1(topArr, last);
      let result = topArr.concat(last);
      swap(result, flagIndex, result.length - 1);
      if (result.length > flagIndex + 1) {
        const left = result.slice(0, flagIndex + 1);
        const right = result.slice(flagIndex + 1);
        return process(left).concat(process(right));
      }
      if (result.length == flagIndex + 1) {
        return process(arr.slice(0, -1)).concat(arr[arr.length - 1]);
      }
      return result;
    } else if (arr.length == 2 && arr[0] > arr[1]) {
      swap(arr, 0, 1);
      return arr;
    }
    return arr;
  };
  return process(arr);
};

const arr = [7, 4, 6, 5, 9];
fastSort(arr);
export { fastSort };
