import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateCarritoDto, UpdateCarritoDto } from './dto';
import { CarritoService } from './carritos.service';

import { errorResponse, successResponse } from 'src/core/util';

@Controller('carrito')
export class CarritoController {
  constructor(private service: CarritoService) {}

  @Get(':userId')
  async getCarritoByUsuario(@Param('userId') userId: string) {
    try {
      const carrito = await this.service.getCarritoByUsuario(userId);
      return successResponse(carrito);
    } catch (error) {
      return errorResponse(error);
    }
  }

  @Get(':id')
  async getCarrito(@Param('id') id: string) {
    try {
      const carrito = await this.service.getCarrito(id);
      return successResponse(carrito);
    } catch (error) {
      return errorResponse(error);
    }
  }

  @Post()
  async createOneProducto(@Body() data: CreateCarritoDto) {
    try {
      const carrito = await this.service.createOneCarrito(data);
      return successResponse(carrito);
    } catch (error) {
      return errorResponse(error);
    }
  }

  @Patch(':id')
  async updateOneUsuario(
    @Param('id') id: string,
    @Body() data: UpdateCarritoDto,
  ) {
    try {
      const carrito = await this.service.updateCarrito(id, data);
      return successResponse(carrito);
    } catch (error) {
      return errorResponse(error);
    }
  }

  @Patch(':id')
  async cleanCarrito(@Param('id') id: string) {
    try {
      const carrito = await this.service.cleanCarrito(id);
      return successResponse(carrito);
    } catch (error) {
      return errorResponse(error);
    }
  }
}
