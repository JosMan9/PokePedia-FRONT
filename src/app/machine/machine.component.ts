import { Component, OnInit } from '@angular/core';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { Machine } from '../models/machines/machine.model';
import { PokemonService } from '../services/pokemonService.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit {
  namesApi?: NamedAPIResourceList;
  maquinas?: Machine[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  this.getMaquinas();
  }

  getMaquinas() {
    this.pokemonService.getMachines().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesApi = results;
        this.getMaquinaAll();
        return results;
      })
    ).subscribe((r: NamedAPIResourceList) => {})
  }
  getMaquinaAll() {
    if(this.namesApi != undefined) {
      for(let i = 0; i < this.namesApi.results.length; i++) {
        this.getMaquinaInd((i+1).toString());
      }
    }
  }
  getMaquinaInd(id: string) {
    this.pokemonService.getMachine(id).pipe(
      map((maquina: Machine) => {
        this.maquinas?.push(maquina);
        this.maquinas?.sort((a,b) => a.id - b.id);
        console.log(maquina);
        return maquina;
      })
    ).subscribe((m: Machine) =>{})
  }

}
