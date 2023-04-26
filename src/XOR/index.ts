export const getUniqueNumber = (input: number[]) => {
  let result = 0;
  input.forEach((num) => {
    result = result ^ num;
  });
  return result;
};
export const getUniqueTwoNumber = (input: number[]) => {
  let allOXR = getUniqueNumber(input);
  let resultA = allOXR;
  let resultB;
  const rightOne = allOXR & (~allOXR + 1);
  input.forEach((num) => {
    if ((rightOne & num) === 0) {
      resultA = resultA ^ num;
    }
  });
  resultB = allOXR ^ resultA;
  return [resultA, resultB];
};
