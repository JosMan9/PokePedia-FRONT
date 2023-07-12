import { NamedApiResource } from "../namedAPIReosurce.mode"
import { EvolutionDetail } from "./evolutionDetail.model"

export interface ChainLink {
  is_baby: boolean
  species: NamedApiResource
  evolution_details: EvolutionDetail[]
  evolves_to: ChainLink[]
}
