import { Component, OnInit } from '@angular/core';
import { Sucursal } from 'src/app/modelos/sucursal.modelo';
import { SucursalService } from 'src/app/servicios/sucursal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css'],
  providers: [SucursalService]
})
export class SucursalComponent implements OnInit {

  public sucursalesList;
  public sucursalModel: Sucursal;
  buscarSucursalNombre;

  constructor(public _sucursalService: SucursalService) {
    this.sucursalModel = new Sucursal('','','','','');
   }

  ngOnInit(): void {
    this.ObtenerSucursales();
  }

  AgregarSucursal(){
    this._sucursalService.agregarSucursal(this.sucursalModel).subscribe(
      response => {
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: '!Ok!',
          text: 'Sucursal Agregada Correctamente'
        });
        this.ObtenerSucursales();
      },
      error =>{
        console.log(<any>error);
        Swal.fire({
          icon: 'warning',
          title: '!Error!',
          text: 'La sucursal Ya existe'
        })
      }
    )
  }


  ObtenerSucursales(){
    this._sucursalService.obtenerSucursal().subscribe(
      response => {
        console.log(response.sucursales)
          this.sucursalesList = response.sucursales
          Swal.fire({
            icon: 'success',
            title: '!Ok!',
            text: 'Sucursales obtenidas correctamente'
          })
      },
      error => {
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: '!Error!',
          text: 'No se han podido obtener las Sucursales'
        })
      }
    )
  }

  ObtenerSucursalesID(id){
    this._sucursalService.obtenerSucursalID(id).subscribe(
      response => {
        this.sucursalModel = response.sucursalEncontrada;
        console.log(response.sucursalEncontrada);
        Swal.fire({
          icon: 'success',
          title: '!Ok!',
          text: 'Datos de la sucursal obtenidos correctamente'
        })
      },
      error => {
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: '!Error!',
          text: 'No se ha podido obtener los datos de la sucursal'
        })
      }
    )
  }

  EditarSucursal(){
    this._sucursalService.editarSucursal(this.sucursalModel).subscribe(
      response => {
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: '!Ok!',
          text: 'Sucursal Editada Correctamente'
        })
        this.ObtenerSucursales();
      },
      error => {
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: '!Error',
          text: 'No se ha podido editar la sucursal'
        })
      }
    )
  }

  EliminarSucursal(id){
    this._sucursalService.eliminarSucursal(id).subscribe(
      response => {
        console.log(response)
        Swal.fire({
          icon: 'success',
          title: '!Ok!',
          text: 'Sucursal eliminada de la base de datos'
        })
        this.ObtenerSucursales()
      },
      error => {
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: '!Error',
          text: 'No se ha podido eliminar la sucursal de la apliacion'
        })
      }
    )
  }
}
