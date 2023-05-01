import { solution } from ".";

it("", () => {
  expect(solution([2, 4, 3, 1])).toEqual(
    expect.arrayContaining([
      [4, 3],
      [3, 1],
      [4, 1],
      [4, 1],
    ])
  );
});
