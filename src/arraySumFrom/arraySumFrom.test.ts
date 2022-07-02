import {arraySumFrom, arraySumFrom_preArray} from './arraySumFrom'

test('arraySumFrom', () => {
  expect(arraySumFrom([1,2,3], 0,0)).toBe(1);
  expect(arraySumFrom([1,2,3], 0,1)).toBe(3);
  expect(arraySumFrom([1,2,3], 0,2)).toBe(6);
  expect(arraySumFrom([1,2,3], 1, 2)).toBe(5);
});
test('arraySumFrom_preArray', () => {
  expect(arraySumFrom_preArray([1,2,3], 0,0)).toBe(1);
  expect(arraySumFrom_preArray([1,2,3], 0,1)).toBe(3);
  expect(arraySumFrom_preArray([1,2,3], 0,2)).toBe(6);
  expect(arraySumFrom_preArray([1,2,3], 1, 2)).toBe(5);
});