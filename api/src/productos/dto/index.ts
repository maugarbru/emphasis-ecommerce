import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductoDto {
  @IsString()
  @IsNotEmpty()
  sku: string;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsNumber()
  @IsNotEmpty()
  unidades_disponibles: number;

  @IsNumber()
  @IsNotEmpty()
  precio_unitario: number;
}

export class UpdateProductoDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  sku?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  nombre?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  descripcion?: string;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  unidades_disponibles?: number;

  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  precio_unitario?: number;
}
