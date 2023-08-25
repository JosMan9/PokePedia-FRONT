import { Component, OnInit } from '@angular/core';
import { Pokedex } from '../models/pokedexes/pokedex.mode';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { PokemonService } from '../services/pokemonService.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-pokedexes',
  templateUrl: './pokedexes.component.html',
  styleUrls: ['./pokedexes.component.scss']
})
export class PokedexesComponent implements OnInit {
  pokedexes?: Pokedex[] = [];
  namesApi?: NamedAPIResourceList;
  descripciones: string[] = [];

  constructor(private prokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokedexes();
    console.log("descripciones", this.descripciones);
    //this.getDescripciones();
  }

  getPokedexes() {
    this.prokemonService.getPokedexes().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesApi = results;
        console.log("resultados", results);
        this.getPokedexAll();
        return results;
      })
    ).subscribe((r: NamedAPIResourceList) => { })
    this.getDescripciones();
  }

  getPokedexAll() {
    if (this.namesApi != undefined) {
      for (let i = 0; i <= this.namesApi.results.length; i++) {
        this.getPokedexInd((i + 1).toString());
        if (this.pokedexes != undefined) {

        }
      }
    }
  }

  getPokedexInd(id: string) {
    this.prokemonService.getPokedex(id).pipe(
      map((pokedex: Pokedex) => {
        for (let i = 0; i < pokedex.descriptions.length; i++) {
          if (pokedex.descriptions[i].language.name.localeCompare("en") !== 0) {
            pokedex.descriptions.splice(i,1);
          }
        }

         pokedex.descriptions.sort((a,b) => b.language.name.localeCompare(a.language.name));
        this.pokedexes?.push(pokedex);
        this.pokedexes?.sort((a, b) => a.id - b.id);
        console.log(pokedex);
        return pokedex;
      })
    ).subscribe((pok: Pokedex) => {
    })
  }

  getDescripciones() {
    if (this.pokedexes != null) {
      for (let i = 0; i < this.pokedexes.length; i++) {
        for(let j = 0; j < this.pokedexes[i].descriptions.length; j++) {
          if(this.pokedexes[i].descriptions[j].language.name == "en") {
            this.descripciones.push(this.pokedexes[i].descriptions[j].description);
            console.log(this.pokedexes[i].descriptions[j].description)
          }
        }
      }
    }

  }

}
