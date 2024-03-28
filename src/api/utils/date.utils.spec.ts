import { DateUtils } from '../utils/date.utils';

describe('DateUtils.isFilteredDate', () => {
  it('should be false, filterParam is null', () => {
    expect(DateUtils.isFilteredDate(new Date(), null)).toEqual(false);
  });
  it('should be true, filterParam with firstDate and lastDate', () => {
    const filterParam = {
      firstDate: new Date('01-01-2021'),
      lastDate: new Date('01-31-2021'),
    };
    expect(
      DateUtils.isFilteredDate(new Date('01-05-2021'), filterParam),
    ).toEqual(true);
  });
  it('should be false, filterParam with firstDate and lastDate null', () => {
    const filterParam = {
      firstDate: null,
      lastDate: null,
    };
    expect(
      DateUtils.isFilteredDate(new Date('01-01-2021'), filterParam),
    ).toEqual(false);
  });
  it('should be false, filterParam with firstDate and lastDate out of date', () => {
    const filterParam = {
      firstDate: new Date('01-05-2021'),
      lastDate: new Date('01-31-2021'),
    };
    expect(
      DateUtils.isFilteredDate(new Date('01-01-2021'), filterParam),
    ).toEqual(false);
  });
  it('should be true, filterParam with firstDate', () => {
    const filterParam = {
      firstDate: new Date('01-01-2021'),
    };
    expect(DateUtils.isFilteredDate(new Date(), filterParam)).toEqual(true);
  });
  it('should be false, filterParam with firstDate great than date', () => {
    const filterParam = {
      firstDate: new Date('01-31-2021'),
    };
    expect(
      DateUtils.isFilteredDate(new Date('01-01-2021'), filterParam),
    ).toEqual(false);
  });
  it('should be false, filterParam with date great than lastDate', () => {
    const filterParam = {
      lastDate: new Date('01-05-2021'),
    };
    expect(
      DateUtils.isFilteredDate(new Date('01-31-2021'), filterParam),
    ).toEqual(false);
  });
  it('should be true, filterParam with lastDate', () => {
    const filterParam = {
      lastDate: new Date('01-31-2021'),
    };
    expect(
      DateUtils.isFilteredDate(new Date('01-05-2021'), filterParam),
    ).toEqual(true);
  });
});

describe('DateUtils.isNotEmptyDate', () => {
  it('should be empty data', () => {
    expect(DateUtils.isNotEmptyDate()).toEqual(false);
  });
  it('should be not empty data', () => {
    expect(DateUtils.isNotEmptyDate(new Date())).toEqual(true);
  });
});
