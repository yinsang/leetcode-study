import {
  getPositionOfMostRightOneInBainry,
  getPositionOfMostRightZeroInBainry,
} from ".";
it("", () => {
  expect(getPositionOfMostRightOneInBainry(1)).toEqual(1);
  expect(getPositionOfMostRightOneInBainry(2)).toEqual(2);
  expect(getPositionOfMostRightOneInBainry(3)).toEqual(1);
  expect(getPositionOfMostRightOneInBainry(4)).toEqual(4);
  expect(getPositionOfMostRightOneInBainry(5)).toEqual(1);
});
it("", () => {
  expect(getPositionOfMostRightZeroInBainry(1)).toEqual(2);
  expect(getPositionOfMostRightZeroInBainry(2)).toEqual(1);
  expect(getPositionOfMostRightZeroInBainry(3)).toEqual(4);
  expect(getPositionOfMostRightZeroInBainry(4)).toEqual(1);
  expect(getPositionOfMostRightZeroInBainry(5)).toEqual(2);
});
