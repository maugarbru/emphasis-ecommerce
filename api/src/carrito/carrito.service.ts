import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { UpdateCarritoDto } from './dto';
import { Carrito } from './carrito.entity';
import { ItemCarrito } from './itemsCarrito.entity';

@Injectable()
export class CarritoService {
  constructor(
    @InjectRepository(Carrito)
    private readonly carritoRepository: Repository<Carrito>,
    @InjectRepository(ItemCarrito)
    private readonly itemRepository: Repository<ItemCarrito>,
  ) {}

  async getCarritoByUsuario(userId: string): Promise<Carrito> {
    return await this.carritoRepository.findOne({
      where: {
        usuario: {
          id: userId,
        },
      },
    });
  }
  async getCarrito(id: string): Promise<Carrito> {
    return await this.carritoRepository.findOne({
      where: { id },
    });
  }
  async updateCarrito(id: string, data: UpdateCarritoDto) {
    return await this.carritoRepository.update({ id }, data);
  }
  async cleanCarrito(id: string) {
    return await this.carritoRepository.update(
      { id },
      {
        items: [],
      },
    );
  }
}
