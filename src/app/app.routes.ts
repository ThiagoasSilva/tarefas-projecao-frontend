import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { TarefaslistComponent } from './components/tarefas/tarefaslist/tarefaslist.component';
import { TarefasdetailsComponent } from './components/tarefas/tarefasdetails/tarefasdetails.component';
import { UsuarioslistComponent } from './components/usuarios/usuarioslist/usuarioslist.component';
import { UsuariosdetailsComponent } from './components/usuarios/usuariosdetails/usuariosdetails.component';
import { CursosdetailsComponent } from './components/cursos/cursosdetails/cursosdetails.component';
import { CursoslistComponent } from './components/cursos/cursoslist/cursoslist.component';
import { DisciplinasdetailsComponent } from './components/disciplinas/disciplinasdetails/disciplinasdetails.component';
import { DisciplinaslistComponent } from './components/disciplinas/disciplinaslist/disciplinaslist.component';


export const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "admin", component: PrincipalComponent, children:[
    {path: "tarefas", component: TarefaslistComponent},
    {path: "tarefas/new", component: TarefasdetailsComponent},
    {path: "tarefas/edit/:id", component:TarefasdetailsComponent},
    {path: "usuarios", component: UsuarioslistComponent},
    {path: "usuarios/new", component: UsuariosdetailsComponent},
    {path: "usuarios/edit/:id", component:UsuariosdetailsComponent},
    {path: "cursos", component: CursoslistComponent},
    {path: "cursos/new", component: CursosdetailsComponent},
    {path: "cursos/edit/:id", component:CursosdetailsComponent},
    {path: "disciplinas", component: DisciplinaslistComponent},
    {path: "disciplinas/new", component: DisciplinasdetailsComponent},
    {path: "disciplinas/edit/:id", component:DisciplinasdetailsComponent},
  ]}
];
