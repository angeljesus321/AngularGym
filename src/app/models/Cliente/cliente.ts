import { Clase } from '../Clase/clase'
import { Membresia } from '../Membresia/membresia'
import { Documento } from '../Documento/documento'

export interface TipoClase {
    cod_clase: number;
    des_clase: string;
}

export interface TipoMembresia {
    cod_membresia: number;
    des_membresia: string;
}

export interface TipoDocumento {
    cod_documento: number;
    des_documento: string;
}

export class Cliente {
    cod_cli: string;
    nom_cli: string;
    ape_cli: string;
    numdoc_cli: string;
    telf_cli: string;
    correo_cli: string;
    tipo_clase: Clase;
    tipo_membresia: Membresia;
    fecha_inicio: Date;
    fecha_fin: Date;
    tipo_documento: Documento;

    constructor(){
        this.cod_cli = "";
        this.nom_cli = "";
        this.ape_cli = "";
        this.numdoc_cli = "";
        this.telf_cli = "";
        this.correo_cli = "";
        this.tipo_clase = new Clase();
        this.tipo_membresia = new Membresia();
        this.fecha_inicio = new Date;
        this.fecha_fin = new Date;
        this.tipo_documento = new Documento();
    }
}