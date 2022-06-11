import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { ProductosService } from './../services/productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private productoService: ProductosService) {}
  @Get(':productid')
  obtenerproducto(@Param('productid') productid: number) {
    //return {
    //message: `Product ${productid}`,
    //};
    return this.productoService.findOne(+productid);
  }

  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  getproductos(
    @Query('limite') limite = 12,
    @Query('offset') offset = 24,
    @Query('marca') marca = 'luis',
  ) {
    //return {
    //message: `productos ${limite} el offset = ${offset} la Marca = ${marca}`,
    //};
    return this.productoService.findAll();
  }

  @Post()
  create(@Body() payload: any) {
    //return {
    //message: 'accion crear',
    // payload,
    //};

    return this.productoService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return this.productoService.update(+id, payload);
  }

  @Delete(':id')
  eliminar(@Param('id') id: number) {
    return {
      id,
    };
  }
}
