
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

import { environment } from 'src/environments/environment';
import { ICharacter } from '../../interfaces/character';
import { IFilm } from '../../interfaces/film';
import { IWrapperFilmResponse } from '../../interfaces/wrapper-film';

@Injectable({
  providedIn: 'root',
})
export class StarWarService {
  constructor(private httpClient: HttpClient) {}

  getFilms() : Observable<IWrapperFilmResponse> {
    const url = `${environment.STARWARAPI}films`;
    const headers = new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/json',
    });
    return this.httpClient
      .get<IWrapperFilmResponse>(url, { headers });
  }

  getFilmById(filmId: string) : Observable<IFilm> {
    const url = `${environment.STARWARAPI}films/${filmId}`;
    const headers = new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/json',
    });
    return this.httpClient
      .get<IFilm>(url, { headers });
  }

  getCharacterByUrl(url: string) : Observable<ICharacter> {
    const headers = new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/json',
    });
    return this.httpClient
      .get<ICharacter>(url, { headers });
  }

  getCharacterById(characterId: number) : Observable<ICharacter> {
    const url = `${environment.STARWARAPI}people/${characterId}`;
    const headers = new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/json',
    });
    return this.httpClient
      .get<ICharacter>(url, { headers });
  }

  setFilmSelected(filmId: string) {
    sessionStorage.setItem('filmId', filmId);
  }





}
