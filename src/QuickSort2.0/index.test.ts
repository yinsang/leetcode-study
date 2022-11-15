import { quickSort2 } from "./index";
it("", () => {
  expect(quickSort2([3, 2, 1])).toEqual([1, 2, 3]);
  let maxCount = 10;

  for (let index = 0; index < maxCount; index++) {
    const arr = Array.from(new Array(Math.floor(Math.random() * 100)), () =>
      parseInt(String(Math.random() * 10))
    );
    const copyArr = [...arr];
    console.log(arr, "arr");
    expect(quickSort2(arr)).toEqual(copyArr.sort());
  }
});
