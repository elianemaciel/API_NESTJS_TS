import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  numero: number;
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  cliente: string;
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    description: 'This is a required property',
  })
  total_amount: number;
}