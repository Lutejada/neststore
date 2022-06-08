import { Controller, Get, Param , Query } from '@nestjs/common';

@Controller('productos')
export class ProductosController {
  @Get(':productid')
  obtenerproducto(@Param('productid') productid: string) {
    return `Product ${productid}`;
  }

  @Get()
  getproductos(
    @Query('limite') limite = 12,
    @Query('offset') offset = 24,
    @Query('marca') marca = 'luis',
  ) {
    return `productos ${limite} el offset = ${offset} la Marca = ${marca}`;
  }
}
