import { IsNotEmpty, IsNumber, IsArray, IsString } from 'class-validator';

export class SubtotalItemDto {
  @IsString()
  @IsNotEmpty()
  idProducto: string;

  @IsNumber()
  @IsNotEmpty()
  cantidad: number;
}

export class TotalCarritoDto {
  @IsArray()
  @IsNotEmpty()
  items: SubtotalItemDto[];

  @IsString()
  @IsNotEmpty()
  idUsuario: string;
}
