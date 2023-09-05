import { Component, OnInit } from '@angular/core';
import { ItemFlingEffect } from '../models/itemFlingEffects/itemFlingEffect.model';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { PokemonService } from '../services/pokemonService.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-item-effects',
  templateUrl: './item-effects.component.html',
  styleUrls: ['./item-effects.component.scss']
})
export class ItemEffectsComponent implements OnInit {
  efectos?: ItemFlingEffect[] = [];
  nameApi?:  NamedAPIResourceList;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getEfectos();
  }

  getEfectos() {
    this.pokemonService.getItemFlingEffects().pipe(
      map((results: NamedAPIResourceList) => {
        this.nameApi = results;
        console.log("resultados", results);
        this.getEfectosAll();
        return results;
      })
    ).subscribe((r: NamedAPIResourceList) => {})
  }

  getEfectosAll() {
    if(this.nameApi != undefined) {
      for(let i = 0; i < this.nameApi.results.length; i++) {
        this.getEfectosInd((i+1).toString())
      }
    }
  }

  getEfectosInd(id: string) {
    this.pokemonService.getItemFliingEffect(id).pipe(
      map((efecto: ItemFlingEffect) => {
        this.efectos?.push(efecto);
        this.efectos?.sort((a,b) => a.id - b.id);
        console.log("efecto", efecto);
        return efecto;
      })
    ).subscribe((e: ItemFlingEffect) => {})
  }

}
