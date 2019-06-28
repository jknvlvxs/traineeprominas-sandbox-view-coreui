import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'logout',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [AuthGuard],
    children: []
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Início'
    },
    children: [
      {
        path: 'usuario',
        loadChildren: () => import('./views/user/user.module').then(m => m.UserModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'professor',
        loadChildren: () => import('./views/teacher/teacher.module').then(m => m.TeacherModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'curso',
        loadChildren: () => import('./views/course/course.module').then(m => m.CourseModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'estudante',
        loadChildren: () => import('./views/student/student.module').then(m => m.StudentModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'graficos',
        loadChildren: () => import('./views/graficos/graficos.module').then(m => m.GraficosModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
      }
      // {
      //   path: 'user',
      //   loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      // },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
