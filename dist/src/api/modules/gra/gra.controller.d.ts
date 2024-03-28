import { GRAService } from "./gra.service";
import { GRAFilmesEntity } from "src/database/entity/grafilmes.entity";
import { GRAFilmesDTO } from "./dto/gra.dto";
export declare class GRAController {
    private graService;
    constructor(graService: GRAService);
    getAll(): Promise<GRAFilmesEntity[]>;
    postRanking(filme: GRAFilmesDTO): Promise<GRAFilmesEntity>;
}
