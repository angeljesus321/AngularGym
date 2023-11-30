export class Producto {
    cod_producto: string;
    des_producto: string;
    marca_producto: string;
    pre_producto: number;
    stock_producto: number;

    constructor(){
        this.cod_producto = "";
        this.des_producto = "";
        this.marca_producto = "";
        this.pre_producto = 0;
        this.stock_producto = 0;
    }
}
