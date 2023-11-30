import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './Components/clientes/cliente.component';
import { ProductoComponent } from './Components/productos/producto.component';
import { InicioComponent } from './Components/inicio/inicio.component';

const routes: Routes = [
  {path:"clientes", component:ClienteComponent},
  {path:"productos", component:ProductoComponent},
  {path:"inicio", component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
