import { Component, OnInit } from '@angular/core';
import { LocationArea } from '../models/locationAreas/locationArea.model';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { PokemonService } from '../services/pokemonService.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-location-areas',
  templateUrl: './location-areas.component.html',
  styleUrls: ['./location-areas.component.scss']
})
export class LocationAreasComponent implements OnInit {
  areas?: LocationArea[] = [];
  namesApi?: NamedAPIResourceList;

  constructor(private pokemoService: PokemonService) { }

  ngOnInit(): void {
    this.getAreas();
  }

  getAreas() {
    this.pokemoService.getLocationAreas().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesApi = results;
        console.log("resultados", results);
        this.getAreasAll();
        return results;
      })
    ).subscribe((r: NamedAPIResourceList) => {})
  }

  getAreasAll() {
    if(this.namesApi != undefined) {
      for(let i = 0; i < this.namesApi.results.length; i++) {
        this.getAreaInd((i+1).toString());
      }
    }
  }

  getAreaInd(id:string) {
  this.pokemoService.getLocationArea(id).pipe(
    map((area: LocationArea) => {
      this.areas?.push(area);
      this.areas?.sort((a,b) => a.id - b.id);
      return area;
    })
  ).subscribe((a: LocationArea) => {})
  }

}
