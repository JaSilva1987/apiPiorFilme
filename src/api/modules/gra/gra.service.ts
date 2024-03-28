import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { GRAFilmesEntity } from "src/database/entity/grafilmes.entity";
import { Repository } from "typeorm";

@Injectable()
export class GRAService {
    constructor(
        @InjectRepository(GRAFilmesEntity)
        private repository: Repository<GRAFilmesEntity>
      ) {}
      
    async findAll(): Promise<GRAFilmesEntity[]> {
        return this.repository.find();
    }
}
