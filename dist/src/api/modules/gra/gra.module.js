"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GRAModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const grafilmes_entity_1 = require("../../../database/entity/grafilmes.entity");
const gra_controller_1 = require("./gra.controller");
const gra_service_1 = require("./gra.service");
let GRAModule = class GRAModule {
};
GRAModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([grafilmes_entity_1.GRAFilmesEntity])],
        providers: [gra_service_1.GRAService],
        controllers: [gra_controller_1.GRAController],
    })
], GRAModule);
exports.GRAModule = GRAModule;
//# sourceMappingURL=gra.module.js.map