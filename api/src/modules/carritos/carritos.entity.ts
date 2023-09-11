import {
  Entity,
  OneToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';

import { Usuario } from 'src/modules/usuarios/usuarios.entity';
import { ItemCarrito } from 'src/modules/carritos/itemsCarrito.entity';

@Entity()
export class Carrito {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Usuario)
  usuario: Usuario;

  @OneToMany(() => ItemCarrito, (item) => item.carrito)
  @JoinColumn()
  items: ItemCarrito[];
}
