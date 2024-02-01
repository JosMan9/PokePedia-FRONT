import { Component, OnInit } from '@angular/core';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { MoveTarget } from '../models/moveTargets/moveTarget.model';
import { PokemonService } from '../services/pokemonService.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-move-target',
  templateUrl: './move-target.component.html',
  styleUrls: ['./move-target.component.scss']
})
export class MoveTargetComponent implements OnInit {
  namesApi?: NamedAPIResourceList;
  targets?: MoveTarget[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getTargets();
  }

  getTargets(){
    this.pokemonService.getMoveTargets().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesApi = results;
        this.getTargetAll();
        return results;
      })
    ).subscribe((r: NamedAPIResourceList) => {})
  }
  getTargetAll() {
    if(this.namesApi != undefined) {
      for(let i = 0; i < this.namesApi.results.length; i++) {
        this.getTargetInd((i+1).toString());
      }
    }
  }
  getTargetInd(id: string) {
    this.pokemonService.getMoveTarget(id).pipe(
      map((t: MoveTarget) => {
        this.targets?.push(t);
        this.targets?.sort((a,b) => a.id - b.id);
        return t;
      })
    ).subscribe((target: MoveTarget) => {})
  }



}
