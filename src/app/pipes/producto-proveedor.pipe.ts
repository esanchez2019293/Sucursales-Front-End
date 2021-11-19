import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productoProveedor'
})
export class ProductoProveedorPipe implements PipeTransform {

  transform(productos: any, search: any): any {

    if(search == undefined){
      return productos;
    } else{
      return productos.filter( producto=>{
        return producto.nombreProveedor.toLowerCase().includes(search.toLowerCase())
      })
    }
  }

}
