import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemonService.service';
import { Pokemon } from '../models/pokemon/pokemon.model';

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html',
  styleUrls: ['./pokemon-component.component.scss'],
})
export class PokemonComponentComponent implements OnInit {
  pokemon?: Pokemon;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    const pokemonid = 10;
    this.pokemonService.getPokemon(pokemonid).subscribe((pokemon: Pokemon) => {
      this.pokemon = pokemon;
      console.log(this.pokemon);
      console.log(this.pokemon.abilities);
    },
    (error) => {
      console.log(error);
    });
  }
}
