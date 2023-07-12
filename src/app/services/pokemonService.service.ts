import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Pokemon } from "../models/pokemon/pokemon.model";

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemon(id: number): Observable<Pokemon> {
    const url = `http://localhost:1015/listar/${id}`
    return this.http.get<Pokemon>(url);
  }
}
