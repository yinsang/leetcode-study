// handle item in original array.
// 把数组的index及之前的数据变成大根堆
export const heapInsert = (arr, index) => {
  let currentIndex = index;
  while (arr[currentIndex] > arr[Math.floor((currentIndex - 1) / 2)]) {
    swap(arr, currentIndex, Math.floor((currentIndex - 1) / 2));
    currentIndex = Math.floor((currentIndex - 1) / 2);
  }
  return arr;
};
const swap = (arr, x, y) => {
  if (x === y) {
    return;
  }
  const temp = arr[y];
  arr[y] = arr[x];
  arr[x] = temp;
};
// 视频中写法
export const heapify1 = (arr, heapSize) => {
  let currentIndex = 0;
  let leftIndex = currentIndex * 2 + 1;

  while (leftIndex <= heapSize) {
    let largestIndex =
      leftIndex + 1 <= heapSize && arr[leftIndex + 1] > arr[leftIndex]
        ? leftIndex + 1
        : leftIndex;
    largestIndex =
      arr[largestIndex] > arr[currentIndex] ? largestIndex : currentIndex;
    if (largestIndex === currentIndex) {
      break;
    }
    swap(arr, currentIndex, largestIndex);
    currentIndex === largestIndex;
    leftIndex = largestIndex * 2 + 1;
  }
  return arr;
};
export const heapify = (arr, index) => {
  let currentIndex = 0;
  while (currentIndex < index) {
    const leftIndex = currentIndex * 2 + 1;
    const rightIndex = currentIndex * 2 + 2;
    if (rightIndex <= index) {
      // 左右
      const swapIndex =
        arr[rightIndex] > arr[leftIndex] ? rightIndex : leftIndex;
      if (arr[swapIndex] > arr[currentIndex]) {
        swap(arr, currentIndex, swapIndex);
        currentIndex = swapIndex;
      } else {
        currentIndex += 1;
      }
    } else if (leftIndex <= index) {
      if (arr[leftIndex] > arr[currentIndex]) {
        swap(arr, currentIndex, leftIndex);
        currentIndex = leftIndex;
      } else {
        currentIndex += 1;
      }
    } else {
      currentIndex += 1;
    }
  }
  return arr;
};
const heapSort = (array) => {
  for (let index = 1; index < array.length; index++) {
    heapInsert(array, index);
  }
  console.log("afterInset", array);
  let heapSize = array.length - 1;
  while (heapSize > 0) {
    swap(array, 0, heapSize);
    heapSize -= 1;
    heapify1(array, heapSize);
  }
  return array;
};
export { heapSort };
