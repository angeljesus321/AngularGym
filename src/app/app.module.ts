import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ClienteComponent } from './Components/clientes/cliente.component';
import { ProductoComponent } from './Components/productos/producto.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { BoletaComponent } from './Components/boleta/boleta.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { FiltroProductoComponent } from './Components/productos/filtro-producto/filtro-producto.component';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FiltroClienteComponent } from './Components/clientes/filtro-cliente/filtro-cliente.component';



@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ProductoComponent,
    NavbarComponent,
    BoletaComponent,
    InicioComponent,
    FiltroProductoComponent,
    FiltroClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
