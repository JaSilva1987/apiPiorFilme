import { GRAFilmesEntity } from "src/database/entity/grafilmes.entity";
import { Repository } from "typeorm";
export declare class GRAService {
    private repository;
    constructor(repository: Repository<GRAFilmesEntity>);
    findAll(): Promise<GRAFilmesEntity[]>;
}
