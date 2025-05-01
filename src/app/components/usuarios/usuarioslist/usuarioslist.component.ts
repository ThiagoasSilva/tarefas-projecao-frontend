import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Usuario } from '../../../models/usuario';


@Component({
  selector: 'app-usuarioslist',
  imports: [RouterLink],
  templateUrl: './usuarioslist.component.html',
  styleUrl: './usuarioslist.component.scss'
})
export class UsuarioslistComponent {

  lista: Usuario[] = [];
  usuario: any;
  constructor() {
    this.lista.push(new Usuario(1, "Usuario 1", "12345678901", "Riacho Fundo Rua 1", "61 912345678"));
    this.lista.push(new Usuario(2, "Usuario 2", "12345678902", "Taguatinga Rua 2", "61 923456789"));
    this.lista.push(new Usuario(3, "Usuario 3", "12345678903", "Ceilândia Rua 3", "61 934567890"));
    }
    deletar(){
      //
    }
}
