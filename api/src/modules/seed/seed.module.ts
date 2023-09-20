import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Producto } from '../productos/productos.entity';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';
import { Usuario } from '../usuarios/usuarios.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Producto]),
    TypeOrmModule.forFeature([Usuario]),
  ],
  controllers: [SeedController],
  providers: [SeedService],
})
export class SeedModule {}
