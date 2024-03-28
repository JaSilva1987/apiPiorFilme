import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GRAFilmesEntity } from "src/database/entity/grafilmes.entity";
import { Repository, UpdateResult } from "typeorm";
import { GRAFilmesDTO } from "./dto/gra.dto";

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
        YEAR: filme.YEAR,
        TITLE: filme.TITLE,
        STUDIOS: filme.STUDIOS,
        PRODUCERS: filme.PRODUCERS,
        WINNER: filme.WINNER
      })
      .where("ID = :id", { id: id })
      .execute();
  }
}
