import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'

import { FilmsComponent } from './films.component';
import { CardModule } from '../shared/components/card/card.module';
import { FilmsRoutingModule } from './films-routing';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FilmsRoutingModule,
    CardModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [FilmsComponent, FilmDetailsComponent, CharacterDetailComponent]
})
export class FilmsModule { }
