import { isValid } from "./index";
it("", () => {
  expect(isValid("[")).toEqual(false);
  expect(isValid("[]")).toEqual(true);
  expect(isValid("()[]{}")).toEqual(true);
  expect(isValid("([)]")).toEqual(false);
  expect(isValid("{}{}()[]")).toEqual(true);
  expect(isValid("(([]){})")).toEqual(true);
});
