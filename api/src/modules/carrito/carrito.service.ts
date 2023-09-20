import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Producto } from '../productos/productos.entity';
import { TotalCarritoDto, SubtotalItemDto } from './dto';

import { aplicarReglaPrecio } from 'src/core/rules';
import { RespuestaRegla } from 'src/core/util/types';

@Injectable()
export class CarritoService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  async getSubtotalItem(item: SubtotalItemDto): Promise<RespuestaRegla> {
    const producto = await this.productoRepository.findOne({
      where: {
        id: item.idProducto,
      },
    });
    return aplicarReglaPrecio(producto, item.cantidad);
  }

  async getValorTotalCarrito(carrito: TotalCarritoDto): Promise<number> {
    let total = 0;
    const productos = await this.productoRepository.find({
      where: carrito.items.map((i) => ({ id: i.idProducto })),
    });
    for (const item of carrito.items) {
      total += aplicarReglaPrecio(
        productos.find((p) => p.id === item.idProducto),
        item.cantidad,
      ).subtotal;
    }
    return total;
  }
}
