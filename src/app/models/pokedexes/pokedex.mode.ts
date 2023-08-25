import { Description } from "../description.model"
import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"
import { PokemonEntry } from "./pokemonEntry.model"

export interface Pokedex {
  id: number
  name: string
  is_main_series: boolean
  descriptions: Description[]
  names: Name[]
  pokemon_species: PokemonEntry[]
  region: NamedApiResource
  version_groups: NamedApiResource[]
}
