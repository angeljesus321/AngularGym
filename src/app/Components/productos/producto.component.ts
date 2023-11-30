import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto/producto.service'
import { FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit{
  
  dataProducto:any[]=[];
  productoEditar: any = null;
  formProducto = new FormGroup({
    cod_producto: new FormControl(''),
    des_producto: new FormControl(''),
    marca_producto: new FormControl(''),
    pre_producto: new FormControl(''),
    stock_producto: new FormControl('')
  });

  constructor(private apiService:ProductoService){}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.apiService.getData().subscribe(dataProducto => {
        this.dataProducto = dataProducto;
        console.log(this.dataProducto);
      }
    );
  }

  AgregarProducto(){
    this.apiService.agregarProducto(this.formProducto.value).subscribe((result)=>{
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
    this.formProducto.reset();
    this.productoEditar = null;
  }

  ActualizarProducto() {
    if (this.productoEditar && this.productoEditar.cod_producto) {
      const id = { ...this.formProducto.value, id: this.productoEditar.cod_producto};

      this.apiService.actualizarProducto(id).subscribe(result=>{
          console.log('Respuesta del servidor', result);
          this.limpiarFormulario();
          this.llenarData();
          this.productoEditar = null;
        },
      );
    }
  }

  editarProducto(producto: any) {
    if(producto.cod_producto) {
      this.formProducto.setValue({
        cod_producto: producto.cod_producto,
        des_producto: producto.des_producto,
        marca_producto: producto.marca_producto,
        pre_producto: producto.pre_producto,
        stock_producto: producto.stock_producto,
      });
      this.productoEditar = producto;
    }
  }

  eliminar(cod_producto: number) {
    this.apiService.eliminarProducto(cod_producto).subscribe(result=>{
      console.log(result);
      this.llenarData();
    });
  }
}
