import { Component, OnInit } from '@angular/core';
import { ScriptsService } from 'src/app/servicios/scripts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private _Scripts: ScriptsService) {

    _Scripts.Carga(["navbar/navbar"])
  }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    Swal.fire({
      icon: 'success',
      title: '!Finish!',
      text: 'Su sesión se ha cerrado correctamente'
    })
  }

}
