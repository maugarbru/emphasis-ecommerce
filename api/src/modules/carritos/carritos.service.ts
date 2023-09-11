import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateCarritoDto, UpdateCarritoDto } from './dto';
import { Carrito } from './carritos.entity';

@Injectable()
export class CarritoService {
  constructor(
    @InjectRepository(Carrito)
    private readonly carritoRepository: Repository<Carrito>,
  ) {}

  async getCarritoByUsuario(userId: string): Promise<Carrito> {
    return await this.carritoRepository.findOne({
      where: {
        usuario: {
          id: userId,
        },
      },
      relations: {
        items: true,
        usuario: true,
      },
    });
  }
  async getCarrito(id: string): Promise<Carrito> {
    return await this.carritoRepository.findOne({
      where: { id },
      relations: {
        items: true,
        usuario: true,
      },
    });
  }
  async createOneCarrito(data: CreateCarritoDto) {
    return await this.carritoRepository.save(data);
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
