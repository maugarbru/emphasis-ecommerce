import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateCarritoDto, UpdateCarritoDto } from './dto';
import { CarritoService } from './carritos.service';

@Controller('carrito')
export class CarritoController {
  constructor(private service: CarritoService) {}

  @Get(':userId')
  async getCarritoByUsuario(@Param('userId') userId: string) {
    return await this.service.getCarritoByUsuario(userId);
  }

  @Get(':id')
  async getCarrito(@Param('id') id: string) {
    return await this.service.getCarrito(id);
  }

  @Post()
  async createOneProducto(@Body() data: CreateCarritoDto) {
    return await this.service.createOneCarrito(data);
  }

  @Patch(':id')
  async updateOneUsuario(
    @Param('id') id: string,
    @Body() data: UpdateCarritoDto,
  ) {
    return await this.service.updateCarrito(id, data);
  }

  @Patch(':id')
  async cleanCarrito(@Param('id') id: string) {
    return await this.service.cleanCarrito(id);
  }
}
