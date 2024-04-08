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
exports.GRAService = void 0;
const common_1 = require("@nestjs/common");
const Datastore = require("nedb");
const fs = require("fs");
const csv = require("csv-parser");
let GRAService = class GRAService {
    constructor() {
        this.repository = new Datastore({ inMemoryOnly: true });
    }
    async findAll() {
        return new Promise((resolve, reject) => {
            this.repository.find({}, (err, filmes) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(filmes);
                }
            });
        });
    }
    async create(filme) {
        return new Promise((resolve, reject) => {
            this.repository.insert(filme, (err, newDoc) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(newDoc);
                }
            });
        });
    }
    async update(id, filme) {
        const query = { _id: id };
        const updateQuery = {
            $set: {
                year: filme.year,
                title: filme.title,
                studios: filme.studios,
                producers: filme.producers,
                winner: filme.winner,
            },
        };
        return new Promise((resolve, reject) => {
            this.repository.update(query, updateQuery, {}, (err, numReplaced) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve({ raw: numReplaced });
                }
            });
        });
    }
    async findProducerIntervals() {
        const allFilmes = await this.findAll();
        const minIntervals = [];
        let previousYear;
        let previousProducer;
        for (const filme of allFilmes) {
            if (filme.producers !== previousProducer) {
                if (previousYear !== undefined) {
                    const interval = Number(filme.year) - Number(previousYear);
                    if (interval > 0) {
                        minIntervals.push({
                            producer: previousProducer,
                            interval: interval,
                            previousWin: previousYear,
                            followingWin: Number(filme.year),
                        });
                    }
                }
                previousProducer = filme.producers;
                previousYear = Number(filme.year);
            }
        }
        minIntervals.sort((a, b) => a.interval - b.interval);
        const minResults = minIntervals.slice(0, 2);
        const maxIntervals = [];
        previousYear = undefined;
        previousProducer = undefined;
        for (const filme of allFilmes) {
            if (filme.producers !== previousProducer) {
                if (previousYear !== undefined) {
                    const interval = Number(filme.year) - Number(previousYear);
                    if (interval > 0) {
                        maxIntervals.push({
                            producer: previousProducer,
                            interval: interval,
                            previousWin: previousYear,
                            followingWin: Number(filme.year),
                        });
                    }
                }
                previousProducer = filme.producers;
                previousYear = Number(filme.year);
            }
        }
        maxIntervals.sort((a, b) => b.interval - a.interval);
        const maxResults = maxIntervals.slice(0, 2);
        return { min: minResults, max: maxResults };
    }
    async impFilesCSV(filePath) {
        const results = [];
        let headerChecked = false;
        return new Promise((resolve, reject) => {
            fs.createReadStream(filePath)
                .pipe(csv({ separator: ";" }))
                .on("data", (data) => {
                if (!headerChecked) {
                    const headers = Object.keys(data);
                    const expectedHeaders = [
                        "year",
                        "title",
                        "studios",
                        "producers",
                        "winner",
                    ];
                    const isValidHeader = expectedHeaders.every((header) => headers.includes(header));
                    if (!isValidHeader) {
                        reject(new Error("O cabeçalho do arquivo não corresponde à estrutura esperada."));
                        return;
                    }
                    headerChecked = true;
                }
                this.create(data);
                results.push(data);
            })
                .on("end", () => resolve(results))
                .on("error", (error) => reject(error));
        });
    }
};
GRAService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], GRAService);
exports.GRAService = GRAService;
//# sourceMappingURL=gra.service.js.map