"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = void 0;
var merge = function (arr, start, mid, end) {
    var left = 0;
    var right = mid + 1;
    var mergeArr = [];
    while (left <= mid && right <= end) {
        var l = arr[left];
        var r = arr[right];
        if (l <= r) {
            mergeArr.push(l);
            left += 1;
        }
        else {
            mergeArr.push(r);
            right += 1;
        }
    }
    while (left <= mid) {
        mergeArr.push(arr[left++]);
    }
    while (right <= end) {
        mergeArr.push(arr[right++]);
    }
    mergeArr.forEach(function (item, i) {
        arr[start + i] = item;
    });
};
var process = function (arr, start, end) {
    if (start === end) {
        return;
    }
    var mid = parseInt(String(start + (end - start) / 2));
    process(arr, start, mid);
    process(arr, mid + 1, end);
    merge(arr, start, mid, end);
    return arr;
};
var mergeSort = function (arr) {
    if (arr.length < 2) {
        return arr;
    }
    else {
        return process(arr, 0, arr.length - 1);
    }
};
exports.mergeSort = mergeSort;
(0, exports.mergeSort)([4, 3, 2, 1]);
//# sourceMappingURL=index.js.map