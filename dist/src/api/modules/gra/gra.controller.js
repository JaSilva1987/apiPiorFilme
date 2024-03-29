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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GRAController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const gra_service_1 = require("./gra.service");
const http_exception_dto_1 = require("../../filters/http-exception.dto");
const gra_dto_1 = require("./dto/gra.dto");
let GRAController = class GRAController {
    constructor(graService) {
        this.graService = graService;
    }
    getAll() {
        return this.graService.findAll();
    }
    async getProducerIntervals() {
        return this.graService.findProducerIntervals();
    }
    async postRanking(filme) {
        return this.graService.create(filme);
    }
    async importarCSV(filePath) {
        try {
            const dadosCSV = await this.graService.impFilesCSV(filePath);
            return `Importado ${dadosCSV.length} linhas do arquivo solicitado`;
        }
        catch (error) {
            console.error('Erro ao ler o arquivo CSV:', error);
            throw new Error('Erro ao ler o arquivo CSV.');
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Busca filmes" }),
    (0, swagger_1.ApiResponse)({ status: 200, isArray: true }),
    (0, swagger_1.ApiResponse)({ status: 400, type: http_exception_dto_1.HttpExceptionDto }),
    (0, swagger_1.ApiResponse)({ status: 401, type: http_exception_dto_1.HttpExceptionDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GRAController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('producer-intervals'),
    (0, swagger_1.ApiOperation)({ summary: "Lista Produção que Ganharam o premio" }),
    (0, swagger_1.ApiResponse)({ status: 200, isArray: true }),
    (0, swagger_1.ApiResponse)({ status: 400, type: http_exception_dto_1.HttpExceptionDto }),
    (0, swagger_1.ApiResponse)({ status: 401, type: http_exception_dto_1.HttpExceptionDto }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GRAController.prototype, "getProducerIntervals", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: "Grava filmes" }),
    (0, swagger_1.ApiBody)({ required: true, type: gra_dto_1.GRAFilmesDTO }),
    (0, swagger_1.ApiResponse)({ status: 200, type: gra_dto_1.GRAFilmesDTO }),
    (0, swagger_1.ApiResponse)({ status: 400, type: http_exception_dto_1.HttpExceptionDto }),
    (0, swagger_1.ApiResponse)({ status: 401, type: http_exception_dto_1.HttpExceptionDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [gra_dto_1.GRAFilmesDTO]),
    __metadata("design:returntype", Promise)
], GRAController.prototype, "postRanking", null);
__decorate([
    (0, common_1.Post)(':filePath'),
    (0, swagger_1.ApiOperation)({ summary: "Importa filmes de arquivo CSV" }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, swagger_1.ApiResponse)({ status: 400, type: http_exception_dto_1.HttpExceptionDto }),
    (0, swagger_1.ApiResponse)({ status: 401, type: http_exception_dto_1.HttpExceptionDto }),
    (0, swagger_1.ApiParam)({
        name: 'filePath',
        description: 'Caminho do arquivo CSV a ser importado',
        example: '/Users/josesilva/Documents/Projetos/apiPiorFilme/src/database/arquivoImportacao/arquivo.csv',
    }),
    __param(0, (0, common_1.Param)("filePath")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GRAController.prototype, "importarCSV", null);
GRAController = __decorate([
    (0, swagger_1.ApiTags)("Golden Raspberry Awards"),
    (0, common_1.Controller)("GoldenRaspberryAwards"),
    __metadata("design:paramtypes", [gra_service_1.GRAService])
], GRAController);
exports.GRAController = GRAController;
//# sourceMappingURL=gra.controller.js.map