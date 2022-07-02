"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
it('', function () {
    expect((0, index_1.insertSort)([3, 2, 1])).toEqual([1, 2, 3]);
    var maxCount = 10;
    for (var index = 0; index < maxCount; index++) {
        var arr = Array.from(new Array(50), function () { return (parseInt(String(Math.random() * 10))); });
        var copyArr = __spreadArray([], arr, true);
        expect((0, index_1.insertSort)(arr)).toEqual(copyArr.sort());
    }
});
//# sourceMappingURL=index.test.js.map