import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"

export interface Generation {
  id: number
  name: string
  abilities: NamedApiResource[]
  names: Name[]
  main_region: NamedApiResource
  moves: NamedApiResource[]
  pokemon_species: NamedApiResource[]
  types: NamedApiResource[]
  version_groups: NamedApiResource
}
