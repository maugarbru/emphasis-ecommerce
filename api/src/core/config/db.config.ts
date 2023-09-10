import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DATABASE_NAME } from './env';

import { Carrito } from 'src/carrito/carrito.entity';
import { Producto } from 'src/productos/productos.entity';
import { Usuario } from 'src/usuarios/usuarios.entity';

class ConfigService {
  constructor(private DATABASE_NAME: string | undefined) {}

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'sqlite',

      database: 'db/' + this.DATABASE_NAME,
      entities: [Usuario, Producto, Carrito],
      synchronize: true,
    };
  }
}

export const configService = new ConfigService(DATABASE_NAME);
