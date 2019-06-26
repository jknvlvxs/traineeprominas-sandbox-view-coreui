import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './create.component';
import { CoursesComponent } from './courses.component';
import { CourseIdComponent } from './courseid.component';
import { UpdateComponent } from './update.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Cursos'
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
        component: CoursesComponent,
        data: {
          title: ''
        }
      },
      {
        path: ':id',
        component: CourseIdComponent,
        data: {
          title: 'Curso'
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
export class CourseRoutingModule {}
