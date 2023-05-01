export const solution = (arr) => {
  let revertArray = [];
  const mergeReverseCount = (arr, start, mid, end) => {
    let left = start;
    let right = mid + 1;
    const helpArr = [];
    while (left <= mid && right <= end) {
      if (arr[left] <= arr[right]) {
        helpArr.push(arr[left++]);
      } else {
        for (let index = right; index <= end; index++) {
          const element = arr[index];
          revertArray.push([arr[left], element]);
        }
        helpArr.push(arr[right++]);
      }
    }
    while (left <= mid) {
      helpArr.push(arr[left++]);
    }
    while (right <= end) {
      helpArr.push(arr[right++]);
    }
    return revertArray;
  };
  const process = (arr, start, end) => {
    if (start === end) {
      return 0;
    }
    const mid = parseInt(start + (end - start) / 2);
    process(arr, start, mid);
    process(arr, mid + 1, end);
    mergeReverseCount(arr, start, mid, end);
  };
  process(arr, 0, arr.length - 1);
  return revertArray;
};
solution([2, 4, 3, 1]);
