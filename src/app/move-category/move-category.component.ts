import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemonService.service';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { MoveCateogory } from '../models/moveCategories/moveCategory.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-move-category',
  templateUrl: './move-category.component.html',
  styleUrls: ['./move-category.component.scss']
})
export class MoveCategoryComponent implements OnInit {
  namesApi?: NamedAPIResourceList;
  categorias?: MoveCateogory[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.pokemonService.getMoveCategories().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesApi = results;
        this.getCategoryAll();
        return results;
      })
    ).subscribe((r: NamedAPIResourceList) => {})
  }
  getCategoryAll() {
    if(this.namesApi != undefined) {
      for(let i = 0; i < this.namesApi.results.length; i++) {
        this.getCategoryInd((i+1).toString());
      }
    }
  }
  getCategoryInd(id: string) {
    this.pokemonService.getMoveCategory(id).pipe(
      map((cat: MoveCateogory) => {
        this.categorias?.push(cat);
        this.categorias?.sort((a,b) => a.id - b.id);
        return cat;
      })
    ).subscribe((a: MoveCateogory) => {})
  }

}
