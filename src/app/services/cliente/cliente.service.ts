import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/models/Cliente/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  api_url = "http://localhost:8080/clientes"
  urlApiPost ="http://localhost:8080/clientes/registrar";
  urlApiPut = "http://localhost:8080/clientes/actualizar";
  urlApiDelete = "http://localhost:8080/clientes/eliminar/";

  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.api_url);
  }

  public agregarCliente(formCliente: any):Observable<any>{
    return this.http.post(this.urlApiPost, formCliente);
  }

  public actualizarCliente(clienteEditar: any): Observable<any> {
    return this.http.put(this.urlApiPut, clienteEditar);
  }

  public eliminarCliente(cod_cli: number) {
    console.log(cod_cli);
    return this.http.delete(this.urlApiDelete+cod_cli);
  }
}
