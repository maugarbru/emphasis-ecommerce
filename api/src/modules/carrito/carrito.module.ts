import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Producto } from './../productos/productos.entity';
import { CarritoController } from './carrito.controller';
import { CarritoService } from './carrito.service';

@Module({
  imports: [TypeOrmModule.forFeature([Producto])],
  controllers: [CarritoController],
  providers: [CarritoService],
})
export class CarritoModule {}
