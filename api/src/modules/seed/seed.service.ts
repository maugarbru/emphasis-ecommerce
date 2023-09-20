import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Producto } from '../productos/productos.entity';
import { Usuario } from '../usuarios/usuarios.entity';

import { mockedUsers, mockedProducts } from 'src/core/util/mockData';

@Injectable()
export class SeedService {
  constructor(
    @InjectRepository(Producto)
    private readonly productRepository: Repository<Producto>,
    @InjectRepository(Usuario)
    private readonly userRepository: Repository<Usuario>,
  ) {}

  async seedData() {
    return await Promise.all([
      ...mockedProducts.map((p) => this.productRepository.save(p)),
      ...mockedUsers.map((u) => this.userRepository.save(u)),
    ]);
  }
}
