import { DateUtils } from './date.utils';

describe('DateUtils', () => {
  it('should be invalid', () => {
    expect(DateUtils.isNotEmptyDate()).toEqual(false);
  });

  it('should be false filter', () => {
    expect(DateUtils.isFilteredDate(new Date(), {})).toEqual(false);
  });
});
