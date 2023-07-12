import { NamedApiResource } from "../namedAPIReosurce.mode";
import { ItemHolderPokemonVersionDetail } from "./itemHolderPokemonVersionDetail.model";

export interface ItemHolderPokemon {
  pokemon: NamedApiResource
  version_details: ItemHolderPokemonVersionDetail[]
}
