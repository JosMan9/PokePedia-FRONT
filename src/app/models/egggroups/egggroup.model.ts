import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"

export interface EggGroup {
  id: number
  name: string
  names: Name[]
  pokemon_species: NamedApiResource
}
