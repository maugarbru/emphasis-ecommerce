import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Producto } from 'src/modules/productos/productos.entity';
import { Carrito } from './carritos.entity';

@Entity()
export class ItemCarrito {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Producto)
  @JoinColumn()
  producto: Producto;

  @Column('int')
  cantidad: number;

  @ManyToOne(() => Carrito, (carrito) => carrito.items)
  carrito: Carrito;
}