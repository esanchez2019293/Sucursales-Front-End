import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sucursal } from '../modelos/sucursal.modelo';
import { GLOBAL } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  public ruta;
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token;
  public identidad;

  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url
  }

  agregarSucursal(sucursal: Sucursal): Observable<any>{
    let params = JSON.stringify(sucursal);

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.post(this.ruta + 'AgregarSucursal', params, {headers: headersToken});
  }

  obtenerSucursal(): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.get(this.ruta + 'getSucursal', {headers: headersToken});
  }

  obtenerSucursalID(id: string): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.get(this.ruta + 'getSucursalID/' + id, {headers: headersToken});
  }

  editarSucursal(sucursal: Sucursal): Observable<any>{
    let params = JSON.stringify(sucursal);

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.put(this.ruta + 'UpdateSucursal/' + sucursal._id, params, {headers: headersToken});
  }

  eliminarSucursal(id: String): Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', this.obtenerToken());

    return this._http.delete(this.ruta + 'RemoveSucursal/' + id, {headers: headersToken});
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
