const swap = (arr, firstBigIndex, end) => {
  const temp = arr[end];
  arr[end] = arr[firstBigIndex];
  arr[firstBigIndex] = temp;
};
/**
 * 小于flag的在左，等于的在中，大于flag的在右
 * @param arr
 * @param flag
 * @returns
 */
// 课程中的实现
const dutchFlag = (array, flag) => {
  let equalLeft = 0;
  let equalRight = array.length;
  let index = 0;
  while (index < equalRight) {
    const element = array[index];
    if (element > flag) {
      swap(array, index, equalRight - 1);
      equalRight -= 1;
    } else if (element < flag) {
      swap(array, index, equalLeft);
      equalLeft += 1;
      index += 1;
    } else {
      index += 1;
    }
  }
  return array;
};
// dutchFlag([5,4,2,1,3],3)
// |5,4,2,1,3|
// |3|4215;
// 4|3|215;
// 1|3|245;
// 12|3|45;

// dutchFlag([5,4,2,1,3],3)
// |3421|5
// |321|45
// 2|31|45
// 21|3|45

export { dutchFlag };
