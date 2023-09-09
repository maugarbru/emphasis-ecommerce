// @packages
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

// @scripts
import { CreateUsuarioDto, IdentifyUsuarioDto, UpdateUsuarioDto } from './dto';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
  constructor(private service: UsuariosService) {}

  @Get()
  async getAllUsuarios() {
    return await this.service.getAllUsuarios();
  }

  @Get(':id')
  async getOneUsuario(@Param('id') id: string) {
    return await this.service.getOneUsuario(id);
  }

  @Post()
  async createOneUsuario(@Body() data: CreateUsuarioDto) {
    return await this.service.createOneUsuario(data);
  }

  @Post()
  async identifyUsuario(@Body() data: IdentifyUsuarioDto) {
    return await this.service.identifyUsuario(data);
  }

  @Patch(':id')
  async updateOneUsuario(
    @Param('id') id: string,
    @Body() data: UpdateUsuarioDto,
  ) {
    return await this.service.updateOneUsuario(id, data);
  }

  @Delete(':id')
  async deleteOneUsuario(@Param('id') id: string) {
    return await this.service.deleteOneUsuario(id);
  }
}
