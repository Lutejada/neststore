import { Controller, Get } from '@nestjs/common';

@Controller('marca')
export class MarcaController {
  @Get()
  obtenermarca() {
    return 'soy una marca';
  }
}
