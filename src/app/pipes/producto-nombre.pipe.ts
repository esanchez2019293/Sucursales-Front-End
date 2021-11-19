import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productoNombre'
})
export class ProductoNombrePipe implements PipeTransform {

  transform(productos: any, search: any): any {

    if(search == undefined){
      return productos;
    } else{
      return productos.filter( producto=>{
        return producto.nombreProducto.toLowerCase().includes(search.toLowerCase())
      })
    }
  }

}
