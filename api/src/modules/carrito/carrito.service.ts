import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Producto } from '../productos/productos.entity';
import { TotalCarritoDto, SubtotalItemDto } from './dto';

@Injectable()
export class CarritoService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  async getSubtotalItem(item: SubtotalItemDto): Promise<number> {
    const producto = await this.productoRepository.findOne({
      where: {
        id: item.idProducto,
      },
    });
    return producto.precio_unitario * item.cantidad;
  }

  async getValorTotalCarrito(carrito: TotalCarritoDto): Promise<number> {
    let total = 0;
    const productos = await this.productoRepository.find({
      where: carrito.items.map((i) => ({ id: i.idProducto })),
    });
    for (const item of carrito.items) {
      total +=
        productos.find((p) => p.id === item.idProducto).precio_unitario *
        item.cantidad;
    }
    return total;
  }
}
