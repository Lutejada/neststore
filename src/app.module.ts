import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasController } from './controllers/categorias.controller';
import { ProductosController } from './controllers/productos.controller';
import { OrdenesController } from './controllers/ordenes.controller';
import { UserController } from './controllers/user.controller';
import { ClienteController } from './controllers/cliente.controller';
import { MarcaController } from './controllers/marca.controller';

@Module({
  imports: [],
  controllers: [AppController, CategoriasController, ProductosController, OrdenesController, UserController, ClienteController, MarcaController],
  providers: [AppService],
})
export class AppModule {}
