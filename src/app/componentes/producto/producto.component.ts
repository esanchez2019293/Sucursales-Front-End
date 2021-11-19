import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  providers: [ProductoService]
})
export class ProductoComponent implements OnInit {

  public productosList;
  public productoModel: Producto;
  buscarProductoNombre;
  buscarProductoProveedor;

  constructor(public _productoService: ProductoService) {
    this.productoModel = new Producto('','','','');
   }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  AgregarProducto(){
    this._productoService.agregarProducto(this.productoModel).subscribe(
      response => {
        console.log(response);
        Swal.fire({
          icon:'success',
          title:'!Ok!',
          text: 'Producto Creado Exitosamente'
        })
        this.obtenerProductos();
      },
      error =>{
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: '!Ok!',
          text: 'El producto ya existe'
        })
      }
    )
  }

  obtenerProductos(){
    this._productoService.obtenerProductos().subscribe(
      response => {
        console.log(response.productos);
        this.productosList = response.productos
        Swal.fire({
          icon: 'success',
          title: '!Ok!',
          text: 'Productos obtenidos correctamente'
        })
      },
      error =>{
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: '!Ok!',
          text: 'No se han podido mostrar los productos'
        })
      }

    )

  }

  obtenerProductoID(id){
    this._productoService.obtenerProductosID(id).subscribe(
      response => {
        this.productoModel = response.ProductoEncontrado;
        console.log(response.ProductoEncontrado);
        Swal.fire({
          icon: 'success',
          title: '!Ok!',
          text: 'Producto obtenido correctamente'
        })
      }
    );
  }

  editarProducto(){
    this._productoService.editarProducto(this.productoModel).subscribe(
      response => {
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: '!Ok!',
          text: 'Producto Editado Correctamente'
        })
        this.obtenerProductos();
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

  eliminarProducto(id){
    this._productoService.eliminarProducto(id).subscribe(
      response => {
        console.log(response)
        Swal.fire({
          icon: 'success',
          title: '!Ok!',
          text: 'Producto eliminado correctamente'
        })
        this.obtenerProductos();
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

  ordenarAscendente(){
    this._productoService.ordenarAscendente().subscribe(
      response => {
        console.log(response.productos);
          this.productosList = response.productos
          Swal.fire({
            icon: 'success',
            title: '!Ok!',
            text: 'Se ha ordenado en orden Ascendent el stock'
          })
      },
      error => {
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: '!Error!',
          text: 'No se ha podido oredenar el Stock'
        })
      }
    )
  }

  ordenarDescendente(){
    this._productoService.ordenarDescendente().subscribe(
      response => {
        console.log(response.productos);
          this.productosList = response.productos
          Swal.fire({
            icon: 'success',
            title: '!Ok!',
            text: 'Se ha ordenado de manera Descendente el Stock'
          })
      },
      error => {
        console.log(<any>error);
        Swal.fire({
          icon: 'error',
          title: '!Error!',
          text: 'No se ha podido ordenar el Stock'
        })
      }
    )
  }
}
