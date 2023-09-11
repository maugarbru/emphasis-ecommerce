import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DATABASE_NAME } from './env';

import { Carrito } from 'src/modules/carritos/carritos.entity';
import { ItemCarrito } from 'src/modules/carritos/itemsCarrito.entity';
import { Producto } from 'src/modules/productos/productos.entity';
import { Usuario } from 'src/modules/usuarios/usuarios.entity';

class ConfigService {
  constructor(private DATABASE_NAME: string | undefined) {}

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'sqlite',

      database: 'db/' + this.DATABASE_NAME,
      entities: [Usuario, Producto, Carrito, ItemCarrito],
      synchronize: true,
    };
  }
}

export const configService = new ConfigService(DATABASE_NAME);
