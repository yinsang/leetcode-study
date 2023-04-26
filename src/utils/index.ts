export const getPositionOfMostRightOneInBainry = (num) => num & (~num + 1);
export const getPositionOfMostRightZeroInBainry = (num) => (num + 1) & ~num;
