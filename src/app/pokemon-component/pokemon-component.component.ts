import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemonService.service';
import { Pokemon } from '../models/pokemon/pokemon.model';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { Berry } from '../models/berries/berry.model';

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html',
  styleUrls: ['./pokemon-component.component.scss'],
})
export class PokemonComponentComponent implements OnInit {
  pokemon?: Pokemon;
  namesApi?: NamedAPIResourceList;
  berry?: Berry;


  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    /*const pokemonid = 10;
    this.pokemonService.getPokemon(pokemonid).subscribe((pokemon: Pokemon) => {
      this.pokemon = pokemon;
      console.log(this.pokemon);
      console.log(this.pokemon.abilities);
    },
    (error) => {
      console.log(error);
    });*/

    this.getBerries();
    this.getBerry("10");
  }

  getBerries() {
    this.pokemonService.getBerries().subscribe((names: NamedAPIResourceList) => {
      this.namesApi = names;
      console.log(this.namesApi);
      console.log(this.namesApi.results);
    })
  }

  getBerry(id: string) {
    this.pokemonService.getBerry(id).subscribe((berry: Berry) => {
      this.berry = berry;
      console.log(this.berry);
      console.log(this.berry.item.url);
    })
  }
}
