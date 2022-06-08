import { Controller, Get } from '@nestjs/common';

@Controller('ordenes')
export class OrdenesController {
  @Get()
  obtenerOrden() {
    return 'soy una orden';
  }
}
