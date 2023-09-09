import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar')
  sku: string;

  @Column('varchar')
  nombre: string;

  @Column('varchar')
  descripcion: string;

  @Column('int')
  unidades_disponibles: number;

  @Column('int')
  precio_unitario: number;
}
