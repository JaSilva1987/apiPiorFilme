import { ProducerInterval } from "src/api/interfaces/gra.interface";
import { GRAFilmesEntity } from "src/database/entity/grafilmes.entity";
import { GRAFilmesDTO } from "./dto/gra.dto";
export declare class GRAService {
    private repository;
    constructor();
    findAll(): Promise<GRAFilmesEntity[]>;
    create(filme: GRAFilmesDTO): Promise<GRAFilmesEntity>;
    update(id: number, filme: GRAFilmesDTO): Promise<any>;
    findProducerIntervals(): Promise<{
        min: ProducerInterval[];
        max: ProducerInterval[];
    }>;
    impFilesCSV(filePath: string): Promise<any[]>;
}
