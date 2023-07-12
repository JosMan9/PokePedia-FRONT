import { Effect } from "../effect.model"
import { NamedApiResource } from "../namedAPIReosurce.mode"

export interface ItemFlingEffect {
  id: number
  name: string
  effect_entries: Effect[]
  items: NamedApiResource[]
}
