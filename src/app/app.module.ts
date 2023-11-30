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


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    ProductoComponent,
    NavbarComponent,
    BoletaComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
