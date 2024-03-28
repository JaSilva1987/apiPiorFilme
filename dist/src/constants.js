"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_DESCRIPTION = exports.API_VERSION = exports.API_NAME = void 0;
const path = require("path");
const fs = require("fs");
const pkg = JSON.parse(fs.readFileSync(path.resolve('package.json')).toString('utf-8'));
const API_NAME = pkg.name;
exports.API_NAME = API_NAME;
const API_VERSION = pkg.version;
exports.API_VERSION = API_VERSION;
const API_DESCRIPTION = pkg.description;
exports.API_DESCRIPTION = API_DESCRIPTION;
//# sourceMappingURL=constants.js.map