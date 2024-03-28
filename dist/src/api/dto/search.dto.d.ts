import { ISearchWithDateDto } from '../interfaces/search.interface';
export declare class SearchDto {
    page?: number;
    limit?: number;
}
export declare class SearchWithDateDto extends SearchDto implements ISearchWithDateDto {
    firstDate?: Date;
    lastDate?: Date;
}
