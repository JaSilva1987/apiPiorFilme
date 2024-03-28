import { isNull, isEmpty } from 'lodash';

export class ListUtils {
  public static isEmptyList<T>(list: Array<T>): boolean {
    return !list || isEmpty(list) || isNull(list);
  }
}
