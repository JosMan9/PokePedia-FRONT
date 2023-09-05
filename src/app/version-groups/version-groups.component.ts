import { Component, OnInit } from '@angular/core';
import { VersionGroup } from '../models/versionGorups/versionGroup.model';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { PokemonService } from '../services/pokemonService.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-version-groups',
  templateUrl: './version-groups.component.html',
  styleUrls: ['./version-groups.component.scss']
})
export class VersionGroupsComponent implements OnInit {
  grupos?: VersionGroup[] = [];
  namesApi?: NamedAPIResourceList;

  constructor(private pokemonSerivce: PokemonService) { }

  ngOnInit(): void {
    this.getGrupos();
  }

  getGrupos() {
    this.pokemonSerivce.getVersionGroups().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesApi = results;
        this.getGruposAll();
        return results;
      })
    ). subscribe((r: NamedAPIResourceList) => {})
  }

  getGruposAll() {
    if(this.namesApi != undefined) {
      for(let i = 0; i < this.namesApi.results.length; i++) {
        this.getGrupoInd((i+1).toString());
      }
    }


  }

  getGrupoInd(id: string) {
    this.pokemonSerivce.getVersionGroup(id).pipe(
      map((grupo: VersionGroup) => {
        this.grupos?.push(grupo);
        this.grupos?.sort((a,b) => a.id - b.id);
        console.log(grupo);
        return grupo;
      })
    ).subscribe((g: VersionGroup) => {})
  }

}
