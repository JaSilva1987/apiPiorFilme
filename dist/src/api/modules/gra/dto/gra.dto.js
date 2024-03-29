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
exports.GRAFilmesDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class GRAFilmesDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Código indentificador", type: Number }),
    __metadata("design:type", Number)
], GRAFilmesDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Ano de Lançamento", type: String }),
    __metadata("design:type", String)
], GRAFilmesDTO.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Título do Filme", type: String }),
    __metadata("design:type", String)
], GRAFilmesDTO.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Estudio", type: String }),
    __metadata("design:type", String)
], GRAFilmesDTO.prototype, "studios", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Produtores", type: String }),
    __metadata("design:type", String)
], GRAFilmesDTO.prototype, "producers", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: "Vencedor", type: String }),
    __metadata("design:type", String)
], GRAFilmesDTO.prototype, "winner", void 0);
exports.GRAFilmesDTO = GRAFilmesDTO;
//# sourceMappingURL=gra.dto.js.map