import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { FilmsComponent } from './films.component';


const routes: Routes = [
  {
    path: '',
    component: FilmsComponent,
  },
  {
    path: 'film/:id',
    component: FilmDetailsComponent,
  },
  {
    path: 'character/:id',
    component: CharacterDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmsRoutingModule {}
