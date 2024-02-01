import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"
import { PokemonSpecies } from "../pokemonSpecies/pokemonSpecies.model"

export interface EggGroup {
  id: number
  name: string
  names: Name[]
  pokemon_species: PokemonSpecies[]
}
