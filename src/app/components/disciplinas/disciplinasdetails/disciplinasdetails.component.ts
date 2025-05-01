import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Disciplina } from './../../../models/disciplina';
import { Component } from '@angular/core';

@Component({
  selector: 'app-disciplinasdetails',
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './disciplinasdetails.component.html',
  styleUrl: './disciplinasdetails.component.scss'
})
export class DisciplinasdetailsComponent {
  disciplina: Disciplina = new Disciplina(0, "Default Name", "Default Description", "Default Professor", 1);

  salvar() {
    //
  }
}
