import { Effect } from "../effect.model"
import { FlavorText } from "../flavorText.model"

export interface ContestEffect {
  id: number
  appeal: number
  jam: number
  effect_entries: Effect[]
  flavor_text_entries: FlavorText[]
}
