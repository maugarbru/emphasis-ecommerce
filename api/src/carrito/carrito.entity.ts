import {
  Entity,
  JoinColumn,
  OneToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Usuario } from 'src/usuarios/usuarios.entity';
import { ItemCarrito } from 'src/carrito/itemsCarrito.entity';

@Entity()
export class Carrito {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Usuario)
  @JoinColumn()
  usuario: Usuario;

  @OneToMany(() => ItemCarrito, (item) => item.carrito)
  @JoinColumn()
  items: ItemCarrito[];
}
