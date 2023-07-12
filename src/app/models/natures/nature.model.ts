import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"
import { MoveBattleStylePreference } from "./moveBattleStylePrefrence.model"
import { NatureStatChange } from "./natureStatChange.model"

export interface Nature {
  id: number
  name: string
  decreased_stat: NamedApiResource
  increased_stat: NamedApiResource
  hates_flavor: NamedApiResource
  likes_flavor: NamedApiResource
  pokeathlon_stat_changes: NatureStatChange[]
  move_battle_style_prefrences: MoveBattleStylePreference[]
  names: Name[]
}
