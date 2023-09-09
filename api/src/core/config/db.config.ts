import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DATABASE_NAME } from './env';
import { F1Driver } from 'src/usuarios/usuarios.entity';
import { F1Team } from 'src/productos/productos.entity';

class ConfigService {
  constructor(private DATABASE_NAME: string | undefined) {}

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'sqlite',

      database: 'db/' + this.DATABASE_NAME,
      entities: [F1Driver, F1Team],
      synchronize: true,
    };
  }
}

export const configService = new ConfigService(DATABASE_NAME);
