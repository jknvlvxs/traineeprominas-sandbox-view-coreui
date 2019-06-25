import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './create.component';
import { StudentsComponent } from './students.component';
import { StudentIdComponent } from './studentid.component';
import { UpdateComponent } from './update.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Estudantes'
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
        component: StudentsComponent,
        data: {
          title: ''
        }
      },
      {
        path: ':id',
        component: StudentIdComponent,
        data: {
          title: 'Estudante'
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
export class StudentRoutingModule {}
