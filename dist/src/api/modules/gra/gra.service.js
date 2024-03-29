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
exports.GRAService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const grafilmes_entity_1 = require("../../../database/entity/grafilmes.entity");
const typeorm_2 = require("typeorm");
const fs = require("fs");
const csv = require("csv-parser");
let GRAService = class GRAService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll() {
        return this.repository.find();
    }
    async create(filme) {
        return await this.repository.save(filme);
    }
    async update(id, filme) {
        return await this.repository
            .createQueryBuilder()
            .update(grafilmes_entity_1.GRAFilmesEntity)
            .set({
            year: filme.year,
            title: filme.title,
            studios: filme.studios,
            producers: filme.producers,
            winner: filme.winner
        })
            .where("ID = :id", { id: id })
            .execute();
    }
    async findProducerIntervals() {
        const minIntervalQuery = `
      SELECT
        producers,
        interval,
        previousWin,
        followingWin
      FROM (
        SELECT
          producers,
          year - LAG(year) OVER (PARTITION BY producers ORDER BY year) AS interval,
          LAG(year) OVER (PARTITION BY producers ORDER BY year) AS previousWin,
          year AS followingWin
        FROM filmes
      ) AS subquery
      WHERE interval IS NOT NULL
      ORDER BY interval ASC
      LIMIT 2
    `;
        const maxIntervalQuery = `
      SELECT
        producers,
        interval,
        previousWin,
        followingWin
      FROM (
        SELECT
          producers,
          LEAD(year) OVER (PARTITION BY producers ORDER BY year) - year AS interval,
          year AS previousWin,
          LEAD(year) OVER (PARTITION BY producers ORDER BY year) AS followingWin
        FROM filmes
      ) AS subquery
      WHERE interval IS NOT NULL
      ORDER BY interval DESC
      LIMIT 2
    `;
        const minResults = await this.repository.query(minIntervalQuery);
        const maxResults = await this.repository.query(maxIntervalQuery);
        return { min: minResults, max: maxResults };
    }
    async impFilesCSV(filePath) {
        const results = [];
        let headerChecked = false;
        return new Promise((resolve, reject) => {
            fs.createReadStream(filePath)
                .pipe(csv({ separator: ';' }))
                .on('data', (data) => {
                if (!headerChecked) {
                    const headers = Object.keys(data);
                    const expectedHeaders = ['year', 'title', 'studios', 'producers', 'winner'];
                    const isValidHeader = expectedHeaders.every(header => headers.includes(header));
                    if (!isValidHeader) {
                        reject(new Error('O cabeçalho do arquivo não corresponde à estrutura esperada.'));
                        return;
                    }
                    headerChecked = true;
                }
                this.create(data);
                results.push(data);
            })
                .on('end', () => resolve(results))
                .on('error', (error) => reject(error));
        });
    }
};
GRAService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(grafilmes_entity_1.GRAFilmesEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GRAService);
exports.GRAService = GRAService;
//# sourceMappingURL=gra.service.js.map