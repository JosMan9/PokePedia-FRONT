import { Component, OnInit } from '@angular/core';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { PokemonService } from '../services/pokemonService.service';
import { map } from 'rxjs';
import { Location } from '../models/locations/location.model';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locations?: Location[] = [];
  namesApi?: NamedAPIResourceList;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getLocations();
  }

  getLocations() {
    this.pokemonService.getLocations().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesApi = results;
        console.log("results", results);
        this.getLocationAll();
        return results;
      })
    ).subscribe((r: NamedAPIResourceList) => {})
  }

  getLocationAll() {
    if(this.namesApi?.results != undefined) {
      for(let i = 0; i < this.namesApi.results.length; i++) {
        this.getLocationInd((i+1).toString());
      }
    }
  }

  getLocationInd(id: string) {
    this.pokemonService.getLocation(id).pipe(
      map((location: Location) => {
        this.locations?.push(location);
        this.locations?.sort((a,b) => a.id - b.id);
        console.log("location", location);
        return location;
      })
    ).subscribe((loc: Location) => {})
  }

}
