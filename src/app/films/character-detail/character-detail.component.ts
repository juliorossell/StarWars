import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, tap } from 'rxjs';

import { Utils } from 'src/app/shared/helpers/utils';
import { ICharacter } from 'src/app/shared/interfaces/character';
import { StarWarService } from 'src/app/shared/services/micro-services/starwar-service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  characterId!: number;
  character!: ICharacter;
  constructor(
    private actRoute: ActivatedRoute,
    private starWarService: StarWarService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.characterId = this.actRoute.snapshot.params['id'];
    this.loadCharacterById(this.characterId);
  }

  onBack() {
    const filmId = sessionStorage.getItem('filmId');
    this.router.navigate(['film', filmId])
  }

  private loadCharacterById(id: number)  {
    this.starWarService.getCharacterById(id)
      .pipe(
        tap((res: any) => {
          this.character =  { ...res };
          this.character.id = Utils.getIdFromUrl(this.character.url);
        }),
        catchError(async (err) => console.log(err)),
      )
      .subscribe();
  }

}
