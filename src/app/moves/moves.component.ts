import { Component, OnInit } from '@angular/core';
import { Move } from '../models/moves/move.model';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { PokemonService } from '../services/pokemonService.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.scss']
})
export class MovesComponent implements OnInit {
  moves?: Move[] = [];
  namesApi?: NamedAPIResourceList;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getMoves();
  }

  getMoves() {
    this.pokemonService.getMoves().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesApi = results;
        this.getMoveAll();
        return results;
      })
    ).subscribe((r: NamedAPIResourceList) => {})
  }
  getMoveAll() {
    if(this.namesApi != undefined) {
      for(let i = 1; i < this.namesApi.results.length; i++) {
        this.getMoveInd(i.toString());
      }
    }
  }
  getMoveInd(id: string) {
    this.pokemonService.getMove(id).pipe(
      map((move: Move) => {
        this.moves?.push(move);
        this.moves?.sort((a,b) => a.id - b.id);
        return move;
      })
    ).subscribe((m: Move) => {})
  }

}
