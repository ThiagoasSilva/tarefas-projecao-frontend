import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Tarefa } from '../../../models/tarefa';

@Component({
  selector: 'app-tarefasdetails',
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './tarefasdetails.component.html',
  styleUrl: './tarefasdetails.component.scss'
})
export class TarefasdetailsComponent {

  tarefa: Tarefa = new Tarefa(0, 1, "Default Name", "Default Description", "Default Discipline");

  salvar(){
    //
  }

}
