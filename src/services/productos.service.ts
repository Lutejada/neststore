import { Injectable } from '@nestjs/common';

import { producto } from './../entities/productos.entity';
import { producto } from '../entities/productos.entity';

@Injectable()
export class ProductosService {
  private contadorproducto = 0;
  private productos: producto[] = [
    {
      id: 1,
      nombre: 'producto 1',
      descripcion: 'bla bla',
      precio: 12365,
      stock: 235,
      imagen: 'sdfdsfdf',
    },
  ];

  findAll() {
    return this.productos;
  }
  findOne(id: number) {
    return this.productos.find((item) => item.id === id);
  }
  create(payload:any){
    this.contadorproducto = this.contadorproducto + 1;
    const newproducto = {
      id: this.contadorproducto,
      ...payload,
    };
    this.productos.push(newproducto);
    return newproducto;
  }
}
