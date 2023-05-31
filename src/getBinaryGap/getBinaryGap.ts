export const GetBinaryGap = (N) => {
  // you can write to stdout for debugging purposes, e.g.
  // console.log('this is a debug message');

  // Implement your solution here
  let index = 0;
  let oneBite = [];
  while (N !== 0) {
    if ((N & 1) === 1) {
      oneBite.push(index);
    }
    N >> 1;
    index += 1;
  }
  if (oneBite.length <= 1) {
    return 0;
  } else {
    let gap = 0;
    for (let index = 1; index < oneBite.length; index++) {
      const currentGap = oneBite[index] - oneBite[index - 1];
      if (currentGap > gap) {
        gap = currentGap;
      }
    }
    return gap;
  }
};
