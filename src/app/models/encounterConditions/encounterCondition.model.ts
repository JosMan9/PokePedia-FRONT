import { Name } from "../name.mode"
import { NamedApiResource } from "../namedAPIReosurce.mode"

export interface EncounterCondition {
  id: number
  name: string
  names: Name[]
  values: NamedApiResource[]
}
