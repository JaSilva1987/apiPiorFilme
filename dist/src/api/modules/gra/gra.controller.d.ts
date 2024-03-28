import { GRAService } from "./gra.service";
export declare class GRAController {
    private graService;
    constructor(graService: GRAService);
    getAll(): Promise<import("../../../database/entity/grafilmes.entity").GRAFilmesEntity[]>;
}
