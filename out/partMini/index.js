"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.partMini = void 0;
var partMini = function (arr, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = arr.length - 1; }
    if (arr.length === 1) {
        return arr[start];
    }
    else {
        if (arr[start] < arr[start + 1]) {
            return arr[start];
        }
        else if (arr[end] < arr[end - 1]) {
            return arr[end];
        }
        else {
            var middleIndex = parseInt(String(start + (end - start) / 2));
            if (arr[middleIndex] < arr[middleIndex + 1]) {
                return (0, exports.partMini)(arr, start, middleIndex);
            }
            else {
                return (0, exports.partMini)(arr, middleIndex + 1, end);
            }
        }
    }
};
exports.partMini = partMini;
//# sourceMappingURL=index.js.map