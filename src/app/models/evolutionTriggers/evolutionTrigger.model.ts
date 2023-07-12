import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"

export interface EvolutionTrigger {
  id: number
  name: string
  names: Name[]
  pokemon_species: NamedApiResource[]
}
