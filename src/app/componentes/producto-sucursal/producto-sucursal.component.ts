import { Component, OnInit } from '@angular/core';
import { ProductoSucursal } from 'src/app/modelos/producto-sucursal.modelo';
import { ProductoSucursalService } from 'src/app/servicios/producto-sucursal.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto-sucursal',
  templateUrl: './producto-sucursal.component.html',
  styleUrls: ['./producto-sucursal.component.scss'],
  providers: [ProductoSucursalService]
})
export class ProductoSucursalComponent implements OnInit {

  public productoSucursalesList;
  public productoSucursalesModel: ProductoSucursal

  constructor(public _productoSucursalService: ProductoSucursalService) {
    this.productoSucursalesModel = new ProductoSucursal('','','','','');
   }

  ngOnInit(): void {
    this.ObtenerProductoSucursal();
  }

  AgregarProductoSucursal(){
    this._productoSucursalService.AgregarProductoSucursal(this.productoSucursalesModel).subscribe(
      response =>{
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: '!OK!',
          text: 'Producto Agregado a la sucursal Correctamente'
        }),
        this.ObtenerProductoSucursal();
      }
    )
  }

  ObtenerProductoSucursal(){
    this._productoSucursalService.ObtenerProductoSucursal().subscribe(
      response => {
        console.log(response.productosSucursal)
          this.productoSucursalesList = response.productosSucursal
          Swal.fire({
            icon: 'success',
            title: '!OK!',
            text: 'Productos de la sucursal Obtenidos correctamente'
          })
      },
      error => {
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: '!OK!',
          text: 'No se han podido obtener los productos de la sucursal'
        })
      }
    )
  }

  ObtenerProductoSucursalID(id){
    this._productoSucursalService.ObtenerProductoSucursalID(id).subscribe(
      response => {
        this.productoSucursalesModel = response.productoCorrecto;
        console.log(response.productoCorrecto);
        Swal.fire({
          icon: 'success',
          title: '!OK!',
          text: 'Datos del producto obtenido correctamente'
        })
      }
    )
  }

  VenderProducto(){
    this._productoSucursalService.VenderProducto(this.productoSucursalesModel).subscribe(
      response => {
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: '!OK!',
          text: 'Se ha realizado la venta del producto correctamente'
        })
        this.ObtenerProductoSucursal();
      },
      error => {
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: '!OK!',
          text: 'No se ha podido realizar la venta del producto deseado'
        })
      }
    )
  }

}
