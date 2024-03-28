import { GRAFilmesEntity } from "src/database/entity/grafilmes.entity";
import { Repository } from "typeorm";
import { GRAFilmesDTO } from "./dto/gra.dto";
export declare class GRAService {
    private repository;
    constructor(repository: Repository<GRAFilmesEntity>);
    findAll(): Promise<GRAFilmesEntity[]>;
    create(filme: GRAFilmesDTO): Promise<GRAFilmesEntity>;
}
