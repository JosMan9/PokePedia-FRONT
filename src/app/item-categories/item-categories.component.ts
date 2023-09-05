import { Component, OnInit } from '@angular/core';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { ItemCategory } from '../models/itemCategories/itemCategory.model';
import { PokemonService } from '../services/pokemonService.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-item-categories',
  templateUrl: './item-categories.component.html',
  styleUrls: ['./item-categories.component.scss']
})
export class ItemCategoriesComponent implements OnInit {
  namesApi?: NamedAPIResourceList;
  categorias?: ItemCategory[] = [];

  constructor(private PokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias() {
    this.PokemonService.getItemCategories().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesApi = results;
        console.log("results", this.namesApi);
        this.getCategoriasAll();
        return results;
      })
    ).subscribe((r: NamedAPIResourceList) => {})
  }

  getCategoriasAll() {
    if(this.namesApi != undefined) {
      for(let i = 0; i < this.namesApi.results.length; i++) {
        this.getCategoriaInd((i+1).toString());
      }
    }
  }

  getCategoriaInd(id: string) {
    this.PokemonService.getItemCategory(id).pipe(
      map((categoria: ItemCategory) => {
        this.categorias?.push(categoria);
        this.categorias?.sort((a,b) => a.id - b.id);
        console.log("categoria", categoria);
        return categoria;
      })
    ).subscribe((cat: ItemCategory) => {})
  }

}
