import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'fast-csv';
import { GRAFilmesEntity } from 'src/database/entity/grafilmes.entity';

@Injectable()
export class CsvService {
  constructor(
    @InjectRepository(GRAFilmesEntity)
    private readonly filmesRepository: Repository<GRAFilmesEntity>,
  ) {}

  async importarDadosDoCSV(): Promise<void> {
    const caminhoDoArquivo = path.join(__dirname, '../database/arquivoImportacao/arquivo.csv');
console.log(caminhoDoArquivo)
    const stream = fs.createReadStream(caminhoDoArquivo);
    const csvStream = csv.parse({ headers: true });

    stream.pipe(csvStream)
      .on('data', async (data) => {
        const filme = new GRAFilmesEntity();
        filme.YEAR = data.year;
        filme.TITLE = data.title;
        filme.STUDIOS = data.studios;
        filme.PRODUCERS = data.producers;
        filme.WINNER = data.winner;
        await this.filmesRepository.save(filme);
      })
      .on('end', () => {
        console.log('Dados importados com sucesso.');
      });
  }
}
