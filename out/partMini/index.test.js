"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
it('', function () {
    expect((0, index_1.partMini)([0])).toBe(0);
    expect((0, index_1.partMini)([0, 1])).toBe(0);
    expect((0, index_1.partMini)([1, 0])).toBe(0);
    expect((0, index_1.partMini)([1, 0, 2])).toBe(0);
});
//# sourceMappingURL=index.test.js.map