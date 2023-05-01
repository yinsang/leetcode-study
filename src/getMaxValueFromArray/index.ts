export const getMaxValueFromArray = (arr) => {
  const process = (from, to) => {
    if (from === to) {
      return arr[from];
    } else {
      const midIndex = from + Math.floor((to - from) / 2);
      return Math.max(process(from, midIndex), process(midIndex + 1, to));
    }
  };
  return process(0, arr.length - 1);
};
