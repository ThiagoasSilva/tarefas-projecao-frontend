import { Component } from '@angular/core';
import { Disciplina } from '../../../models/disciplina';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-disciplinaslist',
  imports: [RouterLink],
  templateUrl: './disciplinaslist.component.html',
  styleUrl: './disciplinaslist.component.scss'
})
export class DisciplinaslistComponent {

lista: Disciplina[] = [];
  constructor() {
    this.lista.push(new Disciplina(1, "Disciplina 1", "Professor 1", "08:00 - 10:00", 101));
    this.lista.push(new Disciplina(2, "Disciplina 2", "Professor 2", "10:00 - 12:00", 102));
    this.lista.push(new Disciplina(3, "Disciplina 3", "Professor 3", "14:00 - 16:00", 103));
}

deletar(){
  //
  }

}
