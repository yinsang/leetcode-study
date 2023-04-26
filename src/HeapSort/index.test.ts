import { heapSort, heapify, heapInsert, heapify1 } from "./index";
it("heapInsert test", () => {
  expect(heapInsert([3, 2, 4], 0)).toEqual([3, 2, 4]);
  expect(heapInsert([3, 2, 4], 1)).toEqual([3, 2, 4]);
  expect(heapInsert([3, 2, 4], 2)).toEqual([4, 2, 3]);
});
it("heapify test", () => {
  expect(heapify1([0, 2, 4], 2)).toEqual([4, 2, 0]);
  expect(heapify1([3, 2, 4], 2)).toEqual([4, 2, 3]);
});
it("", () => {
  expect(heapSort([3, 2, 1])).toEqual([1, 2, 3]);
  expect(heapSort([8, 2, 1, 9])).toEqual([1, 2, 8, 9]);

  let maxCount = 10;
  for (let index = 0; index < maxCount; index++) {
    // Math.floor(Math.random() * 100)
    const arr = Array.from(new Array(3), () =>
      parseInt(String(Math.random() * 10))
    );
    const copyArr = [...arr];
    expect(heapSort(arr)).toEqual(copyArr.sort());
  }
});
