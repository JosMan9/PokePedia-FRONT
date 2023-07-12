import { NamedApiResource } from "../namedAPIReosurce.mode";
import { PokemonType } from "./pokemonType.model";

export interface PokemonTypePast {
  generation: NamedApiResource
  types: PokemonType[]
}
