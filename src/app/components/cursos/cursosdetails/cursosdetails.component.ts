import { Curso } from './../../../models/curso';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@Component({
  selector: 'app-cursosdetails',
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './cursosdetails.component.html',
  styleUrl: './cursosdetails.component.scss'
})
export class CursosdetailsComponent {

  curso: Curso = new Curso(0, "Default Name", 1, "Default Description");

  salvar(){
    //
  }
}
