import { ISearchWithDateDto } from '../interfaces/search.interface';
export declare class DateUtils {
    static isFilteredDate(data: Date, filterParam: ISearchWithDateDto): boolean;
    static isNotEmptyDate(date?: Date): boolean;
}
