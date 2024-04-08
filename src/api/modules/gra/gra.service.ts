import { Injectable } from "@nestjs/common";
import * as Datastore from "nedb";
import * as fs from "fs";
import * as csv from "csv-parser";
import { ProducerInterval } from "src/api/interfaces/gra.interface";
import { GRAFilmesEntity } from "src/database/entity/grafilmes.entity";
import { GRAFilmesDTO } from "./dto/gra.dto";

@Injectable()
export class GRAService {
  private repository: Datastore;

  constructor() {
    this.repository = new Datastore({ inMemoryOnly: true });
  }

  async findAll(): Promise<GRAFilmesEntity[]> {
    return new Promise((resolve, reject) => {
      this.repository.find({}, (err, filmes) => {
        if (err) {
          reject(err);
        } else {
          resolve(filmes);
        }
      });
    });
  }

  async create(filme: GRAFilmesDTO): Promise<GRAFilmesEntity> {
    return new Promise((resolve, reject) => {
      this.repository.insert(filme, (err, newDoc) => {
        if (err) {
          reject(err);
        } else {
          resolve(newDoc);
        }
      });
    });
  }

  async update(id: number, filme: GRAFilmesDTO): Promise<any> {
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
        } else {
          resolve({ raw: numReplaced });
        }
      });
    });
  }

  async findProducerIntervals(): Promise<{
    min: ProducerInterval[];
    max: ProducerInterval[];
  }> {
    const allFilmes = await this.findAll();

    // Lógica para calcular os intervalos mínimos
    const minIntervals: ProducerInterval[] = [];
    let previousYear: number;
    let previousProducer: string;

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

    // Lógica para calcular os intervalos máximos (semelhante à mínima)
    const maxIntervals: ProducerInterval[] = [];
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

    // Ordene e pegue os dois intervalos máximos
    maxIntervals.sort((a, b) => b.interval - a.interval);
    const maxResults = maxIntervals.slice(0, 2);

    return { min: minResults, max: maxResults };
  }

  async impFilesCSV(filePath: string): Promise<any[]> {
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
            const isValidHeader = expectedHeaders.every((header) =>
              headers.includes(header)
            );

            if (!isValidHeader) {
              reject(
                new Error(
                  "O cabeçalho do arquivo não corresponde à estrutura esperada."
                )
              );
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
}
