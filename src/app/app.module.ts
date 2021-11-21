import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Scripts

import { ScriptsService } from './servicios/scripts.service';

//Importaciones

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { SucursalComponent } from './componentes/sucursal/sucursal.component';
import { ProductoNombrePipe } from './pipes/producto-nombre.pipe';
import { ProductoProveedorPipe } from './pipes/producto-proveedor.pipe';
import { SucursalNombrePipe } from './pipes/sucursal-nombre.pipe';
import { ProductoSucursalComponent } from './componentes/producto-sucursal/producto-sucursal.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    InicioComponent,
    ProductoComponent,
    SucursalComponent,
    ProductoNombrePipe,
    ProductoProveedorPipe,
    SucursalNombrePipe,
    ProductoSucursalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
