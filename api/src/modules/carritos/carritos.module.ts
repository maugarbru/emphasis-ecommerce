import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Carrito } from './carritos.entity';
import { CarritoController } from './carritos.controller';
import { CarritoService } from './carritos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Carrito])],
  controllers: [CarritoController],
  providers: [CarritoService],
})
export class CarritoModule {}
