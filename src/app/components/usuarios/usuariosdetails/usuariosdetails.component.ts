import { Usuario } from './../../../models/usuario';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-usuariosdetails',
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './usuariosdetails.component.html',
  styleUrl: './usuariosdetails.component.scss'
})
export class UsuariosdetailsComponent {

  usuario: Usuario = new Usuario(0, "Default Name", "Default Email", "Default Password", "Default Role");

  salvar(){
    //
  }

}
