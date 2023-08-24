import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemonService.service';
import { Pokemon } from '../models/pokemon/pokemon.model';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { Berry } from '../models/berries/berry.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html',
  styleUrls: ['./pokemon-component.component.scss'],
})
export class PokemonComponentComponent implements OnInit {
  pokemon?: Pokemon[] = [];
  namesApi?: NamedAPIResourceList;
  berry?: Berry;
  descripciones?: string[] = [];


  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.getListPokemon();
    //nthis.pokemon?.sort((a,b) => a.id - b.id);
    console.log("arrayAAAA", this.pokemon);
  }


  getListPokemon() {

    let resultados = [];
    this.pokemonService.getPokemons().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesApi = results;
        return this.namesApi;
      })
    ).subscribe((data: NamedAPIResourceList) => {
      console.log("mi data", data);
      this.getAllPokemonPokemon();
    });

  }

  getAllPokemonPokemon() {
    console.log("test", this.namesApi);

    if (this.namesApi != undefined) {
      for (let i = 0; i < this.namesApi?.results.length; i++) {
        this.getPokemonIndv((i+1).toString());
      }
    }


  }


  getPokemonIndv(id: string) {
    this.pokemonService.getPokemon(id).pipe(
      map((poke: Pokemon) => {
        this.pokemon?.push(poke);
        this.pokemon?.sort((a,b) => a.id - b.id)
        //console.log(poke)
        return poke;
      })
    ).subscribe((pok: Pokemon) => {

      //console.log(`pokemon ${id}`, pok);
      //console.log(this.pokemon);
    })
  }
}
