import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item/item.model';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { PokemonService } from '../services/pokemonService.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items?: Item[] = [];
  namesApi?: NamedAPIResourceList;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems() {
    this.pokemonService.getItems().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesApi = results;
        console.log("resultados", this.namesApi);
        this.getItemsAll();
        return results;
      })
    ).subscribe((r: NamedAPIResourceList) => {})
  }

  getItemsAll() {
    if(this.namesApi?.results != undefined) {
      for(let i = 0; i < this.namesApi.results.length; i++) {
        this.getItemInd((i+1).toString());
      }
    }
  }

  getItemInd(id: string) {
    this.pokemonService.getItem(id).pipe(
      map((item: Item) => {
        this.items?.push(item);
        this.items?.sort((a,b) => a.id - b.id);
        console.log("item", item);
        return item;
      })
    ).subscribe((i: Item) => {})
  }

}
