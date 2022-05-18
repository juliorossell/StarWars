import { IFilm } from "./film";

export interface IWrapperFilmResponse {
  count: number;
  next: string;
  previous: string;
  results: IFilm[],
}
