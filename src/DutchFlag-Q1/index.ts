const swap = (arr, firstBigIndex, end) => {
  const temp = arr[end];
  arr[end] = arr[firstBigIndex];
  arr[firstBigIndex] = temp;
};
/**
 * 小于和等于flag的在左，大于flag的在右
 * @param arr
 * @param flag
 * @returns
 */
// 课程中的实现,左侧右挤,置换标记右侧的那个数字
const dutchFlag = (arr, flag) => {
  // [3,2,3]  =》【2、3、3】
  // 35674358， 5
  let flagIndex = 0;
  let leftIndex = 0;
  while (flagIndex < arr.length) {
    if (arr[flagIndex] <= flag) {
      swap(arr, flagIndex, leftIndex);
      flagIndex += 1;
      leftIndex += 1;
    } else {
      // 大于
      flagIndex += 1;
    }
  }
  return arr;
};
/** 左右指针，两面夹击，置换右侧标记左侧的数字 */
const dutchFlag1 = (arr, flag) => {
  // [3,2,3]  =》【2、3、3】
  // 35674358， 5
  let end = arr.length - 1;
  let flagIndex = 0;
  while (flagIndex < end) {
    if (arr[flagIndex] <= flag) {
      flagIndex += 1;
    } else {
      // 大于
      swap(arr, flagIndex, end);
      end -= 1;
    }
  }
  return arr;
};
export { dutchFlag, dutchFlag1 };
