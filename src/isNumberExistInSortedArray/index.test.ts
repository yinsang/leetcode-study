import { isNumberExistInSortedArray } from "./index";
it("", () => {
  let maxCount = 10;

  for (let index = 0; index < maxCount; index++) {
    const arr = Array.from(new Array(5), () =>
      parseInt(String(Math.random() * 10))
    ).sort();
    const count = parseInt(String(Math.random() * 10));
    console.log(arr, count);
    expect(isNumberExistInSortedArray(arr, count)).toEqual(arr.includes(count));
  }
});
