import { Component } from '@angular/core';
import { Tarefa } from '../../../models/tarefa';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tarefaslist',
  imports: [RouterLink],
  templateUrl: './tarefaslist.component.html',
  styleUrl: './tarefaslist.component.scss'
})
export class TarefaslistComponent {

  lista: Tarefa[] = [];
tarefa: any;
  constructor() {
    this.lista.push(new Tarefa(1, 1, "Tarefa 1", "Descrição da tarefa 1", "Disciplina 1"));
    this.lista.push(new Tarefa(2, 2, "Tarefa 2", "Descrição da tarefa 2", "Disciplina 2"));
    this.lista.push(new Tarefa(3, 3, "Tarefa 3", "Descrição da tarefa 3", "Disciplina 3"));
  }

  deletar(){
    //
  }
}
