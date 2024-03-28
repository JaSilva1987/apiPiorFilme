"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const http_exception_dto_1 = require("./api/filters/http-exception.dto");
const constants_1 = require("./constants");
let AppController = class AppController {
    getVersionEndpoint() {
        return `Running Version ${constants_1.API_VERSION}`;
    }
};
__decorate([
    (0, common_1.Get)('/running'),
    (0, swagger_1.ApiOperation)({ summary: 'Version running' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Endpoint executed with sucess' }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Invalid executed Endpoint',
        type: http_exception_dto_1.HttpExceptionDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getVersionEndpoint", null);
AppController = __decorate([
    (0, common_1.Controller)()
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map