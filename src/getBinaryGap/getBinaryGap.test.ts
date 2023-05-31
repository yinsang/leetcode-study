import { GetBinaryGap } from "./GetBinaryGap";
it("", () => {
  let maxCount = 2;

  for (let index = 0; index < maxCount; index++) {
    const arr = Array.from(new Array(10), () =>
      parseInt(String(Math.random() * 10))
    );
    const copyArr = [...arr].sort();
    expect(GetBinaryGap(1)).toEqual(GetBinaryGap(1));

    expect(arr.length === copyArr.length).toBe(true);
    expect(arr).toEqual(expect.arrayContaining(copyArr));
  }
});
