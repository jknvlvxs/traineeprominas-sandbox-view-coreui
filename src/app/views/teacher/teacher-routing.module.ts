import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './create.component';
import { TeachersComponent } from './teachers.component';
import { TeacherIdComponent } from './teacherid.component';
import { UpdateComponent } from './update.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Professores'
    },
    children: [
      {
        path: 'novo',
        component: CreateComponent,
        data: {
          title: 'Novo'
        }
      },
      {
        path: '',
        component: TeachersComponent,
        data: {
          title: ''
        }
      },
      {
        path: ':id',
        component: TeacherIdComponent,
        data: {
          title: 'Professor'
        }
      },
      {
        path: 'editar/:id',
        component: UpdateComponent,
        data: {
          title: 'Editar'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule {}
