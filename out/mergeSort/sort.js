"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort1 = void 0;
function mergeSort1(arr) {
    var len = arr.length;
    if (len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2), left = arr.slice(0, middle), right = arr.slice(middle);
    return merge(mergeSort1(left), mergeSort1(right));
}
exports.mergeSort1 = mergeSort1;
function merge(left, right) {
    var result = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        }
        else {
            result.push(right.shift());
        }
    }
    while (left.length)
        result.push(left.shift());
    while (right.length)
        result.push(right.shift());
    return result;
}
//# sourceMappingURL=sort.js.map