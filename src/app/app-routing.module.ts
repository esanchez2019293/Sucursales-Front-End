import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { SucursalComponent } from './componentes/sucursal/sucursal.component';
import { RestriccionService } from './servicios/restriccion.service';

const routes: Routes = [

  { path: 'login', component: LoginComponent},
  { path: 'inicio', component: InicioComponent, canActivate:[RestriccionService]},
  { path: 'producto', component: ProductoComponent, canActivate:[RestriccionService]},
  { path: 'sucursal', component: SucursalComponent, canActivate:[RestriccionService]},
  { path: '**', component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
