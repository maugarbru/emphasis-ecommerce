import { IsNotEmpty, IsArray } from 'class-validator';
import { ItemCarrito } from '../itemsCarrito.entity';

export class UpdateCarritoDto {
  @IsArray()
  @IsNotEmpty()
  items: ItemCarrito[];
}
