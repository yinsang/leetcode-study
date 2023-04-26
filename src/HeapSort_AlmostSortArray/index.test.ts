import { HeapSort_AlmostSortArray } from "./index";
it("", () => {
  expect(HeapSort_AlmostSortArray([3, 2, 1], 2)).toEqual([1, 2, 3]);
  expect(HeapSort_AlmostSortArray([8, 2, 1, 9], 3)).toEqual([1, 2, 8, 9]);

  let maxCount = 10;
  for (let index = 0; index < maxCount; index++) {
    // Math.floor(Math.random() * 100)
    const arr = Array.from(new Array(3), () =>
      parseInt(String(Math.random() * 10))
    );
    const copyArr = [...arr];
    expect(HeapSort_AlmostSortArray(arr, arr.length - 1)).toEqual(
      copyArr.sort()
    );
  }
});
