const quickSort2 = (arr) => {
  // 0. 以最后一个为基准flag，做左右分区排序
  // 1. 使flagIndx的左侧<=flag,右侧>flag
  // 2. 递归左边和右边，返回最终的值
  if (arr.length < 2) {
    return arr;
  }
  const left: number[] = [];
  const middle: number[] = [];
  const right: number[] = [];
  const lastItem = arr[arr.length - 1];
  for (let index = 0; index < arr.length - 1; index++) {
    const element = arr[index];
    if (element < lastItem) {
      left.push(element);
    } else if (element === lastItem) {
      middle.push(element);
    } else {
      right.push(element);
    }
  }
  return quickSort2(left).concat(middle.concat(lastItem), quickSort2(right));
};

export { quickSort2 };
