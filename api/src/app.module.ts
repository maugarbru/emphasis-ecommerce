import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CarritoModule } from './modules/carritos/carritos.module';
import { ProductosModule } from './modules/productos/productos.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { configService } from './core/config/db.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    ProductosModule,
    UsuariosModule,
    CarritoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
