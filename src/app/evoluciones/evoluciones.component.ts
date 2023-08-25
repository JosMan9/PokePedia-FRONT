import { Component, OnInit } from '@angular/core';
import { EvolutionTrigger } from '../models/evolutionTriggers/evolutionTrigger.model';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { PokemonService } from '../services/pokemonService.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-evoluciones',
  templateUrl: './evoluciones.component.html',
  styleUrls: ['./evoluciones.component.scss']
})
export class EvolucionesComponent implements OnInit {
  evoluciones?: EvolutionTrigger[] = [];
  namesApi?: NamedAPIResourceList;

  constructor(private PokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getEvoluciones();
  }

  getEvoluciones() {
    this.PokemonService.getEvolutionTriggers().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesApi = results;
        return results;
      })
    ).subscribe((res: NamedAPIResourceList) => {
      console.log("resultados", res);
      this.getEvolucionesALL();
    })
  }

  getEvolucionesALL() {
    if (this.namesApi != undefined) {
      for (let i = 0; i < this.namesApi.results.length; i++) {
        this.getEvolucionInd((i + 1).toString());
      }
    }
  }

  getEvolucionInd(id: string) {
    this.PokemonService.getEvolutionTrigger(id).pipe(
      map((evolution: EvolutionTrigger) => {
        this.evoluciones?.push(evolution);
        console.log("my evolution", evolution);
        return evolution;
      })
    ).subscribe((e: EvolutionTrigger) => { })
  }

}
