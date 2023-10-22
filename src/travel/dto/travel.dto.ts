import { ApiProperty } from '@nestjs/swagger';

export class TravelDto {
  @ApiProperty({
    type: 'string',
    example: 'Tashkent',
  })
  from_uz: string;

  @ApiProperty({
    type: 'string',
    example: 'Tashkent',
  })
  from_ru: string;

  @ApiProperty({
    type: 'string',
    example: 'Dubai',
  })
  where_uz: string;

  @ApiProperty({
    type: 'string',
    example: 'Dubai',
  })
  where_ru: string;

  @ApiProperty({
    type: 'text',
    example: 'information of travel',
  })
  description_uz: string;

  @ApiProperty({
    type: 'text',
    example: 'information of travel',
  })
  description_ru: string;

  @ApiProperty({
    type: 'date',
    example: '2023.12.02',
  })
  fly_date: Date;

  @ApiProperty({
    type: 'number',
    example: '10',
  })
  days: number;

  @ApiProperty({
    type: 'number',
    example: '2000',
  })
  price: number;

  @ApiProperty({
    type: 'string',
    example: 'special',
  })
  type: string;

  @ApiProperty({
    type: 'string',
    example: 'klj23230-23lkjh32',
  })
  home_image: string;

  @ApiProperty({
    type: 'string',
    example: 'asdfklj2000-234bj4h',
  })
  standard_image: string;

  @ApiProperty({
    type: 'string',
    example: 'asdfjk23jk0023-23jdfsk',
  })
  small_image: string;
}
