import { APIResource } from "../apiReosurce.model"
import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"
import { MoveStatAffectSets } from "./moveStatAffectSets.model"
import { NatureStatAffectSets } from "./natureStatAffectSets.mode"

export interface Stat {
  id: number
  name: string
  game_index: number
  is_battle_only: boolean
  affecting_moves: MoveStatAffectSets
  affecting_natures: NatureStatAffectSets
  characteristics: APIResource[]
  move_damage_class: NamedApiResource
  names: Name[]
}
