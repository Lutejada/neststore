import { isString, isNumber, isURL, isNotEmpty } from 'class-validator';


export  class crearProductoDto{

    @isString()
    @isNotEmpty()
    readonly nombre:string;

    @isString()
    @isNotEmpty()
    readonly descripcion:string;

    @isNumber()
    @isNotEmpty()
    readonly precio:number;

    @isNumber()
    @isNotEmpty()
    readonly stock:number;

    @isURL()
    @isNotEmpty()
    readonly imagen:string;

};

export  class actualizarProductoDto{
    readonly nombre?:string;
    readonly descripcion?:string;
    readonly precio?:number;
    readonly stock?:number;
    readonly imagen?:string;

}