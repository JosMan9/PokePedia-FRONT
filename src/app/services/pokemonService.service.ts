import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Pokemon } from "../models/pokemon/pokemon.model";
import { NamedAPIResourceList } from "../models/namedAPIRlist.model";
import { Berry } from "../models/berries/berry.model";
import { BerryFirmness } from "../models/berryFirmness/berryFirmn.model";
import { BerryFlavor } from "../models/berryFlavors/berryFlavors.model";
import { ContestType } from "../models/contestTypes/contestType.model";

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {

  }

  public URL = "http://localhost:1015"

  /*
  * métodos para las bayas
  */
  getBerries(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/berry`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getBerry(id:string): Observable<Berry> {
    const url = `${this.URL}/berry/${id}`
    return this.http.get<Berry>(url);
  }


  /*
   * Métodos para la firmeza de las bayas
   */

  getBerryFirmnesses(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/berry-firmness`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getBerryFirmness(id: string): Observable<BerryFirmness> {
    const url = `${this.URL}/berry-firmness/${id}`;
    return this.http.get<BerryFirmness>(url);
  }


  /*
   * Métodos para los sabores de las bayas
   */

  getBerryFlavors(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/berry-flavor}`;
    return this.http.get<NamedAPIResourceList>(url);
  }

  getBerryFlavor(id: string): Observable<BerryFlavor> {
    const url = `${this.URL}/berry-flavor/${id}`;
    return this.http.get<BerryFlavor>(url);
  }


  /*
  * Métodos para los tipos de concursos
  */

  getContestTypes(): Observable<NamedAPIResourceList> {
    const url = `${this.URL}/contest-type`;
    return this.http.get<NamedAPIResourceList> (url);
  }

  getContestType(id: string): Observable<ContestType> {
    const url = `${this.URL}/contest-type/${id}`;
    return this.http.get<ContestType>(url);
  }

  getPokemon(id: number): Observable<Pokemon> {
    const url = `${URL}/listar/${id}`
    return this.http.get<Pokemon>(url);
  }
}
