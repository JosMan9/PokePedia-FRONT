import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemonService.service';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { Berry } from '../models/berries/berry.model';
import { map } from 'rxjs';
import { Item } from '../models/item/item.model';

@Component({
  selector: 'app-bayas',
  templateUrl: './bayas.component.html',
  styleUrls: ['./bayas.component.scss']
})
export class BayasComponent implements OnInit {
  berries?: Berry[] = []
  namesApi?: NamedAPIResourceList;
  berry?: Berry;
  items?: Item[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getListBerires();
    console.log("my berries", this.berries);
    console.log("my items", this.items);
  }

  getListBerires() {
    this.pokemonService.getBerries().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesApi = results;
        return this.namesApi;
      })
    ).subscribe((data: NamedAPIResourceList) => {
      console.log("mi data de berries", data);
      this.getAllBerries();
    })
  }

  getAllBerries() {
    if (this.namesApi != undefined) {
      for (let i = 0; i < this.namesApi.results.length; i++) {
        this.getBerryInd((i+1).toString());
      }
    }
  }

  getBerryInd(id: string) {
    this.pokemonService.getBerry(id).pipe(
      map((berry: Berry) => {
        this.berries?.push(berry);
        console.log("berry", berry)
        this.berries?.sort((a,b) => a.id - b.id);
        this.getItemInd(`${berry.name}-berry`);
        return berry;
      })
    ).subscribe((b: Berry) => {})
  }

  getItemInd(id:string) {
    this.pokemonService.getItem(id).pipe(
      map((item: Item) => {
        this.items?.push(item);
        console.log("item", item);
        return item;
      })
    ).subscribe((i: Item) =>{})
  }

}
