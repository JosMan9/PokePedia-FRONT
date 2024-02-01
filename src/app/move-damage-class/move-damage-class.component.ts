import { Component, OnInit } from '@angular/core';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { PokemonService } from '../services/pokemonService.service';
import { map } from 'rxjs';
import { MoveDamageClass } from '../models/moveDamageClassses/moveDamageClass.model';

@Component({
  selector: 'app-move-damage-class',
  templateUrl: './move-damage-class.component.html',
  styleUrls: ['./move-damage-class.component.scss']
})
export class MoveDamageClassComponent implements OnInit {
  namesApi?: NamedAPIResourceList;
  clases?: MoveDamageClass[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getClasses();
  }

  getClasses() {
    this.pokemonService.getMoveDamageClasses().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesApi = results;
        this.getClassAll();
        return results;
      })
    ).subscribe((r: NamedAPIResourceList) => { })
  }

  getClassAll() {
    if(this.namesApi != undefined) {
      for(let i = 0; i < this.namesApi.results.length; i++) {
        this.getClassInd((i+1).toString());
      }
    }
  }
  getClassInd(id: string) {
    this.pokemonService.getMoveDamageClass(id).pipe(
      map((clase: MoveDamageClass) => {
        this.clases?.push(clase);
        this.clases?.sort((a,b) => a.id - b.id);
        return clase;
      })
    ).subscribe((c: MoveDamageClass) => {})
  }

}



