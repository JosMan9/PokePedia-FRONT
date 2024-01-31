import { Component, OnInit } from '@angular/core';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { MoveAilment } from '../models/moveAliments/moveAliment.model';
import { PokemonService } from '../services/pokemonService.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-move-ailment',
  templateUrl: './move-ailment.component.html',
  styleUrls: ['./move-ailment.component.scss']
})
export class MoveAilmentComponent implements OnInit {
  namesApi?: NamedAPIResourceList;
  ailments?: MoveAilment[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getAilments();
  }

  getAilments() {
    this.pokemonService.getMoveAilments().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesApi = results;
        this.getAilmentAll();
        return results;
      })
    ).subscribe((r: NamedAPIResourceList) => {})
  }

  getAilmentAll() {
    if(this.namesApi != undefined) {
      for(let i = 0; i < this.namesApi.results.length; i++) {
        this.getAilmentInd((i+1).toString());
      }
    }
  }

  getAilmentInd(id: string) {
    this.pokemonService.getMoveAliment(id).pipe(
      map((ail: MoveAilment) => {
        this.ailments?.push(ail);
        this.ailments?.sort((a,b) => a.id - b.id);
        return ail;
      })
    ).subscribe((a: MoveAilment) => {})
  }

}
