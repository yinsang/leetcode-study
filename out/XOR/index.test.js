"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
test('arraySumFrom', function () {
    expect((0, index_1.getUniqueNumber)([1, 2, 2])).toBe(1);
    expect((0, index_1.getUniqueNumber)([4, 2, 2])).toBe(4);
    expect((0, index_1.getUniqueNumber)([4, 4, 2])).toBe(2);
    expect((0, index_1.getUniqueTwoNumber)([1, 3, 2, 2])).toEqual(expect.arrayContaining([1, 3]));
    expect((0, index_1.getUniqueTwoNumber)([0, 3, 2, 2])).toEqual(expect.arrayContaining([3, 0]));
});
//# sourceMappingURL=index.test.js.map