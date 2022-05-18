import { Component, OnInit } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { Utils } from '../shared/helpers/utils';
import { IWrapperFilmResponse } from '../shared/interfaces/wrapper-film';

import { StarWarService } from '../shared/services/micro-services/starwar-service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films: any[] = [];
  constructor(
    private starWarService: StarWarService,
  ) {}

  ngOnInit() {
    this.loadFilms();
  }

  private loadFilms()  {
    this.starWarService.getFilms()
      .pipe(
        tap((res: IWrapperFilmResponse) =>  {
          this.films = res.results.map( (x: any) => {
            x.id = Utils.getIdFromUrl(x.url);
            return x;
          });
          this.films = Utils.sortByProperty(this.films, 'episode_id')
        }),
        catchError(async (err) => console.log(err)),
      )
      .subscribe();
  }


}
