import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/models/Cliente/cliente';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-filtro-cliente',
  templateUrl: './filtro-cliente.component.html',
  styleUrls: ['./filtro-cliente.component.css']
})
export class FiltroClienteComponent implements OnInit{

  dataCliente:any[]=[];
  displayesColumns = ['cod_cli', 'nom_cli','ape_cli', 'telf_cli', 'correo_cli','tipo_clase', 'tipo_membresia', 'fecha_inicio', 'fecha_fin', 'tipo_documento'];
  dataSource!: MatTableDataSource<Cliente>

  constructor(private apiService:ClienteService){}

  ngOnInit(): void {
    this.apiService.getData().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  filtrarCliente(event: any): void {
    if (event && event.target) {
      const valor = event.target.value;
      this.dataSource.filter = valor.trim().toLowerCase();
    }
  }
  
}
