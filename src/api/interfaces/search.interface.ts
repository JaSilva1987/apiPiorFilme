export interface ISearchDto {
  page?: number;
  limit?: number;
}

export interface ISearchWithDateDto extends ISearchDto {
  firstDate?: Date;
  lastDate?: Date;
}
