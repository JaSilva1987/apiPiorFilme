import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GRAFilmesEntity } from "src/database/entity/grafilmes.entity";
import { Repository } from "typeorm";
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
}
