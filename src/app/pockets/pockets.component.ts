import { Component, OnInit } from '@angular/core';
import { ItemPocket } from '../models/itemPokeckets/itemPocket.model';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { PokemonService } from '../services/pokemonService.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-pockets',
  templateUrl: './pockets.component.html',
  styleUrls: ['./pockets.component.scss']
})
export class PocketsComponent implements OnInit {
  pockets?: ItemPocket[] = [];
  namesApi?: NamedAPIResourceList;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getBolsillos();
  }

  getBolsillos() {
    this.pokemonService.getItemPockets().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesApi = results;
        console.log(this.namesApi);
        this.getBolsillosAll();
        return results;
      })
    ).subscribe((r: NamedAPIResourceList) =>{})
  }

  getBolsillosAll() {
    if(this.namesApi != undefined) {
      for(let i = 0; i < this.namesApi.results.length; i++) {
        this.getBolsilloInd((i+1).toString());
      }
    }
  }

  getBolsilloInd(id: string) {
    this.pokemonService.getItemPocket(id).pipe(
      map((pocket: ItemPocket) => {
        this.pockets?.push(pocket);
        this.pockets?.sort((a,b) => a.id - b.id);
        console.log("bolsillo", pocket);
        return pocket;
      })
    ).subscribe((p: ItemPocket) => {})
  }

}
