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
exports.GRAFilmesEntity = void 0;
const typeorm_1 = require("typeorm");
let GRAFilmesEntity = class GRAFilmesEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], GRAFilmesEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "year" }),
    __metadata("design:type", String)
], GRAFilmesEntity.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "title" }),
    __metadata("design:type", String)
], GRAFilmesEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "studios" }),
    __metadata("design:type", String)
], GRAFilmesEntity.prototype, "studios", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "producers" }),
    __metadata("design:type", String)
], GRAFilmesEntity.prototype, "producers", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "winner" }),
    __metadata("design:type", String)
], GRAFilmesEntity.prototype, "winner", void 0);
GRAFilmesEntity = __decorate([
    (0, typeorm_1.Entity)("filmes")
], GRAFilmesEntity);
exports.GRAFilmesEntity = GRAFilmesEntity;
//# sourceMappingURL=grafilmes.entity.js.map