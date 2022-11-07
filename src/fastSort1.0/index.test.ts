import { fastSort } from "./index";
it("", () => {
  expect(fastSort([3, 2, 1])).toEqual([1, 2, 3]);
  let maxCount = 10;

  for (let index = 0; index < maxCount; index++) {
    const arr = Array.from(new Array(5), () =>
      parseInt(String(Math.random() * 10))
    );
    const copyArr = [...arr];
    console.log(arr, "arr");
    expect(fastSort(arr)).toEqual(copyArr.sort());
  }
});
