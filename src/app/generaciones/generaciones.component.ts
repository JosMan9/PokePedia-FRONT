import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemonService.service';
import { Generation } from '../models/generations/generation.model';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-generaciones',
  templateUrl: './generaciones.component.html',
  styleUrls: ['./generaciones.component.scss']
})
export class GeneracionesComponent implements OnInit {
  generaciones?: Generation[] = [];
  namesApi?: NamedAPIResourceList;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getGeneraciones();
  }

  getGeneraciones() {
    this.pokemonService.getGenerations().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesApi = results;
        console.log("generaciones", this.namesApi);
        this.getGenAlls();
        return results;
      })
    ).subscribe((results: NamedAPIResourceList) => { })
  }

  getGenAlls() {
    if (this.namesApi != undefined) {
      for (let i = 0; i < this.namesApi?.results.length; i++) {
        this.getGenInd((i+1).toString());
      }
    }

  }

  getGenInd(id: string) {
    this.pokemonService.getGenetarion(id).pipe(
      map((gen: Generation) => {
        this.generaciones?.push(gen);
        this.generaciones?.sort((a,b) => a.id - b.id);
        console.log(",y gen", gen);
        return gen;
      })
    ).subscribe((g: Generation) => {})
  }

}
