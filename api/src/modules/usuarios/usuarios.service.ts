import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Carrito } from '../carritos/carritos.entity';
import { CreateUsuarioDto, IdentifyUsuarioDto, UpdateUsuarioDto } from './dto';
import { Usuario } from './usuarios.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(Carrito)
    private readonly carritoRepository: Repository<Carrito>,
  ) {}

  async getAllUsuarios(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }
  async getOneUsuario(id: string): Promise<Usuario> {
    return await this.usuarioRepository.findOne({
      where: { id },
    });
  }
  async identifyUsuario(data: IdentifyUsuarioDto): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: { email: data.email, password: data.password },
    });
    delete usuario?.password;
    return usuario;
  }
  async createOneUsuario(data: CreateUsuarioDto) {
    const nuevoUsuario = this.usuarioRepository.create(data);
    await this.usuarioRepository.save(nuevoUsuario);
    await this.carritoRepository.save({
      items: [],
      usuario: nuevoUsuario,
    });
    return nuevoUsuario;
  }
  async updateOneUsuario(id: string, data: UpdateUsuarioDto) {
    return await this.usuarioRepository.update({ id }, data);
  }
  async deleteOneUsuario(id: string) {
    return await this.usuarioRepository.delete({ id });
  }
}
