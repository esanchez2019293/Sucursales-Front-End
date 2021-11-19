import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../modelos/producto.modelo';
import { GLOBAL } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public ruta;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token;
  public identidad;

  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
  }

  agregarProducto(producto: Producto): Observable<any>{
    let params = JSON.stringify(producto);

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.post(this.ruta + 'AgregarProducto', params, {headers: headersToken})
  }

  obtenerProductos(): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.get(this.ruta + 'getProducto', {headers: headersToken})
  }

  obtenerProductosID(id: String): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.get(this.ruta + 'getProductoID/' + id, {headers: headersToken})
  }

  editarProducto(producto: Producto): Observable<any>{
    let params = JSON.stringify(producto);

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.put(this.ruta + 'updateProducto/' + producto._id, params, {headers: headersToken})
  }

  eliminarProducto(id: String): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.delete(this.ruta + 'DeleteProducto/' + id, {headers: headersToken})

  }

  ordenarAscendente(): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.get(this.ruta + 'ordenarAscendente', {headers: headersToken});
  }

  ordenarDescendente(): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.get(this.ruta + 'ordenarDescendente', {headers: headersToken});
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
