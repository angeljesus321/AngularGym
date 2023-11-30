import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  api_url = "http://localhost:8080/inicio";

  constructor(private http: HttpClient) { }
}
