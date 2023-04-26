import { partMiniStupid, partMiniBest, partMiniGood } from "./index";
it("", () => {
  expect(partMiniStupid([0])).toBe(0);
  expect(partMiniStupid([0, 1])).toBe(0);
  expect(partMiniStupid([1, 0])).toBe(0);
  expect(partMiniStupid([1, 0, 2])).toBe(0);
});
it("", () => {
  expect(partMiniBest([0])).toBe(0);
  expect(partMiniBest([0, 1])).toBe(0);
  expect(partMiniBest([1, 0])).toBe(0);
  expect(partMiniBest([1, 0, 2])).toBe(0);
});
it("", () => {
  expect(partMiniGood([0])).toBe(0);
  expect(partMiniGood([0, 1])).toBe(0);
  expect(partMiniGood([1, 0])).toBe(0);
  expect(partMiniGood([1, 0, 2])).toBe(0);
});
