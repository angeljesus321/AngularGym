import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente/cliente.service'
import { FormGroup,FormControl} from '@angular/forms'
import { Clase } from 'src/app/models/Clase/clase';
import { Membresia } from 'src/app/models/Membresia/membresia';
import { Documento } from 'src/app/models/Documento/documento';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  
  dataCliente: any[]=[]
  formCliente = new FormGroup({
    cod_cli: new FormControl(''),
    nom_cli: new FormControl(''),
    ape_cli: new FormControl(''),
    numdoc_cli: new FormControl(''),
    telf_cli: new FormControl(''),
    correo_cli: new FormControl(''),
    tipo_clase: new FormControl(''),
    tipo_membresia: new FormControl(''),
    fecha_inicio: new FormControl(new Date()),
    fecha_fin: new FormControl(new Date()),
    tipo_documento: new FormControl('')
  });
  clienteEditar: any = null;

  tipo_clase: Clase[] = [
    { cod_clase: 1, des_clase:"FUNCIONAL"},
    { cod_clase: 2, des_clase:"MAQUINA"},
    { cod_clase: 3, des_clase:"TOTALFIT"}
  ]

  tipo_membresia: Membresia[]=[
    { cod_membresia: 1, des_membresia:"DIARIA"},
    { cod_membresia: 2, des_membresia:"INTERDIARIO"}
  ]

  tipo_documento: Documento[]=[
    { cod_documento: 1,des_documento:"DNI"},
    { cod_documento: 2,des_documento:"PASAPORTE"}
  ]

  constructor(private apiService:ClienteService){}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.apiService.getData().subscribe(dataCliente => {
        this.dataCliente = dataCliente;
        console.log(this.dataCliente);
      }
    );
  }

  AgregarCliente(){
    this.apiService.agregarCliente(this.formCliente.value).subscribe((result)=>{
      console.log(result);
      this.limpiarFormulario();
      this.llenarData();
    },
    error => {
      console.error('Error al agregar Producto', error);
    }
    );
  }

 

  limpiarFormulario() {
    this.formCliente.reset();
    this.clienteEditar = null;
  }

  ActualizarCliente() {
    if (this.clienteEditar && this.clienteEditar.cod_cli) {
      const id = { ...this.formCliente.value, id: this.clienteEditar.cod_cli};

      this.apiService.actualizarCliente(id).subscribe(result=>{
          console.log('Respuesta del servidor', result);
          this.limpiarFormulario();
          this.llenarData();
          this.clienteEditar = null;
        },
      );
    }
  }

  editarCliente(cliente: any) {
    if(cliente.cod_cli) {
      this.formCliente.setValue({
        cod_cli: cliente.cod_cli,
        nom_cli: cliente.nom_cli,
        ape_cli: cliente.ape_cli,
        numdoc_cli: cliente.numdoc_cli,
        telf_cli: cliente.telf_cli,
        correo_cli: cliente.correo_cli,
        tipo_clase: cliente.tipo_clase,
        tipo_membresia: cliente.tipo_membresia,
        fecha_inicio: cliente.fecha_inicio,
        fecha_fin: cliente.fecha_fin,
        tipo_documento: cliente.tipo_documento,
      });
      this.clienteEditar = cliente;
    }
  }

  eliminar(cod_cli: number) {
    this.apiService.eliminarCliente(cod_cli).subscribe(result=>{
      console.log(result);
      this.llenarData();
    });
  }
}
