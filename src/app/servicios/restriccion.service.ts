import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { EmpresaService } from './empresa.service';

@Injectable({
  providedIn: 'root'
})
export class RestriccionService implements CanActivate{

  constructor( private _router: Router, private _empresaService: EmpresaService){ }

    canActivate(){
      let identity = this._empresaService.obtenerIdentidad();
      if(identity && (identity.rol === 'Admin')){
        return true;
      } else {
        this._router.navigate(['/login']);
        return false;
      }
    }

}


