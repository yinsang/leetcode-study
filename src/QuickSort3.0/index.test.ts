import { fastSort1, fastSort } from "./index";
it("", () => {
  expect(fastSort1([3, 2, 1])).toEqual([1, 2, 3]);
  let maxCount = 10;

  for (let index = 0; index < maxCount; index++) {
    // Math.floor(Math.random() * 100)
    const arr = Array.from(new Array(Math.floor(Math.random() * 100)), () =>
      parseInt(String(Math.random() * 10))
    );
    const copyArr = [...arr];
    expect(fastSort1(arr)).toEqual(copyArr.sort());
  }
});

it("", () => {
  expect(fastSort([3, 2, 1])).toEqual([1, 2, 3]);
  let maxCount = 10;

  for (let index = 0; index < maxCount; index++) {
    const arr = Array.from(new Array(Math.floor(Math.random() * 100)), () =>
      parseInt(String(Math.random() * 10))
    );
    const copyArr = [...arr];
    console.log(arr, "arr");
    expect(fastSort(arr)).toEqual(copyArr.sort());
  }
});
