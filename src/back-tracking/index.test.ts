import {backTracking} from '.'
test('', () => {
// 输入: [1,2,3]
// 输出:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]
expect(backTracking([1,2,3]).length).toBe(6)
  expect(backTracking([1,2,3])).toEqual(expect.arrayContaining(
    [
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
  ))
  expect(backTracking([1,2,2]).length).toBe(3)
  expect(backTracking([1,2,2])).toEqual(expect.arrayContaining(
    [
  [1,2,2],
  [2,1,2],
  [2,2,1]
]
  ))

});