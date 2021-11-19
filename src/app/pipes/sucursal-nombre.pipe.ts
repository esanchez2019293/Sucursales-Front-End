import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sucursalNombre'
})
export class SucursalNombrePipe implements PipeTransform {

  transform(sucursales: any, search: any): any {

    if(search == undefined){
      return sucursales;
    } else{
      return sucursales.filter( sucursal=>{
        return sucursal.nombre.toLowerCase().includes(search.toLowerCase())
      })
    }
  }

}
