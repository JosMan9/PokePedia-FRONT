import { Component, OnInit } from '@angular/core';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { Ability } from '../models/abilities/ability.model';
import { PokemonService } from '../services/pokemonService.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss']
})
export class AbilitiesComponent implements OnInit {
  namesApi?: NamedAPIResourceList;
  habilidades?: Ability[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getAbilities();
  }

  getAbilities() {
    this.pokemonService.getAbilities().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesApi = results;
        this.getAbilityAll();
        return results;
      })
    ).subscribe((r: NamedAPIResourceList) => {})
  }
  getAbilityAll() {
    if(this.namesApi != undefined) {
      for(let i = 0; i < this.namesApi.results.length; i++) {
        this.getAbilityInd((i+1).toString());
      }
    }
  }
  getAbilityInd(id: string) {
    this.pokemonService.getAbility(id).pipe(
      map((a: Ability) => {
        this.habilidades?.push(a);
        this.habilidades?.sort((a,b) => a.id - b.id);
        return a;
      })
    ).subscribe((ability: Ability) => {})
  }

}
