import { NamedApiResource } from "../namedAPIReosurce.mode";
import { PokemonMoveVersion } from "./pokemonMoveVersion.model";

export interface PokemonMove {
  move: NamedApiResource
  version_group_details: PokemonMoveVersion[]
}
