import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  obtenerUsuario() {
    return 'Soy un Usuario';
  }
}
