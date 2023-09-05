import { Component, OnInit } from '@angular/core';
import { Region } from '../models/regions/region.model';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { PokemonService } from '../services/pokemonService.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
  regiones?: Region[] = [];
  namesApi?: NamedAPIResourceList;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getRegiones();
  }

  getRegiones() {
    this.pokemonService.getRegions().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesApi = results;
        this.getRegionAll();
        return results;
      })
    ).subscribe((r: NamedAPIResourceList) => {})
  }
  getRegionAll() {
    if(this.namesApi != undefined) {
      for(let i = 0; i < this.namesApi.results.length; i++) {
        this.getRegionInd((i+1).toString());
      }
    }
  }
  getRegionInd(id: string) {
    this.pokemonService.getRegion(id).pipe(
      map((region: Region) => {
        this.regiones?.push(region);
        console.log("region", region)
        this.regiones?.sort((a,b) => a.id - b.id);
        return region;
      })
    ).subscribe((r: Region) => {})
  }


}
