import { FlavorText } from "../flavorText.model"
import { NamedApiResource } from "../namedAPIReosurce.mode"

export interface SuperContestEffects {
  id: number
  appeal: number
  flavor_text_entries: FlavorText[]
  moves: NamedApiResource[]
}
