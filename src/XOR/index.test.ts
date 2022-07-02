
import {getUniqueNumber, getUniqueTwoNumber} from './index'

test('arraySumFrom', () => {
  expect(getUniqueNumber([1,2,2])).toBe(1);
  expect(getUniqueNumber([4,2,2])).toBe(4);
  expect(getUniqueNumber([4,4,2])).toBe(2);
  expect(getUniqueTwoNumber([1,3,2,2])).toEqual(expect.arrayContaining([1,3]));
  expect(getUniqueTwoNumber([0,3,2,2])).toEqual(expect.arrayContaining([3,0]));
});