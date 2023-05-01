import { merge } from "./index";
it("", () => {
  expect(
    merge([
      [10, 30],
      [20, 60],
      [80, 100],
      [150, 180],
    ])
  ).toEqual(
    expect.arrayContaining([
      [10, 60],
      [80, 100],
      [150, 180],
    ])
  );
});
