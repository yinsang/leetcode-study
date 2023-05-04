import { dynamic } from ".";
// dynamic(N: any, weights: any, values: any, maxWeight: any): any
it("", () => {
  const weights = [0, 1,2,3]
  const values = [0, 6,10,12]
  expect(dynamic(0, weights, values, 0)).toEqual(0);
  expect(dynamic(1, weights, values, 0)).toEqual(0);
  expect(dynamic(2, weights, values, 0)).toEqual(0);
  expect(dynamic(3, weights, values, 0)).toEqual(0);
  expect(dynamic(4, weights, values, 0)).toEqual(0);
  expect(dynamic(5, weights, values, 0)).toEqual(0);
  expect(dynamic(4, weights, values, 0)).toEqual(0);
  expect(dynamic(4, weights, values, 1)).toEqual(6);
  expect(dynamic(4, weights, values, 2)).toEqual(10);
  expect(dynamic(4, weights, values, 3)).toEqual(16);
  expect(dynamic(4, weights, values, 4)).toEqual(18);
  expect(dynamic(4, weights, values, 5)).toEqual(22);
});
