import { Component, OnInit } from '@angular/core';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { MoveLearnMethod } from '../models/moveLearnMethods/moveLearnMethos.model';
import { PokemonService } from '../services/pokemonService.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-move-learn-methods',
  templateUrl: './move-learn-methods.component.html',
  styleUrls: ['./move-learn-methods.component.scss']
})
export class MoveLearnMethodsComponent implements OnInit {
  namesApi?: NamedAPIResourceList;
  metodos?: MoveLearnMethod[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getMethods();
  }

  getMethods() {
    this.pokemonService.getMoveLearnMethods().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesApi = results;
        this.getMethodAll();
        return results;
      })
    ).subscribe((r: NamedAPIResourceList) => {})
  }

  getMethodAll() {
    if(this.namesApi != undefined) {
      for(let i = 0; i < this.namesApi.results.length; i++) {
        this.geMethodInd((i+1).toString());
      }
    }
  }
  geMethodInd(id: string) {
    this.pokemonService.getMoveLearnMethod(id).pipe(
      map((move: MoveLearnMethod) => {
        this.metodos?.push(move);
        console.log(move);
        this.metodos?.sort((a,b) => a.id - b.id);
        return move;
      })
    ).subscribe((m: MoveLearnMethod) => {})
  }

}
