export const miniSum = (array) => {
  let result = 0;
  const merge = (start, midIndex, end) => {
    const tempArr = [];
    let left = start;
    let right = midIndex + 1;
    while (left <= midIndex && right <= end) {
      if (array[left] < array[right]) {
        result += array[left] * (end - right + 1);
        tempArr.push(array[left]);
        left += 1;
      } else {
        tempArr.push(array[right]);
        right += 1;
      }
    }
    while (left <= midIndex) {
      tempArr.push(array[left]);
      left += 1;
    }
    while (right <= end) {
      tempArr.push(array[right]);
      right += 1;
    }
    for (let index = 0; index < tempArr.length; index++) {
      array[start + index] = tempArr[index];
    }
  };
  const process = (start, end) => {
    if (start === end) {
      return 0;
    }
    const midIndex = start + ((end - start) >> 1);
    process(start, midIndex);
    process(midIndex + 1, end);
    merge(start, midIndex, end);
  };
  process(0, array.length - 1);
  return result;
};
export const reduceMiniSum = (arr) => {
  return arr.reduce((acc, curr, currIndex, arr) => {
    let accInner = acc;
    for (let index = 0; index < currIndex; index++) {
      if (arr[index] < curr) {
        accInner += arr[index];
      }
    }
    return accInner;
  }, 0);
};
