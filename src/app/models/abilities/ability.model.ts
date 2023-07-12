import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"
import { VerboseEffect } from "../verboseEffect.model"
import { AbilityEffectChange } from "./abilityEffectChange.model"
import { AbilityFlavorText } from "./abilityFlavorText.model"
import { AbilityPokemon } from "./abilityPokemon.model"

export interface Ability {
  id: number
  name: string
  is_main_series: boolean
  generation: NamedApiResource
  names: Name[]
  effect_entries: VerboseEffect[]
  efect_changes: AbilityEffectChange[]
  flavor_text_entries: AbilityFlavorText[]
  pokemon: AbilityPokemon[]
}
