import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './create.component';
import { UsersComponent } from './users.component';
import { UserIdComponent } from './userid.component';
import { UpdateComponent } from './update.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Usuários'
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
        component: UsersComponent,
        data: {
          title: ''
        }
      },
      {
        path: ':id',
        component: UserIdComponent,
        data: {
          title: 'Usuário'
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
export class UserRoutingModule {}
