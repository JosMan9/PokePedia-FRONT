import { Component, OnInit } from '@angular/core';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { EggGroup } from '../models/egggroups/egggroup.model';
import { PokemonService } from '../services/pokemonService.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-egg-groups',
  templateUrl: './egg-groups.component.html',
  styleUrls: ['./egg-groups.component.scss']
})
export class EggGroupsComponent implements OnInit {

  namesApi?: NamedAPIResourceList;
  gruposHuevo?: EggGroup[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups() {
    this.pokemonService.getEggGroups().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesApi = results;
        this.getGroupAll();
        return results;
      })
    ).subscribe((r: NamedAPIResourceList) => {})
  }
  getGroupAll() {
    if(this.namesApi != undefined) {
      for(let i = 0; i < this.namesApi.results.length; i++) {
        this.getGroupInd((i+1).toString());
      }
    }
  }
  getGroupInd(id: string) {
    this.pokemonService.getEggGroup(id).pipe(
      map((grupo: EggGroup) => {
        this.gruposHuevo?.push(grupo);
        this.gruposHuevo?.sort((a,b) => a.id - b.id);
        return grupo;
      })
    ).subscribe((g: EggGroup) => {})
  }

}
