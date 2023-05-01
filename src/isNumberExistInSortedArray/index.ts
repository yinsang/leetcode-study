export const isNumberExistInSortedArray = (array, count) => {
  let from = 0;
  let to = array.length - 1;
  while (array[from] <= count && array[to] >= count && to >= from) {
    const midIndex = from + Math.floor((to - from) / 2);
    if (array[midIndex] > count) {
      to = midIndex - 1;
    } else if (array[midIndex] < count) {
      from = midIndex + 1;
    } else {
      return true;
    }
  }
  return false;
  // return array[from] === count;
};
