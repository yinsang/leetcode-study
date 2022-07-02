"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUniqueTwoNumber = exports.getUniqueNumber = void 0;
var getUniqueNumber = function (input) {
    var result = 0;
    input.forEach(function (num) {
        result = result ^ num;
    });
    return result;
};
exports.getUniqueNumber = getUniqueNumber;
var isOneInPositionX = function (num, X) {
    return (num >> X & 1) === 0;
};
var getUniqueTwoNumber = function (input) {
    var allOXR = (0, exports.getUniqueNumber)(input);
    var resultA = allOXR;
    var resultB;
    var position = 0;
    for (var nowValue = allOXR; (nowValue & 1) === 0; nowValue = nowValue >> 1) {
        position += 1;
    }
    input.forEach(function (num) {
        if (isOneInPositionX(num, position)) {
            resultA = resultA ^ num;
        }
    });
    resultB = allOXR ^ resultA;
    return [resultA, resultB];
};
exports.getUniqueTwoNumber = getUniqueTwoNumber;
//# sourceMappingURL=index.js.map