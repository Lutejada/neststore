import { Controller, Get } from '@nestjs/common';

@Controller('cliente')
export class ClienteController {
  @Get()
  obtenerCliente() {
    return 'soy un cliente';
  }
}
