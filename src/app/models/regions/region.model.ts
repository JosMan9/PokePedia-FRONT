import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"

export interface Region {
  id: number
  locations: NamedApiResource[]
  name: string
  names: Name[]
  main_generation: NamedApiResource
  pokedexes: NamedApiResource[]
  version_groups: NamedApiResource[]
}
