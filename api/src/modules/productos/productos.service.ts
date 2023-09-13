import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { CreateProductoDto, UpdateProductoDto } from './dto';
import { Producto } from './productos.entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly repository: Repository<Producto>,
  ) {}

  async getAllProductos() {
    return await this.repository.find();
  }
  async getOneProducto(id: string) {
    return (
      (await this.repository.findOne({
        where: { id },
      })) ?? null
    );
  }
  async createOneProducto(data: CreateProductoDto) {
    const usuario = await this.repository.findOne({
      where: { sku: data.sku },
    });
    if (usuario) {
      throw new BadRequestException('Ya existe un PRODUCTO con ese SKU');
    }
    return await this.repository.save(data);
  }
  async updateOneProducto(id: string, data: UpdateProductoDto) {
    return await this.repository.update({ id }, data);
  }
  async deleteOneProducto(id: string) {
    return await this.repository.delete({ id });
  }
}
