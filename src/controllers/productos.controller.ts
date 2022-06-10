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

@Controller('productos')
export class ProductosController {
  @Get(':productid')
  obtenerproducto(@Param('productid') productid: string) {
    return {
      message: `Product ${productid}`,
    };
  }

  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  getproductos(
    @Query('limite') limite = 12,
    @Query('offset') offset = 24,
    @Query('marca') marca = 'luis',
  ) {
    return {
      message: `productos ${limite} el offset = ${offset} la Marca = ${marca}`,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion crear',
      payload,
    };
  }

  @Delete(':id')
  eliminar(@Param('id') id: number) {
    return {
      id,
    };
  }
}
