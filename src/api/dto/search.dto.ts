import { ApiProperty } from '@nestjs/swagger';
import { ISearchWithDateDto } from '../interfaces/search.interface';

export class SearchDto {
  @ApiProperty({
    description: 'Page',
    example: '1',
    required: false,
    default: 1,
    minimum: 1,
  })
  page?: number;

  @ApiProperty({
    description: 'Limit per page',
    example: '20',
    required: false,
    default: 20,
    minimum: 1,
  })
  limit?: number;
}

export class SearchWithDateDto extends SearchDto implements ISearchWithDateDto {
  @ApiProperty({
    description: 'Data inicial',
    example: new Date(),
    required: false,
  })
  firstDate?: Date;

  @ApiProperty({
    description: 'Data final',
    example: new Date(),
    required: false,
  })
  lastDate?: Date;
}
