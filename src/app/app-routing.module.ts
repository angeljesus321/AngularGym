import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './Components/clientes/cliente.component';
import { ProductoComponent } from './Components/productos/producto.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { FiltroProductoComponent } from './Components/productos/filtro-producto/filtro-producto.component';
import { FiltroClienteComponent } from './Components/clientes/filtro-cliente/filtro-cliente.component';

const routes: Routes = [
  {path:"clientes", component:ClienteComponent},
  {path:"productos", component:ProductoComponent},
  {path:"inicio", component:InicioComponent},
  {path:"filtroproducto", component:FiltroProductoComponent},
  {path:"filtrocliente", component:FiltroClienteComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
