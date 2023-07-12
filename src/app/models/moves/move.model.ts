import { AbilityEffectChange } from "../abilities/abilityEffectChange.model"
import { APIResource } from "../apiReosurce.model"
import { MachineVersionDetail } from "../machineVersionDetail.model"
import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"
import { VerboseEffect } from "../verboseEffect.model"
import { ContestComboSets } from "./contestComboSets.model"
import { MoveFlavorText } from "./moveFlavorText.model"
import { MoveMetaData } from "./moveMetaData.model"
import { MoveStatChange } from "./moveStatChange.model"
import { PastMoveStatValues } from "./pastMoveStatValues.model"

export interface Move {
  id: number
  name: string
  accuracy: number
  effect_chance: number
  pp: number
  prority: number
  power: number
  contest_combos: ContestComboSets
  contest_type: NamedApiResource
  damage_class: NamedApiResource
  effect_entries: VerboseEffect[]
  effect_changes: AbilityEffectChange[]
  learned_by_pokemon: NamedApiResource[]
  flavor_text_entries: MoveFlavorText[]
  generation: NamedApiResource
  machines: MachineVersionDetail[]
  meta: MoveMetaData
  names: Name[]
  past_values: PastMoveStatValues[]
  stat_changes: MoveStatChange[]
  super_contest_effect: APIResource
  target: NamedApiResource
  type: NamedApiResource
}
