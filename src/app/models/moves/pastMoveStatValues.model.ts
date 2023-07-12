import { NamedApiResource } from "../namedAPIReosurce.mode"
import { VerboseEffect } from "../verboseEffect.model"

export interface PastMoveStatValues {
  accuracy: number
  effect_change: number
  power: number
  pp: number
  effect_entries: VerboseEffect[]
  type: NamedApiResource
  version_group: NamedApiResource
}
