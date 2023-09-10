import { Body, Controller, Get, Param, Patch } from '@nestjs/common';

import { UpdateCarritoDto } from './dto';
import { CarritoService } from './carrito.service';

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
