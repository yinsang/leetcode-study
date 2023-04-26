import { isNumberExistInSortedArray } from "./index";
it("", () => {
  let maxCount = 10;

  for (let index = 0; index < maxCount; index++) {
    const arr = Array.from(new Array(50), () =>
      parseInt(String(Math.random() * 10))
    );
    const count = parseInt(String(Math.random() * 10));

    expect(isNumberExistInSortedArray(arr, count)).toEqual(arr.includes(count));
  }
});
