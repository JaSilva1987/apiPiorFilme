import { isNull } from 'lodash';
import { ISearchWithDateDto } from '../interfaces/search.interface';

export class DateUtils {
  public static isFilteredDate(
    data: Date,
    filterParam: ISearchWithDateDto,
  ): boolean {
    if (
      DateUtils.isNotEmptyDate(filterParam?.firstDate) &&
      DateUtils.isNotEmptyDate(filterParam.lastDate)
    ) {
      return data >= filterParam?.firstDate && data <= filterParam?.lastDate;
    }

    if (DateUtils.isNotEmptyDate(filterParam?.firstDate)) {
      return data >= filterParam?.firstDate;
    }

    if (DateUtils.isNotEmptyDate(filterParam?.lastDate)) {
      return data <= filterParam?.lastDate;
    }

    return false;
  }

  public static isNotEmptyDate(date?: Date): boolean {
    if (!date) {
      return false;
    }
    return !isNull(date);
  }
}
