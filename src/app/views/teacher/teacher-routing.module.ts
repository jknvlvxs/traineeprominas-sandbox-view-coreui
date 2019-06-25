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
        path: 'create',
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
        path: 'update/:id',
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
