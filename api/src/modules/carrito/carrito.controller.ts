import { Body, Controller, Post } from '@nestjs/common';

import { SubtotalItemDto, TotalCarritoDto } from './dto';
import { CarritoService } from './carrito.service';

import { errorResponse, successResponse } from 'src/core/util';

@Controller('carrito')
export class CarritoController {
  constructor(private service: CarritoService) {}

  @Post('subtotal')
  async getSubtotalItem(@Body() data: SubtotalItemDto) {
    try {
      const subtotal = await this.service.getSubtotalItem(data);
      return successResponse({ subtotal });
    } catch (error) {
      return errorResponse(error);
    }
  }

  @Post('total')
  async getValorTotalCarrito(@Body() data: TotalCarritoDto) {
    try {
      const total = await this.service.getValorTotalCarrito(data);
      return successResponse({ total });
    } catch (error) {
      return errorResponse(error);
    }
  }
}
