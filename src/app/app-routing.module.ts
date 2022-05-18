import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainTemplateComponent } from './core/main-template/main-template.component';

const routes: Routes = [
  {
    path: '',
    component: MainTemplateComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./films/films.module').then(({FilmsModule}) => FilmsModule)
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
