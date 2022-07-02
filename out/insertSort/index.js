"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertSort = void 0;
var swap = function (arr, x, y) {
    arr[x] = arr[x] ^ arr[y];
    arr[y] = arr[x] ^ arr[y];
    arr[x] = arr[x] ^ arr[y];
};
var insertSort = function (arr) {
    // 0~n 有序
    // 3 2 1
    for (var index = 1; index < arr.length; index++) {
        for (var j = index - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
            swap(arr, j, j + 1);
        }
    }
    return arr;
};
exports.insertSort = insertSort;
//# sourceMappingURL=index.js.map