export class Boleta {
    id_boleta: number;
    costo_total: number;
    cod_cli: string;
    descripcion_boleta: string;

    constructor(){
        this.id_boleta = 0;
        this.costo_total = 0;
        this.cod_cli = "";
        this.descripcion_boleta = "";
    }
}
