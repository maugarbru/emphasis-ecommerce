import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateProductoDto, UpdateProductoDto } from './dto';
import { ProductosService } from './productos.service';

import { errorResponse, successResponse } from 'src/core/util';

@Controller('productos')
export class ProductosController {
  constructor(private service: ProductosService) {}

  @Get()
  async getAllProductos() {
    try {
      const productos = await this.service.getAllProductos();
      return successResponse(productos);
    } catch (error) {
      return errorResponse(error);
    }
  }

  @Get(':id')
  async getOneProducto(@Param('id') id: string) {
    try {
      const producto = await this.service.getOneProducto(id);
      return successResponse(producto);
    } catch (error) {
      return errorResponse(error);
    }
  }

  @Post()
  async createOneProducto(@Body() data: CreateProductoDto) {
    try {
      const producto = await this.service.createOneProducto(data);
      return successResponse(producto);
    } catch (error) {
      return errorResponse(error);
    }
  }

  @Patch(':id')
  async updateOneProducto(
    @Param('id') id: string,
    @Body() data: UpdateProductoDto,
  ) {
    try {
      const producto = await this.service.updateOneProducto(id, data);
      return successResponse(producto);
    } catch (error) {
      return errorResponse(error);
    }
  }

  @Delete(':id')
  async deleteOneProducto(@Param('id') id: string) {
    try {
      const producto = await this.service.deleteOneProducto(id);
      return successResponse(producto);
    } catch (error) {
      return errorResponse(error);
    }
  }
}
