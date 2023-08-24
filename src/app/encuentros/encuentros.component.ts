import { Component, OnInit } from '@angular/core';
import { EncounterMethod } from '../models/encountersMethods/encountersMethods.model';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { PokemonService } from '../services/pokemonService.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-encuentros',
  templateUrl: './encuentros.component.html',
  styleUrls: ['./encuentros.component.scss']
})
export class EncuentrosComponent implements OnInit {
  methods?: EncounterMethod[] = [];
  namesAPI?: NamedAPIResourceList;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getMethods();
  }

  getMethods() {
    this.pokemonService.getEncounterMethods().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesAPI = results;
        console.log("resultados", results);
        this.getAllMethods();
        return results;
      })
    ).subscribe((data: NamedAPIResourceList) => { })
  }

  getAllMethods() {
    if (this.namesAPI != undefined) {
      for (let i = 0; i < this.namesAPI.results.length; i++) {
        this.getMethodInd((i+1).toString());
      }
    }
  }

  getMethodInd(id: string) {
    this.pokemonService.getEncounterMethod(id).pipe(
      map((method: EncounterMethod) => {
        this.methods?.push(method);
        this.methods?.sort((a,b) => a.id - b.id)
        console.log("mi metodo", method);
        return method;
      })
    ). subscribe((m: EncounterMethod) => {})
  }
}
