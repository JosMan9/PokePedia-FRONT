import { NamedApiResource } from "../namedAPIReosurce.mode";

export interface TypeRelations {
  no_damage_to: NamedApiResource[]
  half_damage_to: NamedApiResource[]
  double_damage_to: NamedApiResource[]
  no_damage_from: NamedApiResource[]
  half_damage_from: NamedApiResource[]
  double_damage_from: NamedApiResource[]
}
