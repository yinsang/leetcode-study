import { quickSort3_1 } from "./index";
it("", () => {
  // expect(quickSort3([3, 2, 1])).toEqual([1, 2, 3]);
  let maxCount = 10;

  for (let index = 0; index < maxCount; index++) {
    // Math.floor(Math.random() * 100)
    const arr = Array.from(new Array(Math.floor(Math.random() * 100)), () =>
      parseInt(String(Math.random() * 10))
    );
    const copyArr = [...arr];
    // expect(quickSort3(arr)).toEqual(copyArr.sort());
  }
});

it("", () => {
  expect(quickSort3_1([3, 2, 1])).toEqual([1, 2, 3]);
  let maxCount = 10;

  for (let index = 0; index < maxCount; index++) {
    const arr = Array.from(new Array(Math.floor(Math.random() * 3)), () =>
      parseInt(String(Math.random() * 10))
    );
    const copyArr = [...arr];
    console.log(arr, "arr");
    expect(quickSort3_1(arr)).toEqual(copyArr.sort());
  }
});
