export const partMiniStupid = (
  arr: number[],
  start = 0,
  end = arr.length - 1
) => {
  if (arr.length === 1) {
    return arr[start];
  } else {
    if (arr[start] < arr[start + 1]) {
      return arr[start];
    } else if (arr[end] < arr[end - 1]) {
      return arr[end];
    } else {
      const middleIndex = parseInt(String(start + (end - start) / 2));
      if (arr[middleIndex] < arr[middleIndex + 1]) {
        return partMiniStupid(arr, start, middleIndex);
      } else {
        return partMiniStupid(arr, middleIndex + 1, end);
      }
    }
  }
};
export const partMiniGood = (
  arr: number[],
  start = 0,
  end = arr.length - 1
) => {
  if (end - start <= 1) {
    return Math.min(arr[start], arr[end]);
  } else if (arr[start + 1] > arr[start]) {
    return arr[start];
  } else {
    return partMiniGood(arr, start + 1, end);
  }
};
export const partMiniBest = (
  arr: number[],
  start = 0,
  end = arr.length - 1
) => {
  if (end - start <= 1) {
    return Math.min(arr[start], arr[end]);
  } else {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1]) {
      return partMiniBest(arr, mid + 1, end);
    } else if (arr[mid] > arr[mid - 1]) {
      return partMiniBest(arr, start, mid - 1);
    } else {
      return arr[mid];
    }
  }
};
