"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arraySumFrom_preArray = exports.arraySumFrom = void 0;
var arraySumFrom = function (array, from, to) {
    var helpArray = {};
    for (var index = 0; index < array.length; index++) {
        for (var j = index; j < array.length; j++) {
            if (j === index) {
                helpArray["".concat(j, "_").concat(j)] = array[j];
            }
            else if (j > index) {
                helpArray["".concat(index, "_").concat(j)] = helpArray["".concat(index, "_").concat(j - 1)] + array[j];
            }
            else { }
        }
    }
    return helpArray["".concat(from, "_").concat(to)];
};
exports.arraySumFrom = arraySumFrom;
var arraySumFrom_preArray = function (array, from, to) {
    var helpArray = [array[0]];
    for (var index = 1; index < array.length; index++) {
        helpArray[index] = helpArray[index - 1] + array[index];
    }
    if (from === 0) {
        return helpArray[to];
    }
    else {
        return helpArray[to] - helpArray[from - 1];
    }
};
exports.arraySumFrom_preArray = arraySumFrom_preArray;
//# sourceMappingURL=arraySumFrom.js.map