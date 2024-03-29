import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GRAFilmesEntity } from "src/database/entity/grafilmes.entity";
import { Repository, UpdateResult } from "typeorm";
import { GRAFilmesDTO } from "./dto/gra.dto";
import * as fs from 'fs';
import * as csv from 'csv-parser';
import { ProducerInterval } from "src/api/interfaces/gra.interface";

@Injectable()
export class GRAService {
  constructor(
    @InjectRepository(GRAFilmesEntity)
    private repository: Repository<GRAFilmesEntity>
  ) {}

  async findAll(): Promise<GRAFilmesEntity[]> {
    return this.repository.find();
  }

  async create(filme: GRAFilmesDTO): Promise<GRAFilmesEntity> {
    return await this.repository.save(filme);
  }

  async update(id: number,filme: GRAFilmesDTO): Promise<UpdateResult> {
    return await this.repository
      .createQueryBuilder()
      .update(GRAFilmesEntity)
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

  async findProducerIntervals(): Promise<{ min: ProducerInterval[]; max: ProducerInterval[] }> {
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

  async impFilesCSV(filePath: string): Promise<any[]> {
    const results = [];
    let headerChecked = false;

    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv({separator: ';'}))
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
}
