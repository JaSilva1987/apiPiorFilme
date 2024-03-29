"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateUtils = void 0;
const lodash_1 = require("lodash");
class DateUtils {
    static isFilteredDate(data, filterParam) {
        if (DateUtils.isNotEmptyDate(filterParam === null || filterParam === void 0 ? void 0 : filterParam.firstDate) &&
            DateUtils.isNotEmptyDate(filterParam.lastDate)) {
            return data >= (filterParam === null || filterParam === void 0 ? void 0 : filterParam.firstDate) && data <= (filterParam === null || filterParam === void 0 ? void 0 : filterParam.lastDate);
        }
        if (DateUtils.isNotEmptyDate(filterParam === null || filterParam === void 0 ? void 0 : filterParam.firstDate)) {
            return data >= (filterParam === null || filterParam === void 0 ? void 0 : filterParam.firstDate);
        }
        if (DateUtils.isNotEmptyDate(filterParam === null || filterParam === void 0 ? void 0 : filterParam.lastDate)) {
            return data <= (filterParam === null || filterParam === void 0 ? void 0 : filterParam.lastDate);
        }
        return false;
    }
    static isNotEmptyDate(date) {
        if (!date) {
            return false;
        }
        return !(0, lodash_1.isNull)(date);
    }
}
exports.DateUtils = DateUtils;
//# sourceMappingURL=date.utils.js.map