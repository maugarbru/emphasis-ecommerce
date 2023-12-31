import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CarritoModule } from './modules/carrito/carrito.module';
import { ProductosModule } from './modules/productos/productos.module';
import { SeedModule } from './modules/seed/seed.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { configService } from './core/config/db.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    CarritoModule,
    ProductosModule,
    SeedModule,
    UsuariosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
