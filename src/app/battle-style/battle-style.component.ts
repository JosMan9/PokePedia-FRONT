import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemonService.service';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { MoveBattleStyle } from '../models/moveBattleStyles/moveBattleStyle.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-battle-style',
  templateUrl: './battle-style.component.html',
  styleUrls: ['./battle-style.component.scss']
})
export class BattleStyleComponent implements OnInit {
  namesApi?: NamedAPIResourceList;
  styles?: MoveBattleStyle[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getStyles();
  }

  getStyles() {
    this.pokemonService.getMoveBattleStyles().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesApi = results;
       // console.log(this.namesApi);
        this.getStyleAll();
        return results;
      })
    ).subscribe((r: NamedAPIResourceList) => {})
  }
  getStyleAll() {
    if(this.namesApi != undefined) {
      for(let i = 0; i < this.namesApi.results.length; i++) {
        this.getBattleInd((i+1).toString());
        //console.log(this.getBattleInd((i+1).toString()));
      }
    }
  }
  getBattleInd(id: string) {
    this.pokemonService.getMoveBattleStyle(id).pipe(
      map((move: MoveBattleStyle) => {
      //  console.log(move);
        this.styles?.push(move);
        this.styles?.sort((a,b) => a.id - b.id);
        return move;
      })
    ).subscribe((a: MoveBattleStyle) => {});
  }

}
