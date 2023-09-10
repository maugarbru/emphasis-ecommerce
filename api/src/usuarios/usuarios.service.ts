// @packages
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

// @scripts
import { CreateUsuarioDto, IdentifyUsuarioDto, UpdateUsuarioDto } from './dto';
import { Usuario } from './usuarios.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly repository: Repository<Usuario>,
  ) {}

  async getAllUsuarios(): Promise<Usuario[]> {
    return await this.repository.find();
  }
  async getOneUsuario(id: string): Promise<Usuario> {
    return await this.repository.findOne({
      where: { id },
    });
  }
  async identifyUsuario(data: IdentifyUsuarioDto): Promise<Usuario> {
    const usuario = await this.repository.findOne({
      where: { email: data.email, password: data.password },
    });
    delete usuario?.password;
    return usuario;
  }
  async createOneUsuario(data: CreateUsuarioDto) {
    return await this.repository.save(data);
  }
  async updateOneUsuario(id: string, data: UpdateUsuarioDto) {
    return await this.repository.update({ id }, data);
  }
  async deleteOneUsuario(id: string) {
    return await this.repository.delete({ id });
  }
}
