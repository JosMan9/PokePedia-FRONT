import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"

export interface PokemonColor {
  id: number
  name: string
  names: Name[]
  pokemon_species: NamedApiResource[]
}
