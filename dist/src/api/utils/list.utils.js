"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUtils = void 0;
const lodash_1 = require("lodash");
class ListUtils {
    static isEmptyList(list) {
        return !list || (0, lodash_1.isEmpty)(list) || (0, lodash_1.isNull)(list);
    }
}
exports.ListUtils = ListUtils;
//# sourceMappingURL=list.utils.js.map