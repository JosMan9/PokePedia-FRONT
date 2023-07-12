import { NamedApiResource } from "../namedAPIReosurce.mode";
import { PokemonHeldItemVersion } from "./pokemonHeldItemVersion.model";

export interface PokemonHeldItem {
  item: NamedApiResource
  version_details: PokemonHeldItemVersion[]
}
