import { Injectable, NotFoundException} from '@nestjs/common';
import { throws } from 'assert';
import { producto } from '../entities/productos.entity';

@Injectable()
export class ProductosService {
  private contadorproducto = 1;
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
    const product = this.productos.find((item) => item.id === id);
    if(!product){
      throw new NotFoundException('el producto no existe');
    }
    return product;
  }
  create(payload: any) {
    this.contadorproducto = this.contadorproducto + 1;
    const newproducto = {
      id: this.contadorproducto,
      ...payload,
    };
    this.productos.push(newproducto);
    return newproducto;
  }

  update(id: number, Payload: any) {
    // ENCUENTRO EL PRODUCTO QUE SE VA A MODIFICAR
    const producto = this.findOne(id);
    //VERIFICO QUE EL PRODUCTO EXISTA
    if (producto) {
      //ENCUENTRO QUE EL INDICE COINCIDA CON EL ID
      const index = this.productos.findIndex((item) => item.id === id);
      this.productos[index] = {
        ...producto,
        ...Payload,
      };
      return this.productos[index];
    }
    return null;
  }

  remove(id: number){
    const index = this.productos.findIndex((item) => item.id === id);
    if(index=== -1){
      throw new NotFoundException('el producto no existe');
    }
    this.productos.splice(index, 1)
    return true
  }
}
