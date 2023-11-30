export class DetalleBoleta {
    id_detalle: number;
    id_boleta: number;
    cod_producto: string;
    descripcion_detalle: string;

    constructor(){
        this.id_detalle = 0;
        this.id_boleta = 0;
        this.cod_producto = "";
        this.descripcion_detalle = "";
    }
}
