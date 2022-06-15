import { IsString, IsNumber, IsUrl, IsNotEmpty } from 'class-validator';

export class crearProductoDto {
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @IsString()
  @IsNotEmpty()
  readonly descripcion: string;

  @IsNumber()
  @IsNotEmpty()
  readonly precio: number;

  @IsNumber()
  @IsNotEmpty()
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  readonly imagen: string;
}

import { PartialType } from '@nestjs/mapped-types';

export class actualizarProductoDto extends PartialType(crearProductoDto) {}
