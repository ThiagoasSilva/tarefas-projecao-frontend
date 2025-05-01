import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Curso } from '../../../models/curso';

@Component({
  selector: 'app-cursoslist',
  imports: [RouterLink],
  templateUrl: './cursoslist.component.html',
  styleUrl: './cursoslist.component.scss'
})
export class CursoslistComponent {
  lista: Curso[] = [];
constructor() {
    this.lista.push(new Curso(1, "Curso 1", 1, "Descrição do curso 1"));
    this.lista.push(new Curso(2, "Curso 2", 1, "Descrição do curso 2"));
    this.lista.push(new Curso(3, "Curso 3", 1, "Descrição do curso 3"));
}

  deletar(){
    //
  }

}
