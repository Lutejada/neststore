import { isString, isNumber, isURL, isNotEmpty } from 'class-validator';

export class crearProductoDto {
  @isString()
  @isNotEmpty()
  readonly nombre: string;

  @isString()
  @isNotEmpty()
  readonly descripcion: string;

  @isNumber()
  @isNotEmpty()
  readonly precio: number;

  @isNumber()
  @isNotEmpty()
  readonly stock: number;

  @isURL()
  @isNotEmpty()
  readonly imagen: string;
}

import { PartialType } from '@nestjs/mapped-types';

export class actualizarProductoDto extends PartialType(crearProductoDto) {}
