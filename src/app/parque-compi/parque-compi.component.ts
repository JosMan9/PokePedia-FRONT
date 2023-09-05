import { Component, OnInit } from '@angular/core';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { PalParkArea } from '../models/palParkAreas/palParkArea.model';
import { PokemonService } from '../services/pokemonService.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-parque-compi',
  templateUrl: './parque-compi.component.html',
  styleUrls: ['./parque-compi.component.scss']
})
export class ParqueCompiComponent implements OnInit {
  namesApi?: NamedAPIResourceList;
  parques?: PalParkArea[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getParques();
  }

  getParques() {
    this.pokemonService.getPalParkAreas().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesApi = results;
        this.getParquesAll();
        return results;
      })
    ).subscribe((r: NamedAPIResourceList) => {})
  }
  getParquesAll() {
    if(this.namesApi != undefined) {
      for(let i = 0; i < this.namesApi.results.length; i++) {
        this.getParqueInd((i+1).toString());
      }
    }
  }
  getParqueInd(id: string) {
    this.pokemonService.getPalParkArea(id).pipe(
      map((area: PalParkArea) => {
        this.parques?.push(area);
        this.parques?.sort((a,b) => a.id - b.id);
        return area;
      })
    ).subscribe((a: PalParkArea) => {})
  }

}
