import { GRAService } from "./gra.service";
import { GRAFilmesEntity } from "src/database/entity/grafilmes.entity";
import { GRAFilmesDTO } from "./dto/gra.dto";
import { ProducerInterval } from "src/api/interfaces/gra.interface";
export declare class GRAController {
    private graService;
    constructor(graService: GRAService);
    getAll(): Promise<GRAFilmesEntity[]>;
    getProducerIntervals(): Promise<{
        min: ProducerInterval[];
        max: ProducerInterval[];
    }>;
    postRanking(filme: GRAFilmesDTO): Promise<GRAFilmesEntity>;
}
