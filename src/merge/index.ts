export const merge = (intervals) => {
  const sortedIntervals = intervals.sort((itemPrev, itemNext) => {
    const [prevStart] = itemPrev;
    const [nextStart] = itemNext;
    return prevStart > nextStart;
  });
  return sortedIntervals.reduce((acc, current, index) => {
    if (index === 0) {
      return [current];
    }
    if (current[0] <= acc[acc.length - 1][1]) {
      acc[acc.length - 1][1] = current[1];
    } else {
      acc.push(current);
    }
    return acc;
  }, []);
};
