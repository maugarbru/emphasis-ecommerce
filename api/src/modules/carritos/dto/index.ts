import { IsNotEmpty, IsNumber, IsArray } from 'class-validator';

import { ItemCarrito } from '../itemsCarrito.entity';
import { Producto } from 'src/modules/productos/productos.entity';
import { Usuario } from 'src/modules/usuarios/usuarios.entity';

export class CreateItemCarritoDto {
  @IsNotEmpty()
  producto: Producto;

  @IsNumber()
  @IsNotEmpty()
  cantidad: number;
}

export class CreateCarritoDto {
  @IsNotEmpty()
  usuario: Usuario;

  @IsArray()
  @IsNotEmpty()
  items: CreateItemCarritoDto[];
}

export class UpdateCarritoDto {
  @IsArray()
  @IsNotEmpty()
  items: ItemCarrito[];
}
