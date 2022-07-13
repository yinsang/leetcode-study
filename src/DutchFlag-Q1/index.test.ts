import {dutchFlag1 as dutchFlag} from '.'
test('', () => {
  expect(dutchFlag([3,2,3], 2)).toStrictEqual([2,3,3]);
  expect(dutchFlag([1,5,6,3,2,3], 2).slice(0,1)).toStrictEqual([1]);
  expect(dutchFlag([1,5,6,3,2,3], 2).slice(1, 2)).toStrictEqual([2]);
  expect(dutchFlag([1,5,6,3,2,3], 2).slice(2)).toStrictEqual(expect.arrayContaining([3,3,5,6]));
});