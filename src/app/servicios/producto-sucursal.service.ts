import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoSucursal } from '../modelos/producto-sucursal.modelo';
import { GLOBAL } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoSucursalService {

  public ruta;
  public headersVariable = new HttpHeaders().set('Content-Type','application/json');
  public token;
  public identidad;

  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
  }

  AgregarProductoSucursal(productoSucursal: ProductoSucursal): Observable<any>{

    let params = JSON.stringify(productoSucursal);

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.post(this.ruta + 'agregarProductoSucursal', params, {headers: headersToken})
  }

  ObtenerProductoSucursal(): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.get(this.ruta + 'obtenerProductoSucursal', {headers: headersToken});
  }

  ObtenerProductoSucursalID(id: String): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.get(this.ruta + 'obtenerProductoSucursalId/' + id, {headers: headersToken});
  }

  VenderProducto(venta: ProductoSucursal):Observable<any>{
    let params = JSON.stringify(venta);

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.put(this.ruta + 'venderProducto/' + venta._id, params, {headers: headersToken});
  }

  obtenerToken(){
    var token2 = localStorage.getItem('token')

    if(token2 != 'undefined'){
      this.token = token2;
    } else {
      this.token = null;
    }

    return this.token
  }
}
