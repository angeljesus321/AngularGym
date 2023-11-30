import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { Producto } from 'src/app/models/Producto/producto';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-filtro-producto',
  templateUrl: './filtro-producto.component.html',
  styleUrls: ['./filtro-producto.component.css']
})
export class FiltroProductoComponent implements OnInit{

  //dataProducto:any[]=[];
  displayesColumns = ['cod_producto', 'des_producto','marca_producto', 'pre_producto', 'stock_producto'];
  dataSource!: MatTableDataSource<Producto>

  constructor(private apiService:ProductoService){}

  ngOnInit(): void {
    this.apiService.getData().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  filtrarProducto(event: any): void {
    if (event && event.target) {
      const valor = event.target.value;
      this.dataSource.filter = valor.trim().toLowerCase();
    }
  }
  
}
