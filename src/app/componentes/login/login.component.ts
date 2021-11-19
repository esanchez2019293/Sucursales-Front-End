import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/servicios/empresa.service';
import { Admin } from 'src/app/modelos/admin.modelo';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [EmpresaService]
})
export class LoginComponent implements OnInit {

  public empresaModel: Admin;
  public token;
  public identidad;

  constructor(private _empresaService: EmpresaService,
    private _router: Router) {
      this.empresaModel = new Admin('','','')
    }

  ngOnInit(): void {
  }

  obtenertoken(){
    this._empresaService.login(this.empresaModel, 'true').subscribe(
      response =>{
        this.token = response.token;
        localStorage.setItem('token', this.token);
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

  login(){
    this._empresaService.login(this.empresaModel).subscribe(
      response => {
        this.identidad = response.usuarioEncontrado;
        localStorage.setItem('identidad',JSON.stringify(this.identidad));
        this.obtenertoken();
        Swal.fire({
          icon: 'success',
          title: '!OK!',
          text: 'Binvenido a la application ' + [this.empresaModel.usuario]
        })
          this._router.navigate(['/inicio'])
      },
        error => {
          Swal.fire ({
            icon: 'error',
            title: '!Lo sentimos no se ha podido ingresar'
          })
        }
    )
  }
}
