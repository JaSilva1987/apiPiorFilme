import { GRAFilmesEntity } from "src/database/entity/grafilmes.entity";
import { Repository, UpdateResult } from "typeorm";
import { GRAFilmesDTO } from "./dto/gra.dto";
import { ProducerInterval } from "src/api/interfaces/gra.interface";
export declare class GRAService {
    private repository;
    constructor(repository: Repository<GRAFilmesEntity>);
    findAll(): Promise<GRAFilmesEntity[]>;
    create(filme: GRAFilmesDTO): Promise<GRAFilmesEntity>;
    update(id: number, filme: GRAFilmesDTO): Promise<UpdateResult>;
    findProducerIntervals(): Promise<{
        min: ProducerInterval[];
        max: ProducerInterval[];
    }>;
    impFilesCSV(filePath: string): Promise<any[]>;
}
