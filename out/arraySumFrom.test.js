"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var arraySumFrom_1 = require("./arraySumFrom");
test('arraySumFrom', function () {
    expect((0, arraySumFrom_1.arraySumFrom)([1, 2, 3], 0, 0)).toBe(1);
    expect((0, arraySumFrom_1.arraySumFrom)([1, 2, 3], 0, 1)).toBe(3);
    expect((0, arraySumFrom_1.arraySumFrom)([1, 2, 3], 0, 2)).toBe(6);
    expect((0, arraySumFrom_1.arraySumFrom)([1, 2, 3], 1, 2)).toBe(5);
});
test('arraySumFrom_preArray', function () {
    expect((0, arraySumFrom_1.arraySumFrom_preArray)([1, 2, 3], 0, 0)).toBe(1);
    expect((0, arraySumFrom_1.arraySumFrom_preArray)([1, 2, 3], 0, 1)).toBe(3);
    expect((0, arraySumFrom_1.arraySumFrom_preArray)([1, 2, 3], 0, 2)).toBe(6);
    expect((0, arraySumFrom_1.arraySumFrom_preArray)([1, 2, 3], 1, 2)).toBe(5);
});
//# sourceMappingURL=arraySumFrom.test.js.map