import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Carrito } from 'src/carrito/carrito.entity';
import { Producto } from 'src/productos/productos.entity';

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
