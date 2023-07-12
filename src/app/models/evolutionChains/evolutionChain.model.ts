import { NamedApiResource } from "../namedAPIReosurce.mode"
import { ChainLink } from "./chainLink.model"

export interface EvolutionChain {
  id: number
  baby_trigger_item: NamedApiResource
  chain: ChainLink
}
