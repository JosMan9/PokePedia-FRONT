import { Component, OnInit } from '@angular/core';
import { ContestType } from '../models/contestTypes/contestType.model';
import { NamedAPIResourceList } from '../models/namedAPIRlist.model';
import { PokemonService } from '../services/pokemonService.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.scss']
})
export class ContestComponent implements OnInit {
  contests?: ContestType[] = [];
  namesApi?: NamedAPIResourceList;
  contest?: ContestType;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getContests();
  }

  getContests() {
    this.pokemonService.getContestTypes().pipe(
      map((results: NamedAPIResourceList) => {
        this.namesApi = results;
        return this.namesApi;
      })
    ).subscribe((data: NamedAPIResourceList) => {
      console.log("mis concursos", data);
      this.getAllContests();
    });
  }

  getAllContests() {
    if (this.namesApi != undefined) {
      for (let i = 0; i < this.namesApi.results.length; i++) {
        this.getContestInd((i + 1).toString());
      }
    }
  }

  getContestInd(id: string) {
    this.pokemonService.getContestType(id).pipe(
      map((contest: ContestType) => {
        this.contests?.push(contest);
        console.log("concurso", contest);
        return contest;
      })
    ).subscribe((c: ContestType) => { })
  }

}




