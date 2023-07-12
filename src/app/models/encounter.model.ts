import { NamedApiResource } from "./namedAPIReosurce.mode"

export interface Encounter {
  min_level: number
  max_level: number
  condition_values: NamedApiResource[]
  chance: number
  method: NamedApiResource
}
