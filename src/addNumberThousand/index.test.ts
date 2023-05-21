import { addNumberThousand } from ".";

it("", () => {
  expect(addNumberThousand(123)).toEqual("123");
  expect(addNumberThousand(1234567)).toEqual("1,234,567");
  expect(addNumberThousand(10.1)).toEqual("10.1");
});
