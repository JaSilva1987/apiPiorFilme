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
exports.GRAController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const gra_service_1 = require("./gra.service");
let GRAController = class GRAController {
    constructor(graService) {
        this.graService = graService;
    }
    getAll() {
        return this.graService.findAll();
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Retorna filmes armazenados" }),
    (0, swagger_1.ApiResponse)({ status: 200, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GRAController.prototype, "getAll", null);
GRAController = __decorate([
    (0, swagger_1.ApiTags)("Golden Raspberry Awards."),
    (0, common_1.Controller)("GoldenRaspberryAwards"),
    __metadata("design:paramtypes", [gra_service_1.GRAService])
], GRAController);
exports.GRAController = GRAController;
//# sourceMappingURL=gra.controller.js.map