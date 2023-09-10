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

@Controller('productos')
export class ProductosController {
  constructor(private service: ProductosService) {}

  @Get()
  async getAllProductos() {
    return await this.service.getAllProductos();
  }

  @Get(':id')
  async getOneProducto(@Param('id') id: string) {
    return await this.service.getOneProducto(id);
  }

  @Post()
  async createOneProducto(@Body() newTeam: CreateProductoDto) {
    return await this.service.createOneProducto(newTeam);
  }

  @Patch(':id')
  async updateOneProducto(
    @Param('id') id: string,
    @Body() data: UpdateProductoDto,
  ) {
    return await this.service.updateOneProducto(id, data);
  }

  @Delete(':id')
  async deleteOneProducto(@Param('id') id: string) {
    return await this.service.deleteOneProducto(id);
  }
}
