import { Component, OnInit } from '@angular/core';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { Characteristic } from '../models/characteristics/characteristic.model';
import { PokemonService } from '../services/pokemonService.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss']
})
export class CharacteristicsComponent implements OnInit {
  namesApi?: NamedAPIResourceList;
  caracteristicas: Characteristic[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getCharacteristics();
  }

  getCharacteristics() {
    this.pokemonService.getCharacteristics().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesApi = results;
        this.getCharactrisAll();
        return results;
      })
    ).subscribe((r: NamedAPIResourceList) => {});
  }
  getCharactrisAll() {
    if(this.namesApi != undefined) {
      for(let i = 0; i < this.namesApi.results.length; i++) {
        this.getCharInd((i+1).toString());
      }
    }
  }
  getCharInd(id: string) {
    this.pokemonService.getCharacteristic(id).pipe(
      map((c: Characteristic) => {
        this.caracteristicas.push(c);
        this.caracteristicas.sort((a,b) => a.id - b.id);
        return c;
      })
    ).subscribe((char: Characteristic) => {})
  }

}
