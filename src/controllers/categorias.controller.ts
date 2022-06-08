import { Controller, Param, Get } from '@nestjs/common';

@Controller('categorias')
export class CategoriasController {
  @Get('/:id/productos/:productid')
  obtenercategoria(
    @Param('id') id: string,
    @Param('productid') productid: string,
  ) {
    return `La categoria ${id} Product ${productid}`;
  }
}
