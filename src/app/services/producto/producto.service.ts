import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  api_url = "http://localhost:8080/productos";
  urlApiPost ="http://localhost:8080/productos/registrar";
  urlApiPut = "http://localhost:8080/productos/actualizar";
  urlApiDelete = "http://localhost:8080/productos/eliminar/";

  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.api_url);
  }

  public agregarProducto(formProducto: any):Observable<any>{
    return this.http.post(this.urlApiPost, formProducto);
  }

  public actualizarProducto(dataProducto: any): Observable<any> {
    console.log(dataProducto);
    return this.http.put(this.urlApiPut, dataProducto);
  }


  public eliminarProducto(cod_producto: number) {
    console.log(cod_producto);
    return this.http.delete(this.urlApiDelete+cod_producto);
  }
}
