import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @IsNotEmpty()
  numero: number;
  @IsNotEmpty()
  cliente: string;
  @IsNotEmpty()
  total_amount: number;
}