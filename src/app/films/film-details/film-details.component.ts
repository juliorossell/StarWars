import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Utils } from 'src/app/shared/helpers/utils';
import { ICharacter } from 'src/app/shared/interfaces/character';
import { IFilm } from 'src/app/shared/interfaces/film';
import { StarWarService } from 'src/app/shared/services/micro-services/starwar-service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  filmDetail!: IFilm;
  characters!: ICharacter[];
  filmId!: string;
  constructor(
    private actRoute: ActivatedRoute,
    private starWarService: StarWarService,
  ) {}

  ngOnInit() {
    this.filmId = this.actRoute.snapshot.params['id'];
    this.loadFilmById(this.filmId);
  }

  private loadFilmById(id: string)  {
    this.starWarService.getFilmById(id)
      .pipe(
        tap((res: IFilm) =>  this.filmDetail = res),
        tap(() => this.starWarService.setFilmSelected(this.filmId)),
        map(() => this.createHttpObservable()),
        mergeMap((observables: any) => {
          return forkJoin(observables).pipe(
            tap((res: any) => {
              this.characters = res.map( (x: ICharacter) => {
                x.id = Utils.getIdFromUrl(x.url);
                return x;
              });
            }),
            catchError(async (err) => console.log(err)),
          )
        })
      )
      .subscribe();

  }

 createHttpObservable() {
  return this.filmDetail.characters?.map(x => this.starWarService.getCharacterByUrl(x))
 }


}
